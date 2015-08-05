antlr4-javascript-sql
=====================

An UMD module wrapping ANTLR generated parser, lexer, listener and visitor for SQL databases,
based on the antlr4-javascript-sparql module by Szymon Danielczyk.

### Info 

Parser classes where generated from G4 grammar files using the ANTLR runtime, version 4.5.1.

The SQL grammar file is Copyright (c) 2014 by Bart Kiers, released under the MIT License; it can be downloaded from the antlr/grammars-v4 repository.

Classes have been generated with the following commands:

```
java -Xmx500M -cp "antlr-4.5.1-complete.jar:$CLASSPATH" org.antlr.v4.Tool -Dlanguage=JavaScript grammars/sql/SQL.g4 -o lib
```

Then a the following modifications have been made to generated classes:

  * each class has been wrapped in a function for dependency injection
  * in `SQLLexer`, `atn` and `decisionToFDA` have been moved inside the constructor
  * in `SQLParser` `atn`, `decisionToFDA`, `sharedContextCache` have been moved inside the constructor; `atn` has been bound to `this` and the `Object.defineProperty` has been commented out

### How to build

To build the project install `npm` and run `npm install`;
the resulting module is available in `release/antlr4-sql.js`
