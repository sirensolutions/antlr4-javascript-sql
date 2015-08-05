// Generated from grammars/sql/SQL.g4 by ANTLR 4.5.1
// jshint ignore: start

module.exports = function (antlr4) {

// This class defines a complete generic visitor for a parse tree produced by SQLParser.

function SQLVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SQLVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SQLVisitor.prototype.constructor = SQLVisitor;

// Visit a parse tree produced by SQLParser#parse.
SQLVisitor.prototype.visitParse = function(ctx) {
};


// Visit a parse tree produced by SQLParser#error.
SQLVisitor.prototype.visitError = function(ctx) {
};


// Visit a parse tree produced by SQLParser#sql_stmt_list.
SQLVisitor.prototype.visitSql_stmt_list = function(ctx) {
};


// Visit a parse tree produced by SQLParser#sql_stmt.
SQLVisitor.prototype.visitSql_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#alter_table_stmt.
SQLVisitor.prototype.visitAlter_table_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#analyze_stmt.
SQLVisitor.prototype.visitAnalyze_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#attach_stmt.
SQLVisitor.prototype.visitAttach_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#begin_stmt.
SQLVisitor.prototype.visitBegin_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#commit_stmt.
SQLVisitor.prototype.visitCommit_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#compound_select_stmt.
SQLVisitor.prototype.visitCompound_select_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#create_index_stmt.
SQLVisitor.prototype.visitCreate_index_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#create_table_stmt.
SQLVisitor.prototype.visitCreate_table_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#create_trigger_stmt.
SQLVisitor.prototype.visitCreate_trigger_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#create_view_stmt.
SQLVisitor.prototype.visitCreate_view_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#create_virtual_table_stmt.
SQLVisitor.prototype.visitCreate_virtual_table_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#delete_stmt.
SQLVisitor.prototype.visitDelete_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#delete_stmt_limited.
SQLVisitor.prototype.visitDelete_stmt_limited = function(ctx) {
};


// Visit a parse tree produced by SQLParser#detach_stmt.
SQLVisitor.prototype.visitDetach_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#drop_index_stmt.
SQLVisitor.prototype.visitDrop_index_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#drop_table_stmt.
SQLVisitor.prototype.visitDrop_table_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#drop_trigger_stmt.
SQLVisitor.prototype.visitDrop_trigger_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#drop_view_stmt.
SQLVisitor.prototype.visitDrop_view_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#factored_select_stmt.
SQLVisitor.prototype.visitFactored_select_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#insert_stmt.
SQLVisitor.prototype.visitInsert_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#pragma_stmt.
SQLVisitor.prototype.visitPragma_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#reindex_stmt.
SQLVisitor.prototype.visitReindex_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#release_stmt.
SQLVisitor.prototype.visitRelease_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#rollback_stmt.
SQLVisitor.prototype.visitRollback_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#savepoint_stmt.
SQLVisitor.prototype.visitSavepoint_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#simple_select_stmt.
SQLVisitor.prototype.visitSimple_select_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#select_stmt.
SQLVisitor.prototype.visitSelect_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#select_or_values.
SQLVisitor.prototype.visitSelect_or_values = function(ctx) {
};


// Visit a parse tree produced by SQLParser#update_stmt.
SQLVisitor.prototype.visitUpdate_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#update_stmt_limited.
SQLVisitor.prototype.visitUpdate_stmt_limited = function(ctx) {
};


// Visit a parse tree produced by SQLParser#vacuum_stmt.
SQLVisitor.prototype.visitVacuum_stmt = function(ctx) {
};


// Visit a parse tree produced by SQLParser#column_def.
SQLVisitor.prototype.visitColumn_def = function(ctx) {
};


// Visit a parse tree produced by SQLParser#type_name.
SQLVisitor.prototype.visitType_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#column_constraint.
SQLVisitor.prototype.visitColumn_constraint = function(ctx) {
};


// Visit a parse tree produced by SQLParser#conflict_clause.
SQLVisitor.prototype.visitConflict_clause = function(ctx) {
};


// Visit a parse tree produced by SQLParser#expr.
SQLVisitor.prototype.visitExpr = function(ctx) {
};


// Visit a parse tree produced by SQLParser#foreign_key_clause.
SQLVisitor.prototype.visitForeign_key_clause = function(ctx) {
};


// Visit a parse tree produced by SQLParser#raise_function.
SQLVisitor.prototype.visitRaise_function = function(ctx) {
};


// Visit a parse tree produced by SQLParser#indexed_column.
SQLVisitor.prototype.visitIndexed_column = function(ctx) {
};


// Visit a parse tree produced by SQLParser#table_constraint.
SQLVisitor.prototype.visitTable_constraint = function(ctx) {
};


// Visit a parse tree produced by SQLParser#with_clause.
SQLVisitor.prototype.visitWith_clause = function(ctx) {
};


// Visit a parse tree produced by SQLParser#qualified_table_name.
SQLVisitor.prototype.visitQualified_table_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#ordering_term.
SQLVisitor.prototype.visitOrdering_term = function(ctx) {
};


// Visit a parse tree produced by SQLParser#pragma_value.
SQLVisitor.prototype.visitPragma_value = function(ctx) {
};


// Visit a parse tree produced by SQLParser#common_table_expression.
SQLVisitor.prototype.visitCommon_table_expression = function(ctx) {
};


// Visit a parse tree produced by SQLParser#result_column.
SQLVisitor.prototype.visitResult_column = function(ctx) {
};


// Visit a parse tree produced by SQLParser#table_or_subquery.
SQLVisitor.prototype.visitTable_or_subquery = function(ctx) {
};


// Visit a parse tree produced by SQLParser#join_clause.
SQLVisitor.prototype.visitJoin_clause = function(ctx) {
};


// Visit a parse tree produced by SQLParser#join_operator.
SQLVisitor.prototype.visitJoin_operator = function(ctx) {
};


// Visit a parse tree produced by SQLParser#join_constraint.
SQLVisitor.prototype.visitJoin_constraint = function(ctx) {
};


// Visit a parse tree produced by SQLParser#select_core.
SQLVisitor.prototype.visitSelect_core = function(ctx) {
};


// Visit a parse tree produced by SQLParser#compound_operator.
SQLVisitor.prototype.visitCompound_operator = function(ctx) {
};


// Visit a parse tree produced by SQLParser#cte_table_name.
SQLVisitor.prototype.visitCte_table_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#signed_number.
SQLVisitor.prototype.visitSigned_number = function(ctx) {
};


// Visit a parse tree produced by SQLParser#literal_value.
SQLVisitor.prototype.visitLiteral_value = function(ctx) {
};


// Visit a parse tree produced by SQLParser#unary_operator.
SQLVisitor.prototype.visitUnary_operator = function(ctx) {
};


// Visit a parse tree produced by SQLParser#error_message.
SQLVisitor.prototype.visitError_message = function(ctx) {
};


// Visit a parse tree produced by SQLParser#module_argument.
SQLVisitor.prototype.visitModule_argument = function(ctx) {
};


// Visit a parse tree produced by SQLParser#column_alias.
SQLVisitor.prototype.visitColumn_alias = function(ctx) {
};


// Visit a parse tree produced by SQLParser#keyword.
SQLVisitor.prototype.visitKeyword = function(ctx) {
};


// Visit a parse tree produced by SQLParser#name.
SQLVisitor.prototype.visitName = function(ctx) {
};


// Visit a parse tree produced by SQLParser#function_name.
SQLVisitor.prototype.visitFunction_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#database_name.
SQLVisitor.prototype.visitDatabase_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#table_name.
SQLVisitor.prototype.visitTable_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#table_or_index_name.
SQLVisitor.prototype.visitTable_or_index_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#new_table_name.
SQLVisitor.prototype.visitNew_table_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#column_name.
SQLVisitor.prototype.visitColumn_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#collation_name.
SQLVisitor.prototype.visitCollation_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#foreign_table.
SQLVisitor.prototype.visitForeign_table = function(ctx) {
};


// Visit a parse tree produced by SQLParser#index_name.
SQLVisitor.prototype.visitIndex_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#trigger_name.
SQLVisitor.prototype.visitTrigger_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#view_name.
SQLVisitor.prototype.visitView_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#module_name.
SQLVisitor.prototype.visitModule_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#pragma_name.
SQLVisitor.prototype.visitPragma_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#savepoint_name.
SQLVisitor.prototype.visitSavepoint_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#table_alias.
SQLVisitor.prototype.visitTable_alias = function(ctx) {
};


// Visit a parse tree produced by SQLParser#transaction_name.
SQLVisitor.prototype.visitTransaction_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#any_name.
SQLVisitor.prototype.visitAny_name = function(ctx) {
};



return SQLVisitor;
}