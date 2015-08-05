// Generated from grammars/sql/SQLParser.g4 by ANTLR 4.5.1
// jshint ignore: start

module.exports = function (antlr4) {

// This class defines a complete generic visitor for a parse tree produced by SQLParser.

function SQLParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SQLParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SQLParserVisitor.prototype.constructor = SQLParserVisitor;

// Visit a parse tree produced by SQLParser#sql.
SQLParserVisitor.prototype.visitSql = function(ctx) {
};


// Visit a parse tree produced by SQLParser#statement.
SQLParserVisitor.prototype.visitStatement = function(ctx) {
};


// Visit a parse tree produced by SQLParser#data_statement.
SQLParserVisitor.prototype.visitData_statement = function(ctx) {
};


// Visit a parse tree produced by SQLParser#data_change_statement.
SQLParserVisitor.prototype.visitData_change_statement = function(ctx) {
};


// Visit a parse tree produced by SQLParser#schema_statement.
SQLParserVisitor.prototype.visitSchema_statement = function(ctx) {
};


// Visit a parse tree produced by SQLParser#index_statement.
SQLParserVisitor.prototype.visitIndex_statement = function(ctx) {
};


// Visit a parse tree produced by SQLParser#create_table_statement.
SQLParserVisitor.prototype.visitCreate_table_statement = function(ctx) {
};


// Visit a parse tree produced by SQLParser#table_elements.
SQLParserVisitor.prototype.visitTable_elements = function(ctx) {
};


// Visit a parse tree produced by SQLParser#field_element.
SQLParserVisitor.prototype.visitField_element = function(ctx) {
};


// Visit a parse tree produced by SQLParser#field_type.
SQLParserVisitor.prototype.visitField_type = function(ctx) {
};


// Visit a parse tree produced by SQLParser#param_clause.
SQLParserVisitor.prototype.visitParam_clause = function(ctx) {
};


// Visit a parse tree produced by SQLParser#param.
SQLParserVisitor.prototype.visitParam = function(ctx) {
};


// Visit a parse tree produced by SQLParser#method_specifier.
SQLParserVisitor.prototype.visitMethod_specifier = function(ctx) {
};


// Visit a parse tree produced by SQLParser#table_space_specifier.
SQLParserVisitor.prototype.visitTable_space_specifier = function(ctx) {
};


// Visit a parse tree produced by SQLParser#table_space_name.
SQLParserVisitor.prototype.visitTable_space_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#table_partitioning_clauses.
SQLParserVisitor.prototype.visitTable_partitioning_clauses = function(ctx) {
};


// Visit a parse tree produced by SQLParser#range_partitions.
SQLParserVisitor.prototype.visitRange_partitions = function(ctx) {
};


// Visit a parse tree produced by SQLParser#range_value_clause_list.
SQLParserVisitor.prototype.visitRange_value_clause_list = function(ctx) {
};


// Visit a parse tree produced by SQLParser#range_value_clause.
SQLParserVisitor.prototype.visitRange_value_clause = function(ctx) {
};


// Visit a parse tree produced by SQLParser#hash_partitions.
SQLParserVisitor.prototype.visitHash_partitions = function(ctx) {
};


// Visit a parse tree produced by SQLParser#individual_hash_partitions.
SQLParserVisitor.prototype.visitIndividual_hash_partitions = function(ctx) {
};


// Visit a parse tree produced by SQLParser#individual_hash_partition.
SQLParserVisitor.prototype.visitIndividual_hash_partition = function(ctx) {
};


// Visit a parse tree produced by SQLParser#hash_partitions_by_quantity.
SQLParserVisitor.prototype.visitHash_partitions_by_quantity = function(ctx) {
};


// Visit a parse tree produced by SQLParser#list_partitions.
SQLParserVisitor.prototype.visitList_partitions = function(ctx) {
};


// Visit a parse tree produced by SQLParser#list_value_clause_list.
SQLParserVisitor.prototype.visitList_value_clause_list = function(ctx) {
};


// Visit a parse tree produced by SQLParser#list_value_partition.
SQLParserVisitor.prototype.visitList_value_partition = function(ctx) {
};


// Visit a parse tree produced by SQLParser#column_partitions.
SQLParserVisitor.prototype.visitColumn_partitions = function(ctx) {
};


// Visit a parse tree produced by SQLParser#partition_name.
SQLParserVisitor.prototype.visitPartition_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#drop_table_statement.
SQLParserVisitor.prototype.visitDrop_table_statement = function(ctx) {
};


// Visit a parse tree produced by SQLParser#identifier.
SQLParserVisitor.prototype.visitIdentifier = function(ctx) {
};


// Visit a parse tree produced by SQLParser#nonreserved_keywords.
SQLParserVisitor.prototype.visitNonreserved_keywords = function(ctx) {
};


// Visit a parse tree produced by SQLParser#unsigned_literal.
SQLParserVisitor.prototype.visitUnsigned_literal = function(ctx) {
};


// Visit a parse tree produced by SQLParser#general_literal.
SQLParserVisitor.prototype.visitGeneral_literal = function(ctx) {
};


// Visit a parse tree produced by SQLParser#datetime_literal.
SQLParserVisitor.prototype.visitDatetime_literal = function(ctx) {
};


// Visit a parse tree produced by SQLParser#time_literal.
SQLParserVisitor.prototype.visitTime_literal = function(ctx) {
};


// Visit a parse tree produced by SQLParser#timestamp_literal.
SQLParserVisitor.prototype.visitTimestamp_literal = function(ctx) {
};


// Visit a parse tree produced by SQLParser#date_literal.
SQLParserVisitor.prototype.visitDate_literal = function(ctx) {
};


// Visit a parse tree produced by SQLParser#boolean_literal.
SQLParserVisitor.prototype.visitBoolean_literal = function(ctx) {
};


// Visit a parse tree produced by SQLParser#data_type.
SQLParserVisitor.prototype.visitData_type = function(ctx) {
};


// Visit a parse tree produced by SQLParser#predefined_type.
SQLParserVisitor.prototype.visitPredefined_type = function(ctx) {
};


// Visit a parse tree produced by SQLParser#network_type.
SQLParserVisitor.prototype.visitNetwork_type = function(ctx) {
};


// Visit a parse tree produced by SQLParser#character_string_type.
SQLParserVisitor.prototype.visitCharacter_string_type = function(ctx) {
};


// Visit a parse tree produced by SQLParser#type_length.
SQLParserVisitor.prototype.visitType_length = function(ctx) {
};


// Visit a parse tree produced by SQLParser#national_character_string_type.
SQLParserVisitor.prototype.visitNational_character_string_type = function(ctx) {
};


// Visit a parse tree produced by SQLParser#binary_large_object_string_type.
SQLParserVisitor.prototype.visitBinary_large_object_string_type = function(ctx) {
};


// Visit a parse tree produced by SQLParser#numeric_type.
SQLParserVisitor.prototype.visitNumeric_type = function(ctx) {
};


// Visit a parse tree produced by SQLParser#exact_numeric_type.
SQLParserVisitor.prototype.visitExact_numeric_type = function(ctx) {
};


// Visit a parse tree produced by SQLParser#approximate_numeric_type.
SQLParserVisitor.prototype.visitApproximate_numeric_type = function(ctx) {
};


// Visit a parse tree produced by SQLParser#precision_param.
SQLParserVisitor.prototype.visitPrecision_param = function(ctx) {
};


// Visit a parse tree produced by SQLParser#boolean_type.
SQLParserVisitor.prototype.visitBoolean_type = function(ctx) {
};


// Visit a parse tree produced by SQLParser#datetime_type.
SQLParserVisitor.prototype.visitDatetime_type = function(ctx) {
};


// Visit a parse tree produced by SQLParser#bit_type.
SQLParserVisitor.prototype.visitBit_type = function(ctx) {
};


// Visit a parse tree produced by SQLParser#binary_type.
SQLParserVisitor.prototype.visitBinary_type = function(ctx) {
};


// Visit a parse tree produced by SQLParser#value_expression_primary.
SQLParserVisitor.prototype.visitValue_expression_primary = function(ctx) {
};


// Visit a parse tree produced by SQLParser#parenthesized_value_expression.
SQLParserVisitor.prototype.visitParenthesized_value_expression = function(ctx) {
};


// Visit a parse tree produced by SQLParser#nonparenthesized_value_expression_primary.
SQLParserVisitor.prototype.visitNonparenthesized_value_expression_primary = function(ctx) {
};


// Visit a parse tree produced by SQLParser#unsigned_value_specification.
SQLParserVisitor.prototype.visitUnsigned_value_specification = function(ctx) {
};


// Visit a parse tree produced by SQLParser#unsigned_numeric_literal.
SQLParserVisitor.prototype.visitUnsigned_numeric_literal = function(ctx) {
};


// Visit a parse tree produced by SQLParser#signed_numerical_literal.
SQLParserVisitor.prototype.visitSigned_numerical_literal = function(ctx) {
};


// Visit a parse tree produced by SQLParser#set_function_specification.
SQLParserVisitor.prototype.visitSet_function_specification = function(ctx) {
};


// Visit a parse tree produced by SQLParser#aggregate_function.
SQLParserVisitor.prototype.visitAggregate_function = function(ctx) {
};


// Visit a parse tree produced by SQLParser#general_set_function.
SQLParserVisitor.prototype.visitGeneral_set_function = function(ctx) {
};


// Visit a parse tree produced by SQLParser#set_function_type.
SQLParserVisitor.prototype.visitSet_function_type = function(ctx) {
};


// Visit a parse tree produced by SQLParser#filter_clause.
SQLParserVisitor.prototype.visitFilter_clause = function(ctx) {
};


// Visit a parse tree produced by SQLParser#grouping_operation.
SQLParserVisitor.prototype.visitGrouping_operation = function(ctx) {
};


// Visit a parse tree produced by SQLParser#case_expression.
SQLParserVisitor.prototype.visitCase_expression = function(ctx) {
};


// Visit a parse tree produced by SQLParser#case_abbreviation.
SQLParserVisitor.prototype.visitCase_abbreviation = function(ctx) {
};


// Visit a parse tree produced by SQLParser#case_specification.
SQLParserVisitor.prototype.visitCase_specification = function(ctx) {
};


// Visit a parse tree produced by SQLParser#simple_case.
SQLParserVisitor.prototype.visitSimple_case = function(ctx) {
};


// Visit a parse tree produced by SQLParser#searched_case.
SQLParserVisitor.prototype.visitSearched_case = function(ctx) {
};


// Visit a parse tree produced by SQLParser#simple_when_clause.
SQLParserVisitor.prototype.visitSimple_when_clause = function(ctx) {
};


// Visit a parse tree produced by SQLParser#searched_when_clause.
SQLParserVisitor.prototype.visitSearched_when_clause = function(ctx) {
};


// Visit a parse tree produced by SQLParser#else_clause.
SQLParserVisitor.prototype.visitElse_clause = function(ctx) {
};


// Visit a parse tree produced by SQLParser#result.
SQLParserVisitor.prototype.visitResult = function(ctx) {
};


// Visit a parse tree produced by SQLParser#cast_specification.
SQLParserVisitor.prototype.visitCast_specification = function(ctx) {
};


// Visit a parse tree produced by SQLParser#cast_operand.
SQLParserVisitor.prototype.visitCast_operand = function(ctx) {
};


// Visit a parse tree produced by SQLParser#cast_target.
SQLParserVisitor.prototype.visitCast_target = function(ctx) {
};


// Visit a parse tree produced by SQLParser#value_expression.
SQLParserVisitor.prototype.visitValue_expression = function(ctx) {
};


// Visit a parse tree produced by SQLParser#common_value_expression.
SQLParserVisitor.prototype.visitCommon_value_expression = function(ctx) {
};


// Visit a parse tree produced by SQLParser#numeric_value_expression.
SQLParserVisitor.prototype.visitNumeric_value_expression = function(ctx) {
};


// Visit a parse tree produced by SQLParser#term.
SQLParserVisitor.prototype.visitTerm = function(ctx) {
};


// Visit a parse tree produced by SQLParser#factor.
SQLParserVisitor.prototype.visitFactor = function(ctx) {
};


// Visit a parse tree produced by SQLParser#array.
SQLParserVisitor.prototype.visitArray = function(ctx) {
};


// Visit a parse tree produced by SQLParser#numeric_primary.
SQLParserVisitor.prototype.visitNumeric_primary = function(ctx) {
};


// Visit a parse tree produced by SQLParser#sign.
SQLParserVisitor.prototype.visitSign = function(ctx) {
};


// Visit a parse tree produced by SQLParser#numeric_value_function.
SQLParserVisitor.prototype.visitNumeric_value_function = function(ctx) {
};


// Visit a parse tree produced by SQLParser#extract_expression.
SQLParserVisitor.prototype.visitExtract_expression = function(ctx) {
};


// Visit a parse tree produced by SQLParser#extract_field.
SQLParserVisitor.prototype.visitExtract_field = function(ctx) {
};


// Visit a parse tree produced by SQLParser#time_zone_field.
SQLParserVisitor.prototype.visitTime_zone_field = function(ctx) {
};


// Visit a parse tree produced by SQLParser#extract_source.
SQLParserVisitor.prototype.visitExtract_source = function(ctx) {
};


// Visit a parse tree produced by SQLParser#string_value_expression.
SQLParserVisitor.prototype.visitString_value_expression = function(ctx) {
};


// Visit a parse tree produced by SQLParser#character_value_expression.
SQLParserVisitor.prototype.visitCharacter_value_expression = function(ctx) {
};


// Visit a parse tree produced by SQLParser#character_factor.
SQLParserVisitor.prototype.visitCharacter_factor = function(ctx) {
};


// Visit a parse tree produced by SQLParser#character_primary.
SQLParserVisitor.prototype.visitCharacter_primary = function(ctx) {
};


// Visit a parse tree produced by SQLParser#string_value_function.
SQLParserVisitor.prototype.visitString_value_function = function(ctx) {
};


// Visit a parse tree produced by SQLParser#trim_function.
SQLParserVisitor.prototype.visitTrim_function = function(ctx) {
};


// Visit a parse tree produced by SQLParser#trim_operands.
SQLParserVisitor.prototype.visitTrim_operands = function(ctx) {
};


// Visit a parse tree produced by SQLParser#trim_specification.
SQLParserVisitor.prototype.visitTrim_specification = function(ctx) {
};


// Visit a parse tree produced by SQLParser#boolean_value_expression.
SQLParserVisitor.prototype.visitBoolean_value_expression = function(ctx) {
};


// Visit a parse tree produced by SQLParser#or_predicate.
SQLParserVisitor.prototype.visitOr_predicate = function(ctx) {
};


// Visit a parse tree produced by SQLParser#and_predicate.
SQLParserVisitor.prototype.visitAnd_predicate = function(ctx) {
};


// Visit a parse tree produced by SQLParser#boolean_factor.
SQLParserVisitor.prototype.visitBoolean_factor = function(ctx) {
};


// Visit a parse tree produced by SQLParser#boolean_test.
SQLParserVisitor.prototype.visitBoolean_test = function(ctx) {
};


// Visit a parse tree produced by SQLParser#is_clause.
SQLParserVisitor.prototype.visitIs_clause = function(ctx) {
};


// Visit a parse tree produced by SQLParser#truth_value.
SQLParserVisitor.prototype.visitTruth_value = function(ctx) {
};


// Visit a parse tree produced by SQLParser#boolean_primary.
SQLParserVisitor.prototype.visitBoolean_primary = function(ctx) {
};


// Visit a parse tree produced by SQLParser#boolean_predicand.
SQLParserVisitor.prototype.visitBoolean_predicand = function(ctx) {
};


// Visit a parse tree produced by SQLParser#parenthesized_boolean_value_expression.
SQLParserVisitor.prototype.visitParenthesized_boolean_value_expression = function(ctx) {
};


// Visit a parse tree produced by SQLParser#row_value_expression.
SQLParserVisitor.prototype.visitRow_value_expression = function(ctx) {
};


// Visit a parse tree produced by SQLParser#row_value_special_case.
SQLParserVisitor.prototype.visitRow_value_special_case = function(ctx) {
};


// Visit a parse tree produced by SQLParser#explicit_row_value_constructor.
SQLParserVisitor.prototype.visitExplicit_row_value_constructor = function(ctx) {
};


// Visit a parse tree produced by SQLParser#row_value_predicand.
SQLParserVisitor.prototype.visitRow_value_predicand = function(ctx) {
};


// Visit a parse tree produced by SQLParser#row_value_constructor_predicand.
SQLParserVisitor.prototype.visitRow_value_constructor_predicand = function(ctx) {
};


// Visit a parse tree produced by SQLParser#table_expression.
SQLParserVisitor.prototype.visitTable_expression = function(ctx) {
};


// Visit a parse tree produced by SQLParser#from_clause.
SQLParserVisitor.prototype.visitFrom_clause = function(ctx) {
};


// Visit a parse tree produced by SQLParser#table_reference_list.
SQLParserVisitor.prototype.visitTable_reference_list = function(ctx) {
};


// Visit a parse tree produced by SQLParser#table_reference.
SQLParserVisitor.prototype.visitTable_reference = function(ctx) {
};


// Visit a parse tree produced by SQLParser#joined_table.
SQLParserVisitor.prototype.visitJoined_table = function(ctx) {
};


// Visit a parse tree produced by SQLParser#joined_table_primary.
SQLParserVisitor.prototype.visitJoined_table_primary = function(ctx) {
};


// Visit a parse tree produced by SQLParser#cross_join.
SQLParserVisitor.prototype.visitCross_join = function(ctx) {
};


// Visit a parse tree produced by SQLParser#qualified_join.
SQLParserVisitor.prototype.visitQualified_join = function(ctx) {
};


// Visit a parse tree produced by SQLParser#natural_join.
SQLParserVisitor.prototype.visitNatural_join = function(ctx) {
};


// Visit a parse tree produced by SQLParser#union_join.
SQLParserVisitor.prototype.visitUnion_join = function(ctx) {
};


// Visit a parse tree produced by SQLParser#join_type.
SQLParserVisitor.prototype.visitJoin_type = function(ctx) {
};


// Visit a parse tree produced by SQLParser#outer_join_type.
SQLParserVisitor.prototype.visitOuter_join_type = function(ctx) {
};


// Visit a parse tree produced by SQLParser#outer_join_type_part2.
SQLParserVisitor.prototype.visitOuter_join_type_part2 = function(ctx) {
};


// Visit a parse tree produced by SQLParser#join_specification.
SQLParserVisitor.prototype.visitJoin_specification = function(ctx) {
};


// Visit a parse tree produced by SQLParser#join_condition.
SQLParserVisitor.prototype.visitJoin_condition = function(ctx) {
};


// Visit a parse tree produced by SQLParser#named_columns_join.
SQLParserVisitor.prototype.visitNamed_columns_join = function(ctx) {
};


// Visit a parse tree produced by SQLParser#table_primary.
SQLParserVisitor.prototype.visitTable_primary = function(ctx) {
};


// Visit a parse tree produced by SQLParser#column_name_list.
SQLParserVisitor.prototype.visitColumn_name_list = function(ctx) {
};


// Visit a parse tree produced by SQLParser#derived_table.
SQLParserVisitor.prototype.visitDerived_table = function(ctx) {
};


// Visit a parse tree produced by SQLParser#where_clause.
SQLParserVisitor.prototype.visitWhere_clause = function(ctx) {
};


// Visit a parse tree produced by SQLParser#search_condition.
SQLParserVisitor.prototype.visitSearch_condition = function(ctx) {
};


// Visit a parse tree produced by SQLParser#groupby_clause.
SQLParserVisitor.prototype.visitGroupby_clause = function(ctx) {
};


// Visit a parse tree produced by SQLParser#grouping_element_list.
SQLParserVisitor.prototype.visitGrouping_element_list = function(ctx) {
};


// Visit a parse tree produced by SQLParser#grouping_element.
SQLParserVisitor.prototype.visitGrouping_element = function(ctx) {
};


// Visit a parse tree produced by SQLParser#ordinary_grouping_set.
SQLParserVisitor.prototype.visitOrdinary_grouping_set = function(ctx) {
};


// Visit a parse tree produced by SQLParser#ordinary_grouping_set_list.
SQLParserVisitor.prototype.visitOrdinary_grouping_set_list = function(ctx) {
};


// Visit a parse tree produced by SQLParser#rollup_list.
SQLParserVisitor.prototype.visitRollup_list = function(ctx) {
};


// Visit a parse tree produced by SQLParser#cube_list.
SQLParserVisitor.prototype.visitCube_list = function(ctx) {
};


// Visit a parse tree produced by SQLParser#empty_grouping_set.
SQLParserVisitor.prototype.visitEmpty_grouping_set = function(ctx) {
};


// Visit a parse tree produced by SQLParser#having_clause.
SQLParserVisitor.prototype.visitHaving_clause = function(ctx) {
};


// Visit a parse tree produced by SQLParser#row_value_predicand_list.
SQLParserVisitor.prototype.visitRow_value_predicand_list = function(ctx) {
};


// Visit a parse tree produced by SQLParser#query_expression.
SQLParserVisitor.prototype.visitQuery_expression = function(ctx) {
};


// Visit a parse tree produced by SQLParser#query_expression_body.
SQLParserVisitor.prototype.visitQuery_expression_body = function(ctx) {
};


// Visit a parse tree produced by SQLParser#non_join_query_expression.
SQLParserVisitor.prototype.visitNon_join_query_expression = function(ctx) {
};


// Visit a parse tree produced by SQLParser#query_term.
SQLParserVisitor.prototype.visitQuery_term = function(ctx) {
};


// Visit a parse tree produced by SQLParser#non_join_query_term.
SQLParserVisitor.prototype.visitNon_join_query_term = function(ctx) {
};


// Visit a parse tree produced by SQLParser#query_primary.
SQLParserVisitor.prototype.visitQuery_primary = function(ctx) {
};


// Visit a parse tree produced by SQLParser#non_join_query_primary.
SQLParserVisitor.prototype.visitNon_join_query_primary = function(ctx) {
};


// Visit a parse tree produced by SQLParser#simple_table.
SQLParserVisitor.prototype.visitSimple_table = function(ctx) {
};


// Visit a parse tree produced by SQLParser#explicit_table.
SQLParserVisitor.prototype.visitExplicit_table = function(ctx) {
};


// Visit a parse tree produced by SQLParser#table_or_query_name.
SQLParserVisitor.prototype.visitTable_or_query_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#table_name.
SQLParserVisitor.prototype.visitTable_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#query_specification.
SQLParserVisitor.prototype.visitQuery_specification = function(ctx) {
};


// Visit a parse tree produced by SQLParser#select_list.
SQLParserVisitor.prototype.visitSelect_list = function(ctx) {
};


// Visit a parse tree produced by SQLParser#select_sublist.
SQLParserVisitor.prototype.visitSelect_sublist = function(ctx) {
};


// Visit a parse tree produced by SQLParser#derived_column.
SQLParserVisitor.prototype.visitDerived_column = function(ctx) {
};


// Visit a parse tree produced by SQLParser#qualified_asterisk.
SQLParserVisitor.prototype.visitQualified_asterisk = function(ctx) {
};


// Visit a parse tree produced by SQLParser#set_qualifier.
SQLParserVisitor.prototype.visitSet_qualifier = function(ctx) {
};


// Visit a parse tree produced by SQLParser#column_reference.
SQLParserVisitor.prototype.visitColumn_reference = function(ctx) {
};


// Visit a parse tree produced by SQLParser#as_clause.
SQLParserVisitor.prototype.visitAs_clause = function(ctx) {
};


// Visit a parse tree produced by SQLParser#column_reference_list.
SQLParserVisitor.prototype.visitColumn_reference_list = function(ctx) {
};


// Visit a parse tree produced by SQLParser#scalar_subquery.
SQLParserVisitor.prototype.visitScalar_subquery = function(ctx) {
};


// Visit a parse tree produced by SQLParser#row_subquery.
SQLParserVisitor.prototype.visitRow_subquery = function(ctx) {
};


// Visit a parse tree produced by SQLParser#table_subquery.
SQLParserVisitor.prototype.visitTable_subquery = function(ctx) {
};


// Visit a parse tree produced by SQLParser#subquery.
SQLParserVisitor.prototype.visitSubquery = function(ctx) {
};


// Visit a parse tree produced by SQLParser#predicate.
SQLParserVisitor.prototype.visitPredicate = function(ctx) {
};


// Visit a parse tree produced by SQLParser#comparison_predicate.
SQLParserVisitor.prototype.visitComparison_predicate = function(ctx) {
};


// Visit a parse tree produced by SQLParser#comp_op.
SQLParserVisitor.prototype.visitComp_op = function(ctx) {
};


// Visit a parse tree produced by SQLParser#between_predicate.
SQLParserVisitor.prototype.visitBetween_predicate = function(ctx) {
};


// Visit a parse tree produced by SQLParser#between_predicate_part_2.
SQLParserVisitor.prototype.visitBetween_predicate_part_2 = function(ctx) {
};


// Visit a parse tree produced by SQLParser#in_predicate.
SQLParserVisitor.prototype.visitIn_predicate = function(ctx) {
};


// Visit a parse tree produced by SQLParser#in_predicate_value.
SQLParserVisitor.prototype.visitIn_predicate_value = function(ctx) {
};


// Visit a parse tree produced by SQLParser#in_value_list.
SQLParserVisitor.prototype.visitIn_value_list = function(ctx) {
};


// Visit a parse tree produced by SQLParser#pattern_matching_predicate.
SQLParserVisitor.prototype.visitPattern_matching_predicate = function(ctx) {
};


// Visit a parse tree produced by SQLParser#pattern_matcher.
SQLParserVisitor.prototype.visitPattern_matcher = function(ctx) {
};


// Visit a parse tree produced by SQLParser#negativable_matcher.
SQLParserVisitor.prototype.visitNegativable_matcher = function(ctx) {
};


// Visit a parse tree produced by SQLParser#regex_matcher.
SQLParserVisitor.prototype.visitRegex_matcher = function(ctx) {
};


// Visit a parse tree produced by SQLParser#null_predicate.
SQLParserVisitor.prototype.visitNull_predicate = function(ctx) {
};


// Visit a parse tree produced by SQLParser#quantified_comparison_predicate.
SQLParserVisitor.prototype.visitQuantified_comparison_predicate = function(ctx) {
};


// Visit a parse tree produced by SQLParser#quantifier.
SQLParserVisitor.prototype.visitQuantifier = function(ctx) {
};


// Visit a parse tree produced by SQLParser#all.
SQLParserVisitor.prototype.visitAll = function(ctx) {
};


// Visit a parse tree produced by SQLParser#some.
SQLParserVisitor.prototype.visitSome = function(ctx) {
};


// Visit a parse tree produced by SQLParser#exists_predicate.
SQLParserVisitor.prototype.visitExists_predicate = function(ctx) {
};


// Visit a parse tree produced by SQLParser#unique_predicate.
SQLParserVisitor.prototype.visitUnique_predicate = function(ctx) {
};


// Visit a parse tree produced by SQLParser#primary_datetime_field.
SQLParserVisitor.prototype.visitPrimary_datetime_field = function(ctx) {
};


// Visit a parse tree produced by SQLParser#non_second_primary_datetime_field.
SQLParserVisitor.prototype.visitNon_second_primary_datetime_field = function(ctx) {
};


// Visit a parse tree produced by SQLParser#extended_datetime_field.
SQLParserVisitor.prototype.visitExtended_datetime_field = function(ctx) {
};


// Visit a parse tree produced by SQLParser#routine_invocation.
SQLParserVisitor.prototype.visitRoutine_invocation = function(ctx) {
};


// Visit a parse tree produced by SQLParser#function_names_for_reserved_words.
SQLParserVisitor.prototype.visitFunction_names_for_reserved_words = function(ctx) {
};


// Visit a parse tree produced by SQLParser#function_name.
SQLParserVisitor.prototype.visitFunction_name = function(ctx) {
};


// Visit a parse tree produced by SQLParser#sql_argument_list.
SQLParserVisitor.prototype.visitSql_argument_list = function(ctx) {
};


// Visit a parse tree produced by SQLParser#orderby_clause.
SQLParserVisitor.prototype.visitOrderby_clause = function(ctx) {
};


// Visit a parse tree produced by SQLParser#sort_specifier_list.
SQLParserVisitor.prototype.visitSort_specifier_list = function(ctx) {
};


// Visit a parse tree produced by SQLParser#sort_specifier.
SQLParserVisitor.prototype.visitSort_specifier = function(ctx) {
};


// Visit a parse tree produced by SQLParser#order_specification.
SQLParserVisitor.prototype.visitOrder_specification = function(ctx) {
};


// Visit a parse tree produced by SQLParser#limit_clause.
SQLParserVisitor.prototype.visitLimit_clause = function(ctx) {
};


// Visit a parse tree produced by SQLParser#null_ordering.
SQLParserVisitor.prototype.visitNull_ordering = function(ctx) {
};


// Visit a parse tree produced by SQLParser#insert_statement.
SQLParserVisitor.prototype.visitInsert_statement = function(ctx) {
};

return SQLParserVisitor;
};