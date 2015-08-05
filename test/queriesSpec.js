var expect = require('chai').expect;

var antlr4 = require('antlr4');
var antlr4SQL = require('../main.js');


      /**
       * Listens for walker events generated while traversing
       * the first select clause of a query.
       *
       * Puts column names and aliases in the `parameters` array,
       * excluding column wildcards.
       */
      function SelectParametersParser(query) {
        antlr4SQL.SQLListener.call(this);
        this.parameter = null;
        this.parameters = [];
        this.query = query;
        this.inSelectClause = false;
        return this;
      }

      SelectParametersParser.prototype = Object.create(antlr4SQL.SQLListener.prototype);
      SelectParametersParser.prototype.constructor = SelectParametersParser;

      SelectParametersParser.prototype.enterSelect_stmt = function (ctx) {
        if (this.parameters.length === 0) {
          this.inSelectClause = true;
        }
      };

      SelectParametersParser.prototype.exitSelect_stmt = function (ctx) {
        this.inSelectClause = false;
      };

      SelectParametersParser.prototype.exitLiteral_value = function (ctx) {
        this.parameter = null;
      };

      SelectParametersParser.prototype.enterResult_column  = function (ctx) {
        if (!this.inSelectClause) {
          return;
        }
        var alias = ctx.column_alias();
        var parameter;
        if (alias) {
          parameter = alias.getText();
        } else {
          parameter = ctx.getText();
          if (parameter === '*' || parameter.substring(parameter.length-2) === '.*') {
            parameter = null;
          }
        }
        if (parameter) {
          this.parameter = parameter;
        }
      };

      SelectParametersParser.prototype.exitResult_column  = function (ctx) {
        if (this.parameter) {
          this.parameters.push(this.parameter);
          this.parameter = null;
        }

        if (!this.inSelectClause) {
          return;
        }
      };

function parseQuery(query) {
  var chars = new antlr4.InputStream(query);
  var lexer = new antlr4SQL.SQLLexer(chars);
  var tokens  = new antlr4.CommonTokenStream(lexer);
  var parser = new antlr4SQL.SQLParser(tokens);
  parser.buildParseTrees = true;

  var context = parser.select_stmt();

  var parametersParser = new SelectParametersParser(query);
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(parametersParser, context);

  return {
    'parameters': parametersParser.parameters
  }
}

describe('Using the antlr4-sql package', function () {

  describe('it should be possible to extract the parameters declared in the following queries', function () {

    var query1 = 'SELECT currency.id, currency.name AS currencyName, country.name AS country ' + 
            'FROM currencies, country WHERE country.currency = currency.id';
    it(query1, function () {
      var query = parseQuery(query1);
      expect(query.parameters).to.eql(['currency.id', 'currencyName', 'country'])
    });


    var query2 = 'SELECT currency.id, [currency.name] AS currencyName, country.name AS country ' + 
            'FROM currencies, country WHERE country.currency = currency.id';
    it(query2, function () {
      var query = parseQuery(query2);
      expect(query.parameters).to.eql(['currency.id', 'currencyName', 'country'])
    });


    var query3 = 'SELECT currency.*, country.name AS country ' + 
            'FROM currencies, country WHERE country.currency = currency.id';
    it(query3, function () {
      var query = parseQuery(query3);
      expect(query.parameters).to.eql(['country'])
    });


    var query4 = 'SELECT currency.*, country.name AS country ' + 
            'FROM currencies, country WHERE country.currency = currency.id';
    it(query4, function () {
      var query = parseQuery(query4);
      expect(query.parameters).to.eql(['country'])
    });


    var query5 = 'SELECT name FROM (SELECT * FROM currencies)';
    it(query5, function () {
      var query = parseQuery(query5);
      expect(query.parameters).to.eql(['name'])
    });


    var query6 = 'ELECT name FROM (SELECT * FROM currencies)';
    it(query6, function () {
      expect(parseQuery(query6)).to.throw;
    });


    var query7 = 'SELECT name, \'value\' FROM table';
    it(query7, function () {
      var query = parseQuery(query7);
      expect(query.parameters).to.eql(['name'])
    });


    var query8 = 'SELECT DISTINCT first_name, last_name FROM people';
    it(query8, function () {
      var query = parseQuery(query8);
      expect(query.parameters).to.eql(['first_name', 'last_name'])
    });


    var query9 = 'SELECT COUNT(id) AS count FROM people WHERE country = 20';
    it(query9, function () {
      var query = parseQuery(query9);
      expect(query.parameters).to.eql(['count'])
    });

  });

});