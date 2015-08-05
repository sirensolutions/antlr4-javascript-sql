antlr4-javascript-sql
=====================

An UMD module wrapping ANTLR generated parser, lexer, listener and visitor for SQL databases,
based on the antlr4-javascript-sparql module by Szymon Danielczyk.

### Info 

Parser classes where generated from G4 grammar files using the ANTLR runtime, version 4.5.1.

SQL grammar files taken from the Apache Tajo project, distributed under the Apache 2.0 License.

Classes have been generated with the following commands:

```
java -Xmx500M -cp "antlr-4.5.1-complete.jar:$CLASSPATH" org.antlr.v4.Tool -Dlanguage=JavaScript grammars/sql/SQLLLexer.g4 -o lib
mv lib/grammars/sql/SQLLexer.tokens lib/
java -Xmx500M -cp "antlr-4.5.1-complete.jar:$CLASSPATH" org.antlr.v4.Tool -Dlanguage=JavaScript grammars/sql/SQLParser.g4 -visitor -o lib
mv lib/grammars/sql/SQL* lib/
```
Then a the following modifications have been made to generated classes:

  * each class has been wrapped in a function for dependency injection
  * in `SQLLexer`, `atn` and `decisionToFDA` have been moved inside the constructor
  * in `SQLParser` `atn`, `decisionToFDA`, `sharedContextCache` have been moved inside the constructor; `atn` has been bound to `this` and the `Object.defineProperty` has been commented out

### How to build

Node is required to build the project.

To build, install all the depencies by running `npm install`, then run `node install` to combine all the files into a single UMD module.

The resulting module is available in `release/antlr4-sql.js`
