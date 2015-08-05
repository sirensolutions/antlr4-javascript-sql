// Generated from grammars/sql/SQL.g4 by ANTLR 4.5.1
// jshint ignore: start

module.exports = function (antlr4) {

// This class defines a complete listener for a parse tree produced by SQLParser.
function SQLListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SQLListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SQLListener.prototype.constructor = SQLListener;

// Enter a parse tree produced by SQLParser#parse.
SQLListener.prototype.enterParse = function(ctx) {
};

// Exit a parse tree produced by SQLParser#parse.
SQLListener.prototype.exitParse = function(ctx) {
};


// Enter a parse tree produced by SQLParser#error.
SQLListener.prototype.enterError = function(ctx) {
};

// Exit a parse tree produced by SQLParser#error.
SQLListener.prototype.exitError = function(ctx) {
};


// Enter a parse tree produced by SQLParser#sql_stmt_list.
SQLListener.prototype.enterSql_stmt_list = function(ctx) {
};

// Exit a parse tree produced by SQLParser#sql_stmt_list.
SQLListener.prototype.exitSql_stmt_list = function(ctx) {
};


// Enter a parse tree produced by SQLParser#sql_stmt.
SQLListener.prototype.enterSql_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#sql_stmt.
SQLListener.prototype.exitSql_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#alter_table_stmt.
SQLListener.prototype.enterAlter_table_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#alter_table_stmt.
SQLListener.prototype.exitAlter_table_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#analyze_stmt.
SQLListener.prototype.enterAnalyze_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#analyze_stmt.
SQLListener.prototype.exitAnalyze_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#attach_stmt.
SQLListener.prototype.enterAttach_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#attach_stmt.
SQLListener.prototype.exitAttach_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#begin_stmt.
SQLListener.prototype.enterBegin_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#begin_stmt.
SQLListener.prototype.exitBegin_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#commit_stmt.
SQLListener.prototype.enterCommit_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#commit_stmt.
SQLListener.prototype.exitCommit_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#compound_select_stmt.
SQLListener.prototype.enterCompound_select_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#compound_select_stmt.
SQLListener.prototype.exitCompound_select_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#create_index_stmt.
SQLListener.prototype.enterCreate_index_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#create_index_stmt.
SQLListener.prototype.exitCreate_index_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#create_table_stmt.
SQLListener.prototype.enterCreate_table_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#create_table_stmt.
SQLListener.prototype.exitCreate_table_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#create_trigger_stmt.
SQLListener.prototype.enterCreate_trigger_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#create_trigger_stmt.
SQLListener.prototype.exitCreate_trigger_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#create_view_stmt.
SQLListener.prototype.enterCreate_view_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#create_view_stmt.
SQLListener.prototype.exitCreate_view_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#create_virtual_table_stmt.
SQLListener.prototype.enterCreate_virtual_table_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#create_virtual_table_stmt.
SQLListener.prototype.exitCreate_virtual_table_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#delete_stmt.
SQLListener.prototype.enterDelete_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#delete_stmt.
SQLListener.prototype.exitDelete_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#delete_stmt_limited.
SQLListener.prototype.enterDelete_stmt_limited = function(ctx) {
};

// Exit a parse tree produced by SQLParser#delete_stmt_limited.
SQLListener.prototype.exitDelete_stmt_limited = function(ctx) {
};


// Enter a parse tree produced by SQLParser#detach_stmt.
SQLListener.prototype.enterDetach_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#detach_stmt.
SQLListener.prototype.exitDetach_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#drop_index_stmt.
SQLListener.prototype.enterDrop_index_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#drop_index_stmt.
SQLListener.prototype.exitDrop_index_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#drop_table_stmt.
SQLListener.prototype.enterDrop_table_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#drop_table_stmt.
SQLListener.prototype.exitDrop_table_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#drop_trigger_stmt.
SQLListener.prototype.enterDrop_trigger_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#drop_trigger_stmt.
SQLListener.prototype.exitDrop_trigger_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#drop_view_stmt.
SQLListener.prototype.enterDrop_view_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#drop_view_stmt.
SQLListener.prototype.exitDrop_view_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#factored_select_stmt.
SQLListener.prototype.enterFactored_select_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#factored_select_stmt.
SQLListener.prototype.exitFactored_select_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#insert_stmt.
SQLListener.prototype.enterInsert_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#insert_stmt.
SQLListener.prototype.exitInsert_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#pragma_stmt.
SQLListener.prototype.enterPragma_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#pragma_stmt.
SQLListener.prototype.exitPragma_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#reindex_stmt.
SQLListener.prototype.enterReindex_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#reindex_stmt.
SQLListener.prototype.exitReindex_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#release_stmt.
SQLListener.prototype.enterRelease_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#release_stmt.
SQLListener.prototype.exitRelease_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#rollback_stmt.
SQLListener.prototype.enterRollback_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#rollback_stmt.
SQLListener.prototype.exitRollback_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#savepoint_stmt.
SQLListener.prototype.enterSavepoint_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#savepoint_stmt.
SQLListener.prototype.exitSavepoint_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#simple_select_stmt.
SQLListener.prototype.enterSimple_select_stmt = function(ctx) {
  console.log('simple');
  console.log(ctx.getText());
};

// Exit a parse tree produced by SQLParser#simple_select_stmt.
SQLListener.prototype.exitSimple_select_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#select_stmt.
SQLListener.prototype.enterSelect_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#select_stmt.
SQLListener.prototype.exitSelect_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#select_or_values.
SQLListener.prototype.enterSelect_or_values = function(ctx) {
};

// Exit a parse tree produced by SQLParser#select_or_values.
SQLListener.prototype.exitSelect_or_values = function(ctx) {
};


// Enter a parse tree produced by SQLParser#update_stmt.
SQLListener.prototype.enterUpdate_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#update_stmt.
SQLListener.prototype.exitUpdate_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#update_stmt_limited.
SQLListener.prototype.enterUpdate_stmt_limited = function(ctx) {
};

// Exit a parse tree produced by SQLParser#update_stmt_limited.
SQLListener.prototype.exitUpdate_stmt_limited = function(ctx) {
};


// Enter a parse tree produced by SQLParser#vacuum_stmt.
SQLListener.prototype.enterVacuum_stmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#vacuum_stmt.
SQLListener.prototype.exitVacuum_stmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#column_def.
SQLListener.prototype.enterColumn_def = function(ctx) {
};

// Exit a parse tree produced by SQLParser#column_def.
SQLListener.prototype.exitColumn_def = function(ctx) {
};


// Enter a parse tree produced by SQLParser#type_name.
SQLListener.prototype.enterType_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#type_name.
SQLListener.prototype.exitType_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#column_constraint.
SQLListener.prototype.enterColumn_constraint = function(ctx) {
};

// Exit a parse tree produced by SQLParser#column_constraint.
SQLListener.prototype.exitColumn_constraint = function(ctx) {
};


// Enter a parse tree produced by SQLParser#conflict_clause.
SQLListener.prototype.enterConflict_clause = function(ctx) {
};

// Exit a parse tree produced by SQLParser#conflict_clause.
SQLListener.prototype.exitConflict_clause = function(ctx) {
};


// Enter a parse tree produced by SQLParser#expr.
SQLListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by SQLParser#expr.
SQLListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by SQLParser#foreign_key_clause.
SQLListener.prototype.enterForeign_key_clause = function(ctx) {
};

// Exit a parse tree produced by SQLParser#foreign_key_clause.
SQLListener.prototype.exitForeign_key_clause = function(ctx) {
};


// Enter a parse tree produced by SQLParser#raise_function.
SQLListener.prototype.enterRaise_function = function(ctx) {
};

// Exit a parse tree produced by SQLParser#raise_function.
SQLListener.prototype.exitRaise_function = function(ctx) {
};


// Enter a parse tree produced by SQLParser#indexed_column.
SQLListener.prototype.enterIndexed_column = function(ctx) {
};

// Exit a parse tree produced by SQLParser#indexed_column.
SQLListener.prototype.exitIndexed_column = function(ctx) {
};


// Enter a parse tree produced by SQLParser#table_constraint.
SQLListener.prototype.enterTable_constraint = function(ctx) {
};

// Exit a parse tree produced by SQLParser#table_constraint.
SQLListener.prototype.exitTable_constraint = function(ctx) {
};


// Enter a parse tree produced by SQLParser#with_clause.
SQLListener.prototype.enterWith_clause = function(ctx) {
};

// Exit a parse tree produced by SQLParser#with_clause.
SQLListener.prototype.exitWith_clause = function(ctx) {
};


// Enter a parse tree produced by SQLParser#qualified_table_name.
SQLListener.prototype.enterQualified_table_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#qualified_table_name.
SQLListener.prototype.exitQualified_table_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#ordering_term.
SQLListener.prototype.enterOrdering_term = function(ctx) {
};

// Exit a parse tree produced by SQLParser#ordering_term.
SQLListener.prototype.exitOrdering_term = function(ctx) {
};


// Enter a parse tree produced by SQLParser#pragma_value.
SQLListener.prototype.enterPragma_value = function(ctx) {
};

// Exit a parse tree produced by SQLParser#pragma_value.
SQLListener.prototype.exitPragma_value = function(ctx) {
};


// Enter a parse tree produced by SQLParser#common_table_expression.
SQLListener.prototype.enterCommon_table_expression = function(ctx) {
};

// Exit a parse tree produced by SQLParser#common_table_expression.
SQLListener.prototype.exitCommon_table_expression = function(ctx) {
};


// Enter a parse tree produced by SQLParser#result_column.
SQLListener.prototype.enterResult_column = function(ctx) {
};
;
// Exit a parse tree produced by SQLParser#result_column.
SQLListener.prototype.exitResult_column = function(ctx) {
};


// Enter a parse tree produced by SQLParser#table_or_subquery.
SQLListener.prototype.enterTable_or_subquery = function(ctx) {
};

// Exit a parse tree produced by SQLParser#table_or_subquery.
SQLListener.prototype.exitTable_or_subquery = function(ctx) {
};


// Enter a parse tree produced by SQLParser#join_clause.
SQLListener.prototype.enterJoin_clause = function(ctx) {
};

// Exit a parse tree produced by SQLParser#join_clause.
SQLListener.prototype.exitJoin_clause = function(ctx) {
};


// Enter a parse tree produced by SQLParser#join_operator.
SQLListener.prototype.enterJoin_operator = function(ctx) {
};

// Exit a parse tree produced by SQLParser#join_operator.
SQLListener.prototype.exitJoin_operator = function(ctx) {
};


// Enter a parse tree produced by SQLParser#join_constraint.
SQLListener.prototype.enterJoin_constraint = function(ctx) {
};

// Exit a parse tree produced by SQLParser#join_constraint.
SQLListener.prototype.exitJoin_constraint = function(ctx) {
};


// Enter a parse tree produced by SQLParser#select_core.
SQLListener.prototype.enterSelect_core = function(ctx) {
};

// Exit a parse tree produced by SQLParser#select_core.
SQLListener.prototype.exitSelect_core = function(ctx) {
};


// Enter a parse tree produced by SQLParser#compound_operator.
SQLListener.prototype.enterCompound_operator = function(ctx) {
};

// Exit a parse tree produced by SQLParser#compound_operator.
SQLListener.prototype.exitCompound_operator = function(ctx) {
};


// Enter a parse tree produced by SQLParser#cte_table_name.
SQLListener.prototype.enterCte_table_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#cte_table_name.
SQLListener.prototype.exitCte_table_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#signed_number.
SQLListener.prototype.enterSigned_number = function(ctx) {
};

// Exit a parse tree produced by SQLParser#signed_number.
SQLListener.prototype.exitSigned_number = function(ctx) {
};


// Enter a parse tree produced by SQLParser#literal_value.
SQLListener.prototype.enterLiteral_value = function(ctx) {
};

// Exit a parse tree produced by SQLParser#literal_value.
SQLListener.prototype.exitLiteral_value = function(ctx) {
};


// Enter a parse tree produced by SQLParser#unary_operator.
SQLListener.prototype.enterUnary_operator = function(ctx) {
};

// Exit a parse tree produced by SQLParser#unary_operator.
SQLListener.prototype.exitUnary_operator = function(ctx) {
};


// Enter a parse tree produced by SQLParser#error_message.
SQLListener.prototype.enterError_message = function(ctx) {
};

// Exit a parse tree produced by SQLParser#error_message.
SQLListener.prototype.exitError_message = function(ctx) {
};


// Enter a parse tree produced by SQLParser#module_argument.
SQLListener.prototype.enterModule_argument = function(ctx) {
};

// Exit a parse tree produced by SQLParser#module_argument.
SQLListener.prototype.exitModule_argument = function(ctx) {
};


// Enter a parse tree produced by SQLParser#column_alias.
SQLListener.prototype.enterColumn_alias = function(ctx) {
};

// Exit a parse tree produced by SQLParser#column_alias.
SQLListener.prototype.exitColumn_alias = function(ctx) {
};


// Enter a parse tree produced by SQLParser#keyword.
SQLListener.prototype.enterKeyword = function(ctx) {
};

// Exit a parse tree produced by SQLParser#keyword.
SQLListener.prototype.exitKeyword = function(ctx) {
};


// Enter a parse tree produced by SQLParser#name.
SQLListener.prototype.enterName = function(ctx) {
};

// Exit a parse tree produced by SQLParser#name.
SQLListener.prototype.exitName = function(ctx) {
};


// Enter a parse tree produced by SQLParser#function_name.
SQLListener.prototype.enterFunction_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#function_name.
SQLListener.prototype.exitFunction_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#database_name.
SQLListener.prototype.enterDatabase_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#database_name.
SQLListener.prototype.exitDatabase_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#table_name.
SQLListener.prototype.enterTable_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#table_name.
SQLListener.prototype.exitTable_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#table_or_index_name.
SQLListener.prototype.enterTable_or_index_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#table_or_index_name.
SQLListener.prototype.exitTable_or_index_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#new_table_name.
SQLListener.prototype.enterNew_table_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#new_table_name.
SQLListener.prototype.exitNew_table_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#column_name.
SQLListener.prototype.enterColumn_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#column_name.
SQLListener.prototype.exitColumn_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#collation_name.
SQLListener.prototype.enterCollation_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#collation_name.
SQLListener.prototype.exitCollation_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#foreign_table.
SQLListener.prototype.enterForeign_table = function(ctx) {
};

// Exit a parse tree produced by SQLParser#foreign_table.
SQLListener.prototype.exitForeign_table = function(ctx) {
};


// Enter a parse tree produced by SQLParser#index_name.
SQLListener.prototype.enterIndex_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#index_name.
SQLListener.prototype.exitIndex_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#trigger_name.
SQLListener.prototype.enterTrigger_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#trigger_name.
SQLListener.prototype.exitTrigger_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#view_name.
SQLListener.prototype.enterView_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#view_name.
SQLListener.prototype.exitView_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#module_name.
SQLListener.prototype.enterModule_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#module_name.
SQLListener.prototype.exitModule_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#pragma_name.
SQLListener.prototype.enterPragma_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#pragma_name.
SQLListener.prototype.exitPragma_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#savepoint_name.
SQLListener.prototype.enterSavepoint_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#savepoint_name.
SQLListener.prototype.exitSavepoint_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#table_alias.
SQLListener.prototype.enterTable_alias = function(ctx) {
};

// Exit a parse tree produced by SQLParser#table_alias.
SQLListener.prototype.exitTable_alias = function(ctx) {
};


// Enter a parse tree produced by SQLParser#transaction_name.
SQLListener.prototype.enterTransaction_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#transaction_name.
SQLListener.prototype.exitTransaction_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#any_name.
SQLListener.prototype.enterAny_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#any_name.
SQLListener.prototype.exitAny_name = function(ctx) {
};

return SQLListener;
};