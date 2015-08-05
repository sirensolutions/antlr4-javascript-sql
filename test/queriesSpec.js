var expect = require('chai').expect;
var antlr4 = require('antlr4');
var antlr4SQL = require('../main.js');

function ParametersParser(query) {
  antlr4SQL.SQLParserListener.call(this);
  this.selectParameters = [];
  this.query = query;
  this.inSelectClause = false;
  this.resetParameter();
  return this;
}

ParametersParser.prototype = Object.create(antlr4SQL.SQLParserListener.prototype);
ParametersParser.prototype.constructor = ParametersParser;

ParametersParser.prototype.resetParameter = function () {
  this.parameter = null;
  this.parameterStart = 0;
  this.parameterStop = 0;
  this.parameterAliased = false;
  this.parameterIsFunction = false;
};

ParametersParser.prototype.enterSelect_list = function (ctx) {
  this.inSelectClause = true;
};

ParametersParser.prototype.enterDerived_column  = function (ctx) {
  this.resetParameter();
  this.parameterStart = ctx.start.start;
};

ParametersParser.prototype.exitIdentifier  = function (ctx) {
  if (this.parameterAliased) {
    this.parameterStart = ctx.start.start;
  }
  this.parameterStop = ctx.start.stop;
};

ParametersParser.prototype.enterAs_clause  = function (ctx) {
  this.parameterAliased = true;
};

ParametersParser.prototype.exitDerived_column  = function (ctx) {
  this.parameter = this.query.substring(this.parameterStart, this.parameterStop + 1);
  if (this.inSelectClause) {
    this.selectParameters.push(this.parameter);
  }
  this.resetParameter();
};

ParametersParser.prototype.exitSelect_list  = function (ctx) {
  this.inSelectClause = false;
};

function parseQuery(query) {
  var chars = new antlr4.InputStream(query);
  var lexer = new antlr4SQL.SQLLexer(chars);
  var tokens  = new antlr4.CommonTokenStream(lexer);
  var parser = new antlr4SQL.SQLParser(tokens);
  parser.buildParseTrees = true;

  var context = parser.query_specification();

  var parametersParser = new ParametersParser(query);
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(parametersParser, context);

  return {
    'selectParameters': parametersParser.selectParameters
  }
}

describe('Using the antlr4-sql package', function () {

  describe('it should be possible to extract the parameters declared in the following queries', function () {

    var query1 = 'SELECT currency.id, currency.name AS currencyName, country.name AS country ' + 
            'FROM currencies, country WHERE country.currency = currency.id';

    it(query1, function () {
      var query = parseQuery(query1);
      expect(query.selectParameters).to.eql(['currency.id', 'currencyName', 'country'])
    });

    var query2 = 'SELECT currency.id, [currency.name] AS currencyName, country.name AS country ' + 
            'FROM currencies, country WHERE country.currency = currency.id';

    it(query2, function () {
      var query = parseQuery(query2);
      expect(query.selectParameters).to.eql(['currency.id', 'currencyName', 'country'])
    });

    var query3 = 'SELECT currency.*, country.name AS country ' + 
            'FROM currencies, country WHERE country.currency = currency.id';

    it(query3, function () {
      var query = parseQuery(query3);
      expect(query.selectParameters).to.eql(['country'])
    });

  });

});