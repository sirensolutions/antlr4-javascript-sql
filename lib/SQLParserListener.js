// Generated from grammars/sql/SQLParser.g4 by ANTLR 4.5.1
// jshint ignore: start
module.exports = function (antlr4) {

// This class defines a complete listener for a parse tree produced by SQLParser.
function SQLParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SQLParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SQLParserListener.prototype.constructor = SQLParserListener;

// Enter a parse tree produced by SQLParser#sql.
SQLParserListener.prototype.enterSql = function(ctx) {
};

// Exit a parse tree produced by SQLParser#sql.
SQLParserListener.prototype.exitSql = function(ctx) {
};


// Enter a parse tree produced by SQLParser#statement.
SQLParserListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by SQLParser#statement.
SQLParserListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by SQLParser#data_statement.
SQLParserListener.prototype.enterData_statement = function(ctx) {
};

// Exit a parse tree produced by SQLParser#data_statement.
SQLParserListener.prototype.exitData_statement = function(ctx) {
};


// Enter a parse tree produced by SQLParser#data_change_statement.
SQLParserListener.prototype.enterData_change_statement = function(ctx) {
};

// Exit a parse tree produced by SQLParser#data_change_statement.
SQLParserListener.prototype.exitData_change_statement = function(ctx) {
};


// Enter a parse tree produced by SQLParser#schema_statement.
SQLParserListener.prototype.enterSchema_statement = function(ctx) {
};

// Exit a parse tree produced by SQLParser#schema_statement.
SQLParserListener.prototype.exitSchema_statement = function(ctx) {
};


// Enter a parse tree produced by SQLParser#index_statement.
SQLParserListener.prototype.enterIndex_statement = function(ctx) {
};

// Exit a parse tree produced by SQLParser#index_statement.
SQLParserListener.prototype.exitIndex_statement = function(ctx) {
};


// Enter a parse tree produced by SQLParser#create_table_statement.
SQLParserListener.prototype.enterCreate_table_statement = function(ctx) {
};

// Exit a parse tree produced by SQLParser#create_table_statement.
SQLParserListener.prototype.exitCreate_table_statement = function(ctx) {
};


// Enter a parse tree produced by SQLParser#table_elements.
SQLParserListener.prototype.enterTable_elements = function(ctx) {
};

// Exit a parse tree produced by SQLParser#table_elements.
SQLParserListener.prototype.exitTable_elements = function(ctx) {
};


// Enter a parse tree produced by SQLParser#field_element.
SQLParserListener.prototype.enterField_element = function(ctx) {
};

// Exit a parse tree produced by SQLParser#field_element.
SQLParserListener.prototype.exitField_element = function(ctx) {
};


// Enter a parse tree produced by SQLParser#field_type.
SQLParserListener.prototype.enterField_type = function(ctx) {
};

// Exit a parse tree produced by SQLParser#field_type.
SQLParserListener.prototype.exitField_type = function(ctx) {
};


// Enter a parse tree produced by SQLParser#param_clause.
SQLParserListener.prototype.enterParam_clause = function(ctx) {
};

// Exit a parse tree produced by SQLParser#param_clause.
SQLParserListener.prototype.exitParam_clause = function(ctx) {
};


// Enter a parse tree produced by SQLParser#param.
SQLParserListener.prototype.enterParam = function(ctx) {
};

// Exit a parse tree produced by SQLParser#param.
SQLParserListener.prototype.exitParam = function(ctx) {
};


// Enter a parse tree produced by SQLParser#method_specifier.
SQLParserListener.prototype.enterMethod_specifier = function(ctx) {
};

// Exit a parse tree produced by SQLParser#method_specifier.
SQLParserListener.prototype.exitMethod_specifier = function(ctx) {
};


// Enter a parse tree produced by SQLParser#table_space_specifier.
SQLParserListener.prototype.enterTable_space_specifier = function(ctx) {
};

// Exit a parse tree produced by SQLParser#table_space_specifier.
SQLParserListener.prototype.exitTable_space_specifier = function(ctx) {
};


// Enter a parse tree produced by SQLParser#table_space_name.
SQLParserListener.prototype.enterTable_space_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#table_space_name.
SQLParserListener.prototype.exitTable_space_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#table_partitioning_clauses.
SQLParserListener.prototype.enterTable_partitioning_clauses = function(ctx) {
};

// Exit a parse tree produced by SQLParser#table_partitioning_clauses.
SQLParserListener.prototype.exitTable_partitioning_clauses = function(ctx) {
};


// Enter a parse tree produced by SQLParser#range_partitions.
SQLParserListener.prototype.enterRange_partitions = function(ctx) {
};

// Exit a parse tree produced by SQLParser#range_partitions.
SQLParserListener.prototype.exitRange_partitions = function(ctx) {
};


// Enter a parse tree produced by SQLParser#range_value_clause_list.
SQLParserListener.prototype.enterRange_value_clause_list = function(ctx) {
};

// Exit a parse tree produced by SQLParser#range_value_clause_list.
SQLParserListener.prototype.exitRange_value_clause_list = function(ctx) {
};


// Enter a parse tree produced by SQLParser#range_value_clause.
SQLParserListener.prototype.enterRange_value_clause = function(ctx) {
};

// Exit a parse tree produced by SQLParser#range_value_clause.
SQLParserListener.prototype.exitRange_value_clause = function(ctx) {
};


// Enter a parse tree produced by SQLParser#hash_partitions.
SQLParserListener.prototype.enterHash_partitions = function(ctx) {
};

// Exit a parse tree produced by SQLParser#hash_partitions.
SQLParserListener.prototype.exitHash_partitions = function(ctx) {
};


// Enter a parse tree produced by SQLParser#individual_hash_partitions.
SQLParserListener.prototype.enterIndividual_hash_partitions = function(ctx) {
};

// Exit a parse tree produced by SQLParser#individual_hash_partitions.
SQLParserListener.prototype.exitIndividual_hash_partitions = function(ctx) {
};


// Enter a parse tree produced by SQLParser#individual_hash_partition.
SQLParserListener.prototype.enterIndividual_hash_partition = function(ctx) {
};

// Exit a parse tree produced by SQLParser#individual_hash_partition.
SQLParserListener.prototype.exitIndividual_hash_partition = function(ctx) {
};


// Enter a parse tree produced by SQLParser#hash_partitions_by_quantity.
SQLParserListener.prototype.enterHash_partitions_by_quantity = function(ctx) {
};

// Exit a parse tree produced by SQLParser#hash_partitions_by_quantity.
SQLParserListener.prototype.exitHash_partitions_by_quantity = function(ctx) {
};


// Enter a parse tree produced by SQLParser#list_partitions.
SQLParserListener.prototype.enterList_partitions = function(ctx) {
};

// Exit a parse tree produced by SQLParser#list_partitions.
SQLParserListener.prototype.exitList_partitions = function(ctx) {
};


// Enter a parse tree produced by SQLParser#list_value_clause_list.
SQLParserListener.prototype.enterList_value_clause_list = function(ctx) {
};

// Exit a parse tree produced by SQLParser#list_value_clause_list.
SQLParserListener.prototype.exitList_value_clause_list = function(ctx) {
};


// Enter a parse tree produced by SQLParser#list_value_partition.
SQLParserListener.prototype.enterList_value_partition = function(ctx) {
};

// Exit a parse tree produced by SQLParser#list_value_partition.
SQLParserListener.prototype.exitList_value_partition = function(ctx) {
};


// Enter a parse tree produced by SQLParser#column_partitions.
SQLParserListener.prototype.enterColumn_partitions = function(ctx) {
};

// Exit a parse tree produced by SQLParser#column_partitions.
SQLParserListener.prototype.exitColumn_partitions = function(ctx) {
};


// Enter a parse tree produced by SQLParser#partition_name.
SQLParserListener.prototype.enterPartition_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#partition_name.
SQLParserListener.prototype.exitPartition_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#drop_table_statement.
SQLParserListener.prototype.enterDrop_table_statement = function(ctx) {
};

// Exit a parse tree produced by SQLParser#drop_table_statement.
SQLParserListener.prototype.exitDrop_table_statement = function(ctx) {
};


// Enter a parse tree produced by SQLParser#identifier.
SQLParserListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by SQLParser#identifier.
SQLParserListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by SQLParser#nonreserved_keywords.
SQLParserListener.prototype.enterNonreserved_keywords = function(ctx) {
};

// Exit a parse tree produced by SQLParser#nonreserved_keywords.
SQLParserListener.prototype.exitNonreserved_keywords = function(ctx) {
};


// Enter a parse tree produced by SQLParser#unsigned_literal.
SQLParserListener.prototype.enterUnsigned_literal = function(ctx) {
};

// Exit a parse tree produced by SQLParser#unsigned_literal.
SQLParserListener.prototype.exitUnsigned_literal = function(ctx) {
};


// Enter a parse tree produced by SQLParser#general_literal.
SQLParserListener.prototype.enterGeneral_literal = function(ctx) {
};

// Exit a parse tree produced by SQLParser#general_literal.
SQLParserListener.prototype.exitGeneral_literal = function(ctx) {
};


// Enter a parse tree produced by SQLParser#datetime_literal.
SQLParserListener.prototype.enterDatetime_literal = function(ctx) {
};

// Exit a parse tree produced by SQLParser#datetime_literal.
SQLParserListener.prototype.exitDatetime_literal = function(ctx) {
};


// Enter a parse tree produced by SQLParser#time_literal.
SQLParserListener.prototype.enterTime_literal = function(ctx) {
};

// Exit a parse tree produced by SQLParser#time_literal.
SQLParserListener.prototype.exitTime_literal = function(ctx) {
};


// Enter a parse tree produced by SQLParser#timestamp_literal.
SQLParserListener.prototype.enterTimestamp_literal = function(ctx) {
};

// Exit a parse tree produced by SQLParser#timestamp_literal.
SQLParserListener.prototype.exitTimestamp_literal = function(ctx) {
};


// Enter a parse tree produced by SQLParser#date_literal.
SQLParserListener.prototype.enterDate_literal = function(ctx) {
};

// Exit a parse tree produced by SQLParser#date_literal.
SQLParserListener.prototype.exitDate_literal = function(ctx) {
};


// Enter a parse tree produced by SQLParser#boolean_literal.
SQLParserListener.prototype.enterBoolean_literal = function(ctx) {
};

// Exit a parse tree produced by SQLParser#boolean_literal.
SQLParserListener.prototype.exitBoolean_literal = function(ctx) {
};


// Enter a parse tree produced by SQLParser#data_type.
SQLParserListener.prototype.enterData_type = function(ctx) {
};

// Exit a parse tree produced by SQLParser#data_type.
SQLParserListener.prototype.exitData_type = function(ctx) {
};


// Enter a parse tree produced by SQLParser#predefined_type.
SQLParserListener.prototype.enterPredefined_type = function(ctx) {
};

// Exit a parse tree produced by SQLParser#predefined_type.
SQLParserListener.prototype.exitPredefined_type = function(ctx) {
};


// Enter a parse tree produced by SQLParser#network_type.
SQLParserListener.prototype.enterNetwork_type = function(ctx) {
};

// Exit a parse tree produced by SQLParser#network_type.
SQLParserListener.prototype.exitNetwork_type = function(ctx) {
};


// Enter a parse tree produced by SQLParser#character_string_type.
SQLParserListener.prototype.enterCharacter_string_type = function(ctx) {
};

// Exit a parse tree produced by SQLParser#character_string_type.
SQLParserListener.prototype.exitCharacter_string_type = function(ctx) {
};


// Enter a parse tree produced by SQLParser#type_length.
SQLParserListener.prototype.enterType_length = function(ctx) {
};

// Exit a parse tree produced by SQLParser#type_length.
SQLParserListener.prototype.exitType_length = function(ctx) {
};


// Enter a parse tree produced by SQLParser#national_character_string_type.
SQLParserListener.prototype.enterNational_character_string_type = function(ctx) {
};

// Exit a parse tree produced by SQLParser#national_character_string_type.
SQLParserListener.prototype.exitNational_character_string_type = function(ctx) {
};


// Enter a parse tree produced by SQLParser#binary_large_object_string_type.
SQLParserListener.prototype.enterBinary_large_object_string_type = function(ctx) {
};

// Exit a parse tree produced by SQLParser#binary_large_object_string_type.
SQLParserListener.prototype.exitBinary_large_object_string_type = function(ctx) {
};


// Enter a parse tree produced by SQLParser#numeric_type.
SQLParserListener.prototype.enterNumeric_type = function(ctx) {
};

// Exit a parse tree produced by SQLParser#numeric_type.
SQLParserListener.prototype.exitNumeric_type = function(ctx) {
};


// Enter a parse tree produced by SQLParser#exact_numeric_type.
SQLParserListener.prototype.enterExact_numeric_type = function(ctx) {
};

// Exit a parse tree produced by SQLParser#exact_numeric_type.
SQLParserListener.prototype.exitExact_numeric_type = function(ctx) {
};


// Enter a parse tree produced by SQLParser#approximate_numeric_type.
SQLParserListener.prototype.enterApproximate_numeric_type = function(ctx) {
};

// Exit a parse tree produced by SQLParser#approximate_numeric_type.
SQLParserListener.prototype.exitApproximate_numeric_type = function(ctx) {
};


// Enter a parse tree produced by SQLParser#precision_param.
SQLParserListener.prototype.enterPrecision_param = function(ctx) {
};

// Exit a parse tree produced by SQLParser#precision_param.
SQLParserListener.prototype.exitPrecision_param = function(ctx) {
};


// Enter a parse tree produced by SQLParser#boolean_type.
SQLParserListener.prototype.enterBoolean_type = function(ctx) {
};

// Exit a parse tree produced by SQLParser#boolean_type.
SQLParserListener.prototype.exitBoolean_type = function(ctx) {
};


// Enter a parse tree produced by SQLParser#datetime_type.
SQLParserListener.prototype.enterDatetime_type = function(ctx) {
};

// Exit a parse tree produced by SQLParser#datetime_type.
SQLParserListener.prototype.exitDatetime_type = function(ctx) {
};


// Enter a parse tree produced by SQLParser#bit_type.
SQLParserListener.prototype.enterBit_type = function(ctx) {
};

// Exit a parse tree produced by SQLParser#bit_type.
SQLParserListener.prototype.exitBit_type = function(ctx) {
};


// Enter a parse tree produced by SQLParser#binary_type.
SQLParserListener.prototype.enterBinary_type = function(ctx) {
};

// Exit a parse tree produced by SQLParser#binary_type.
SQLParserListener.prototype.exitBinary_type = function(ctx) {
};


// Enter a parse tree produced by SQLParser#value_expression_primary.
SQLParserListener.prototype.enterValue_expression_primary = function(ctx) {
};

// Exit a parse tree produced by SQLParser#value_expression_primary.
SQLParserListener.prototype.exitValue_expression_primary = function(ctx) {
};


// Enter a parse tree produced by SQLParser#parenthesized_value_expression.
SQLParserListener.prototype.enterParenthesized_value_expression = function(ctx) {
};

// Exit a parse tree produced by SQLParser#parenthesized_value_expression.
SQLParserListener.prototype.exitParenthesized_value_expression = function(ctx) {
};


// Enter a parse tree produced by SQLParser#nonparenthesized_value_expression_primary.
SQLParserListener.prototype.enterNonparenthesized_value_expression_primary = function(ctx) {
};

// Exit a parse tree produced by SQLParser#nonparenthesized_value_expression_primary.
SQLParserListener.prototype.exitNonparenthesized_value_expression_primary = function(ctx) {
};


// Enter a parse tree produced by SQLParser#unsigned_value_specification.
SQLParserListener.prototype.enterUnsigned_value_specification = function(ctx) {
};

// Exit a parse tree produced by SQLParser#unsigned_value_specification.
SQLParserListener.prototype.exitUnsigned_value_specification = function(ctx) {
};


// Enter a parse tree produced by SQLParser#unsigned_numeric_literal.
SQLParserListener.prototype.enterUnsigned_numeric_literal = function(ctx) {
};

// Exit a parse tree produced by SQLParser#unsigned_numeric_literal.
SQLParserListener.prototype.exitUnsigned_numeric_literal = function(ctx) {
};


// Enter a parse tree produced by SQLParser#signed_numerical_literal.
SQLParserListener.prototype.enterSigned_numerical_literal = function(ctx) {
};

// Exit a parse tree produced by SQLParser#signed_numerical_literal.
SQLParserListener.prototype.exitSigned_numerical_literal = function(ctx) {
};


// Enter a parse tree produced by SQLParser#set_function_specification.
SQLParserListener.prototype.enterSet_function_specification = function(ctx) {
};

// Exit a parse tree produced by SQLParser#set_function_specification.
SQLParserListener.prototype.exitSet_function_specification = function(ctx) {
};


// Enter a parse tree produced by SQLParser#aggregate_function.
SQLParserListener.prototype.enterAggregate_function = function(ctx) {
};

// Exit a parse tree produced by SQLParser#aggregate_function.
SQLParserListener.prototype.exitAggregate_function = function(ctx) {
};


// Enter a parse tree produced by SQLParser#general_set_function.
SQLParserListener.prototype.enterGeneral_set_function = function(ctx) {
};

// Exit a parse tree produced by SQLParser#general_set_function.
SQLParserListener.prototype.exitGeneral_set_function = function(ctx) {
};


// Enter a parse tree produced by SQLParser#set_function_type.
SQLParserListener.prototype.enterSet_function_type = function(ctx) {
};

// Exit a parse tree produced by SQLParser#set_function_type.
SQLParserListener.prototype.exitSet_function_type = function(ctx) {
};


// Enter a parse tree produced by SQLParser#filter_clause.
SQLParserListener.prototype.enterFilter_clause = function(ctx) {
};

// Exit a parse tree produced by SQLParser#filter_clause.
SQLParserListener.prototype.exitFilter_clause = function(ctx) {
};


// Enter a parse tree produced by SQLParser#grouping_operation.
SQLParserListener.prototype.enterGrouping_operation = function(ctx) {
};

// Exit a parse tree produced by SQLParser#grouping_operation.
SQLParserListener.prototype.exitGrouping_operation = function(ctx) {
};


// Enter a parse tree produced by SQLParser#case_expression.
SQLParserListener.prototype.enterCase_expression = function(ctx) {
};

// Exit a parse tree produced by SQLParser#case_expression.
SQLParserListener.prototype.exitCase_expression = function(ctx) {
};


// Enter a parse tree produced by SQLParser#case_abbreviation.
SQLParserListener.prototype.enterCase_abbreviation = function(ctx) {
};

// Exit a parse tree produced by SQLParser#case_abbreviation.
SQLParserListener.prototype.exitCase_abbreviation = function(ctx) {
};


// Enter a parse tree produced by SQLParser#case_specification.
SQLParserListener.prototype.enterCase_specification = function(ctx) {
};

// Exit a parse tree produced by SQLParser#case_specification.
SQLParserListener.prototype.exitCase_specification = function(ctx) {
};


// Enter a parse tree produced by SQLParser#simple_case.
SQLParserListener.prototype.enterSimple_case = function(ctx) {
};

// Exit a parse tree produced by SQLParser#simple_case.
SQLParserListener.prototype.exitSimple_case = function(ctx) {
};


// Enter a parse tree produced by SQLParser#searched_case.
SQLParserListener.prototype.enterSearched_case = function(ctx) {
};

// Exit a parse tree produced by SQLParser#searched_case.
SQLParserListener.prototype.exitSearched_case = function(ctx) {
};


// Enter a parse tree produced by SQLParser#simple_when_clause.
SQLParserListener.prototype.enterSimple_when_clause = function(ctx) {
};

// Exit a parse tree produced by SQLParser#simple_when_clause.
SQLParserListener.prototype.exitSimple_when_clause = function(ctx) {
};


// Enter a parse tree produced by SQLParser#searched_when_clause.
SQLParserListener.prototype.enterSearched_when_clause = function(ctx) {
};

// Exit a parse tree produced by SQLParser#searched_when_clause.
SQLParserListener.prototype.exitSearched_when_clause = function(ctx) {
};


// Enter a parse tree produced by SQLParser#else_clause.
SQLParserListener.prototype.enterElse_clause = function(ctx) {
};

// Exit a parse tree produced by SQLParser#else_clause.
SQLParserListener.prototype.exitElse_clause = function(ctx) {
};


// Enter a parse tree produced by SQLParser#result.
SQLParserListener.prototype.enterResult = function(ctx) {
};

// Exit a parse tree produced by SQLParser#result.
SQLParserListener.prototype.exitResult = function(ctx) {
};


// Enter a parse tree produced by SQLParser#cast_specification.
SQLParserListener.prototype.enterCast_specification = function(ctx) {
};

// Exit a parse tree produced by SQLParser#cast_specification.
SQLParserListener.prototype.exitCast_specification = function(ctx) {
};


// Enter a parse tree produced by SQLParser#cast_operand.
SQLParserListener.prototype.enterCast_operand = function(ctx) {
};

// Exit a parse tree produced by SQLParser#cast_operand.
SQLParserListener.prototype.exitCast_operand = function(ctx) {
};


// Enter a parse tree produced by SQLParser#cast_target.
SQLParserListener.prototype.enterCast_target = function(ctx) {
};

// Exit a parse tree produced by SQLParser#cast_target.
SQLParserListener.prototype.exitCast_target = function(ctx) {
};


// Enter a parse tree produced by SQLParser#value_expression.
SQLParserListener.prototype.enterValue_expression = function(ctx) {
};

// Exit a parse tree produced by SQLParser#value_expression.
SQLParserListener.prototype.exitValue_expression = function(ctx) {
};


// Enter a parse tree produced by SQLParser#common_value_expression.
SQLParserListener.prototype.enterCommon_value_expression = function(ctx) {
};

// Exit a parse tree produced by SQLParser#common_value_expression.
SQLParserListener.prototype.exitCommon_value_expression = function(ctx) {
};


// Enter a parse tree produced by SQLParser#numeric_value_expression.
SQLParserListener.prototype.enterNumeric_value_expression = function(ctx) {
};

// Exit a parse tree produced by SQLParser#numeric_value_expression.
SQLParserListener.prototype.exitNumeric_value_expression = function(ctx) {
};


// Enter a parse tree produced by SQLParser#term.
SQLParserListener.prototype.enterTerm = function(ctx) {
};

// Exit a parse tree produced by SQLParser#term.
SQLParserListener.prototype.exitTerm = function(ctx) {
};


// Enter a parse tree produced by SQLParser#factor.
SQLParserListener.prototype.enterFactor = function(ctx) {
};

// Exit a parse tree produced by SQLParser#factor.
SQLParserListener.prototype.exitFactor = function(ctx) {
};


// Enter a parse tree produced by SQLParser#array.
SQLParserListener.prototype.enterArray = function(ctx) {
};

// Exit a parse tree produced by SQLParser#array.
SQLParserListener.prototype.exitArray = function(ctx) {
};


// Enter a parse tree produced by SQLParser#numeric_primary.
SQLParserListener.prototype.enterNumeric_primary = function(ctx) {
};

// Exit a parse tree produced by SQLParser#numeric_primary.
SQLParserListener.prototype.exitNumeric_primary = function(ctx) {
};


// Enter a parse tree produced by SQLParser#sign.
SQLParserListener.prototype.enterSign = function(ctx) {
};

// Exit a parse tree produced by SQLParser#sign.
SQLParserListener.prototype.exitSign = function(ctx) {
};


// Enter a parse tree produced by SQLParser#numeric_value_function.
SQLParserListener.prototype.enterNumeric_value_function = function(ctx) {
};

// Exit a parse tree produced by SQLParser#numeric_value_function.
SQLParserListener.prototype.exitNumeric_value_function = function(ctx) {
};


// Enter a parse tree produced by SQLParser#extract_expression.
SQLParserListener.prototype.enterExtract_expression = function(ctx) {
};

// Exit a parse tree produced by SQLParser#extract_expression.
SQLParserListener.prototype.exitExtract_expression = function(ctx) {
};


// Enter a parse tree produced by SQLParser#extract_field.
SQLParserListener.prototype.enterExtract_field = function(ctx) {
};

// Exit a parse tree produced by SQLParser#extract_field.
SQLParserListener.prototype.exitExtract_field = function(ctx) {
};


// Enter a parse tree produced by SQLParser#time_zone_field.
SQLParserListener.prototype.enterTime_zone_field = function(ctx) {
};

// Exit a parse tree produced by SQLParser#time_zone_field.
SQLParserListener.prototype.exitTime_zone_field = function(ctx) {
};


// Enter a parse tree produced by SQLParser#extract_source.
SQLParserListener.prototype.enterExtract_source = function(ctx) {
};

// Exit a parse tree produced by SQLParser#extract_source.
SQLParserListener.prototype.exitExtract_source = function(ctx) {
};


// Enter a parse tree produced by SQLParser#string_value_expression.
SQLParserListener.prototype.enterString_value_expression = function(ctx) {
};

// Exit a parse tree produced by SQLParser#string_value_expression.
SQLParserListener.prototype.exitString_value_expression = function(ctx) {
};


// Enter a parse tree produced by SQLParser#character_value_expression.
SQLParserListener.prototype.enterCharacter_value_expression = function(ctx) {
};

// Exit a parse tree produced by SQLParser#character_value_expression.
SQLParserListener.prototype.exitCharacter_value_expression = function(ctx) {
};


// Enter a parse tree produced by SQLParser#character_factor.
SQLParserListener.prototype.enterCharacter_factor = function(ctx) {
};

// Exit a parse tree produced by SQLParser#character_factor.
SQLParserListener.prototype.exitCharacter_factor = function(ctx) {
};


// Enter a parse tree produced by SQLParser#character_primary.
SQLParserListener.prototype.enterCharacter_primary = function(ctx) {
};

// Exit a parse tree produced by SQLParser#character_primary.
SQLParserListener.prototype.exitCharacter_primary = function(ctx) {
};


// Enter a parse tree produced by SQLParser#string_value_function.
SQLParserListener.prototype.enterString_value_function = function(ctx) {
};

// Exit a parse tree produced by SQLParser#string_value_function.
SQLParserListener.prototype.exitString_value_function = function(ctx) {
};


// Enter a parse tree produced by SQLParser#trim_function.
SQLParserListener.prototype.enterTrim_function = function(ctx) {
};

// Exit a parse tree produced by SQLParser#trim_function.
SQLParserListener.prototype.exitTrim_function = function(ctx) {
};


// Enter a parse tree produced by SQLParser#trim_operands.
SQLParserListener.prototype.enterTrim_operands = function(ctx) {
};

// Exit a parse tree produced by SQLParser#trim_operands.
SQLParserListener.prototype.exitTrim_operands = function(ctx) {
};


// Enter a parse tree produced by SQLParser#trim_specification.
SQLParserListener.prototype.enterTrim_specification = function(ctx) {
};

// Exit a parse tree produced by SQLParser#trim_specification.
SQLParserListener.prototype.exitTrim_specification = function(ctx) {
};


// Enter a parse tree produced by SQLParser#boolean_value_expression.
SQLParserListener.prototype.enterBoolean_value_expression = function(ctx) {
};

// Exit a parse tree produced by SQLParser#boolean_value_expression.
SQLParserListener.prototype.exitBoolean_value_expression = function(ctx) {
};


// Enter a parse tree produced by SQLParser#or_predicate.
SQLParserListener.prototype.enterOr_predicate = function(ctx) {
};

// Exit a parse tree produced by SQLParser#or_predicate.
SQLParserListener.prototype.exitOr_predicate = function(ctx) {
};


// Enter a parse tree produced by SQLParser#and_predicate.
SQLParserListener.prototype.enterAnd_predicate = function(ctx) {
};

// Exit a parse tree produced by SQLParser#and_predicate.
SQLParserListener.prototype.exitAnd_predicate = function(ctx) {
};


// Enter a parse tree produced by SQLParser#boolean_factor.
SQLParserListener.prototype.enterBoolean_factor = function(ctx) {
};

// Exit a parse tree produced by SQLParser#boolean_factor.
SQLParserListener.prototype.exitBoolean_factor = function(ctx) {
};


// Enter a parse tree produced by SQLParser#boolean_test.
SQLParserListener.prototype.enterBoolean_test = function(ctx) {
};

// Exit a parse tree produced by SQLParser#boolean_test.
SQLParserListener.prototype.exitBoolean_test = function(ctx) {
};


// Enter a parse tree produced by SQLParser#is_clause.
SQLParserListener.prototype.enterIs_clause = function(ctx) {
};

// Exit a parse tree produced by SQLParser#is_clause.
SQLParserListener.prototype.exitIs_clause = function(ctx) {
};


// Enter a parse tree produced by SQLParser#truth_value.
SQLParserListener.prototype.enterTruth_value = function(ctx) {
};

// Exit a parse tree produced by SQLParser#truth_value.
SQLParserListener.prototype.exitTruth_value = function(ctx) {
};


// Enter a parse tree produced by SQLParser#boolean_primary.
SQLParserListener.prototype.enterBoolean_primary = function(ctx) {
};

// Exit a parse tree produced by SQLParser#boolean_primary.
SQLParserListener.prototype.exitBoolean_primary = function(ctx) {
};


// Enter a parse tree produced by SQLParser#boolean_predicand.
SQLParserListener.prototype.enterBoolean_predicand = function(ctx) {
};

// Exit a parse tree produced by SQLParser#boolean_predicand.
SQLParserListener.prototype.exitBoolean_predicand = function(ctx) {
};


// Enter a parse tree produced by SQLParser#parenthesized_boolean_value_expression.
SQLParserListener.prototype.enterParenthesized_boolean_value_expression = function(ctx) {
};

// Exit a parse tree produced by SQLParser#parenthesized_boolean_value_expression.
SQLParserListener.prototype.exitParenthesized_boolean_value_expression = function(ctx) {
};


// Enter a parse tree produced by SQLParser#row_value_expression.
SQLParserListener.prototype.enterRow_value_expression = function(ctx) {
};

// Exit a parse tree produced by SQLParser#row_value_expression.
SQLParserListener.prototype.exitRow_value_expression = function(ctx) {
};


// Enter a parse tree produced by SQLParser#row_value_special_case.
SQLParserListener.prototype.enterRow_value_special_case = function(ctx) {
};

// Exit a parse tree produced by SQLParser#row_value_special_case.
SQLParserListener.prototype.exitRow_value_special_case = function(ctx) {
};


// Enter a parse tree produced by SQLParser#explicit_row_value_constructor.
SQLParserListener.prototype.enterExplicit_row_value_constructor = function(ctx) {
};

// Exit a parse tree produced by SQLParser#explicit_row_value_constructor.
SQLParserListener.prototype.exitExplicit_row_value_constructor = function(ctx) {
};


// Enter a parse tree produced by SQLParser#row_value_predicand.
SQLParserListener.prototype.enterRow_value_predicand = function(ctx) {
};

// Exit a parse tree produced by SQLParser#row_value_predicand.
SQLParserListener.prototype.exitRow_value_predicand = function(ctx) {
};


// Enter a parse tree produced by SQLParser#row_value_constructor_predicand.
SQLParserListener.prototype.enterRow_value_constructor_predicand = function(ctx) {
};

// Exit a parse tree produced by SQLParser#row_value_constructor_predicand.
SQLParserListener.prototype.exitRow_value_constructor_predicand = function(ctx) {
};


// Enter a parse tree produced by SQLParser#table_expression.
SQLParserListener.prototype.enterTable_expression = function(ctx) {
};

// Exit a parse tree produced by SQLParser#table_expression.
SQLParserListener.prototype.exitTable_expression = function(ctx) {
};


// Enter a parse tree produced by SQLParser#from_clause.
SQLParserListener.prototype.enterFrom_clause = function(ctx) {
};

// Exit a parse tree produced by SQLParser#from_clause.
SQLParserListener.prototype.exitFrom_clause = function(ctx) {
};


// Enter a parse tree produced by SQLParser#table_reference_list.
SQLParserListener.prototype.enterTable_reference_list = function(ctx) {
};

// Exit a parse tree produced by SQLParser#table_reference_list.
SQLParserListener.prototype.exitTable_reference_list = function(ctx) {
};


// Enter a parse tree produced by SQLParser#table_reference.
SQLParserListener.prototype.enterTable_reference = function(ctx) {
};

// Exit a parse tree produced by SQLParser#table_reference.
SQLParserListener.prototype.exitTable_reference = function(ctx) {
};


// Enter a parse tree produced by SQLParser#joined_table.
SQLParserListener.prototype.enterJoined_table = function(ctx) {
};

// Exit a parse tree produced by SQLParser#joined_table.
SQLParserListener.prototype.exitJoined_table = function(ctx) {
};


// Enter a parse tree produced by SQLParser#joined_table_primary.
SQLParserListener.prototype.enterJoined_table_primary = function(ctx) {
};

// Exit a parse tree produced by SQLParser#joined_table_primary.
SQLParserListener.prototype.exitJoined_table_primary = function(ctx) {
};


// Enter a parse tree produced by SQLParser#cross_join.
SQLParserListener.prototype.enterCross_join = function(ctx) {
};

// Exit a parse tree produced by SQLParser#cross_join.
SQLParserListener.prototype.exitCross_join = function(ctx) {
};


// Enter a parse tree produced by SQLParser#qualified_join.
SQLParserListener.prototype.enterQualified_join = function(ctx) {
};

// Exit a parse tree produced by SQLParser#qualified_join.
SQLParserListener.prototype.exitQualified_join = function(ctx) {
};


// Enter a parse tree produced by SQLParser#natural_join.
SQLParserListener.prototype.enterNatural_join = function(ctx) {
};

// Exit a parse tree produced by SQLParser#natural_join.
SQLParserListener.prototype.exitNatural_join = function(ctx) {
};


// Enter a parse tree produced by SQLParser#union_join.
SQLParserListener.prototype.enterUnion_join = function(ctx) {
};

// Exit a parse tree produced by SQLParser#union_join.
SQLParserListener.prototype.exitUnion_join = function(ctx) {
};


// Enter a parse tree produced by SQLParser#join_type.
SQLParserListener.prototype.enterJoin_type = function(ctx) {
};

// Exit a parse tree produced by SQLParser#join_type.
SQLParserListener.prototype.exitJoin_type = function(ctx) {
};


// Enter a parse tree produced by SQLParser#outer_join_type.
SQLParserListener.prototype.enterOuter_join_type = function(ctx) {
};

// Exit a parse tree produced by SQLParser#outer_join_type.
SQLParserListener.prototype.exitOuter_join_type = function(ctx) {
};


// Enter a parse tree produced by SQLParser#outer_join_type_part2.
SQLParserListener.prototype.enterOuter_join_type_part2 = function(ctx) {
};

// Exit a parse tree produced by SQLParser#outer_join_type_part2.
SQLParserListener.prototype.exitOuter_join_type_part2 = function(ctx) {
};


// Enter a parse tree produced by SQLParser#join_specification.
SQLParserListener.prototype.enterJoin_specification = function(ctx) {
};

// Exit a parse tree produced by SQLParser#join_specification.
SQLParserListener.prototype.exitJoin_specification = function(ctx) {
};


// Enter a parse tree produced by SQLParser#join_condition.
SQLParserListener.prototype.enterJoin_condition = function(ctx) {
};

// Exit a parse tree produced by SQLParser#join_condition.
SQLParserListener.prototype.exitJoin_condition = function(ctx) {
};


// Enter a parse tree produced by SQLParser#named_columns_join.
SQLParserListener.prototype.enterNamed_columns_join = function(ctx) {
};

// Exit a parse tree produced by SQLParser#named_columns_join.
SQLParserListener.prototype.exitNamed_columns_join = function(ctx) {
};


// Enter a parse tree produced by SQLParser#table_primary.
SQLParserListener.prototype.enterTable_primary = function(ctx) {
};

// Exit a parse tree produced by SQLParser#table_primary.
SQLParserListener.prototype.exitTable_primary = function(ctx) {
};


// Enter a parse tree produced by SQLParser#column_name_list.
SQLParserListener.prototype.enterColumn_name_list = function(ctx) {
};

// Exit a parse tree produced by SQLParser#column_name_list.
SQLParserListener.prototype.exitColumn_name_list = function(ctx) {
};


// Enter a parse tree produced by SQLParser#derived_table.
SQLParserListener.prototype.enterDerived_table = function(ctx) {
};

// Exit a parse tree produced by SQLParser#derived_table.
SQLParserListener.prototype.exitDerived_table = function(ctx) {
};


// Enter a parse tree produced by SQLParser#where_clause.
SQLParserListener.prototype.enterWhere_clause = function(ctx) {
};

// Exit a parse tree produced by SQLParser#where_clause.
SQLParserListener.prototype.exitWhere_clause = function(ctx) {
};


// Enter a parse tree produced by SQLParser#search_condition.
SQLParserListener.prototype.enterSearch_condition = function(ctx) {
};

// Exit a parse tree produced by SQLParser#search_condition.
SQLParserListener.prototype.exitSearch_condition = function(ctx) {
};


// Enter a parse tree produced by SQLParser#groupby_clause.
SQLParserListener.prototype.enterGroupby_clause = function(ctx) {
};

// Exit a parse tree produced by SQLParser#groupby_clause.
SQLParserListener.prototype.exitGroupby_clause = function(ctx) {
};


// Enter a parse tree produced by SQLParser#grouping_element_list.
SQLParserListener.prototype.enterGrouping_element_list = function(ctx) {
};

// Exit a parse tree produced by SQLParser#grouping_element_list.
SQLParserListener.prototype.exitGrouping_element_list = function(ctx) {
};


// Enter a parse tree produced by SQLParser#grouping_element.
SQLParserListener.prototype.enterGrouping_element = function(ctx) {
};

// Exit a parse tree produced by SQLParser#grouping_element.
SQLParserListener.prototype.exitGrouping_element = function(ctx) {
};


// Enter a parse tree produced by SQLParser#ordinary_grouping_set.
SQLParserListener.prototype.enterOrdinary_grouping_set = function(ctx) {
};

// Exit a parse tree produced by SQLParser#ordinary_grouping_set.
SQLParserListener.prototype.exitOrdinary_grouping_set = function(ctx) {
};


// Enter a parse tree produced by SQLParser#ordinary_grouping_set_list.
SQLParserListener.prototype.enterOrdinary_grouping_set_list = function(ctx) {
};

// Exit a parse tree produced by SQLParser#ordinary_grouping_set_list.
SQLParserListener.prototype.exitOrdinary_grouping_set_list = function(ctx) {
};


// Enter a parse tree produced by SQLParser#rollup_list.
SQLParserListener.prototype.enterRollup_list = function(ctx) {
};

// Exit a parse tree produced by SQLParser#rollup_list.
SQLParserListener.prototype.exitRollup_list = function(ctx) {
};


// Enter a parse tree produced by SQLParser#cube_list.
SQLParserListener.prototype.enterCube_list = function(ctx) {
};

// Exit a parse tree produced by SQLParser#cube_list.
SQLParserListener.prototype.exitCube_list = function(ctx) {
};


// Enter a parse tree produced by SQLParser#empty_grouping_set.
SQLParserListener.prototype.enterEmpty_grouping_set = function(ctx) {
};

// Exit a parse tree produced by SQLParser#empty_grouping_set.
SQLParserListener.prototype.exitEmpty_grouping_set = function(ctx) {
};


// Enter a parse tree produced by SQLParser#having_clause.
SQLParserListener.prototype.enterHaving_clause = function(ctx) {
};

// Exit a parse tree produced by SQLParser#having_clause.
SQLParserListener.prototype.exitHaving_clause = function(ctx) {
};


// Enter a parse tree produced by SQLParser#row_value_predicand_list.
SQLParserListener.prototype.enterRow_value_predicand_list = function(ctx) {
};

// Exit a parse tree produced by SQLParser#row_value_predicand_list.
SQLParserListener.prototype.exitRow_value_predicand_list = function(ctx) {
};


// Enter a parse tree produced by SQLParser#query_expression.
SQLParserListener.prototype.enterQuery_expression = function(ctx) {
};

// Exit a parse tree produced by SQLParser#query_expression.
SQLParserListener.prototype.exitQuery_expression = function(ctx) {
};


// Enter a parse tree produced by SQLParser#query_expression_body.
SQLParserListener.prototype.enterQuery_expression_body = function(ctx) {
};

// Exit a parse tree produced by SQLParser#query_expression_body.
SQLParserListener.prototype.exitQuery_expression_body = function(ctx) {
};


// Enter a parse tree produced by SQLParser#non_join_query_expression.
SQLParserListener.prototype.enterNon_join_query_expression = function(ctx) {
};

// Exit a parse tree produced by SQLParser#non_join_query_expression.
SQLParserListener.prototype.exitNon_join_query_expression = function(ctx) {
};


// Enter a parse tree produced by SQLParser#query_term.
SQLParserListener.prototype.enterQuery_term = function(ctx) {
};

// Exit a parse tree produced by SQLParser#query_term.
SQLParserListener.prototype.exitQuery_term = function(ctx) {
};


// Enter a parse tree produced by SQLParser#non_join_query_term.
SQLParserListener.prototype.enterNon_join_query_term = function(ctx) {
};

// Exit a parse tree produced by SQLParser#non_join_query_term.
SQLParserListener.prototype.exitNon_join_query_term = function(ctx) {
};


// Enter a parse tree produced by SQLParser#query_primary.
SQLParserListener.prototype.enterQuery_primary = function(ctx) {
};

// Exit a parse tree produced by SQLParser#query_primary.
SQLParserListener.prototype.exitQuery_primary = function(ctx) {
};


// Enter a parse tree produced by SQLParser#non_join_query_primary.
SQLParserListener.prototype.enterNon_join_query_primary = function(ctx) {
};

// Exit a parse tree produced by SQLParser#non_join_query_primary.
SQLParserListener.prototype.exitNon_join_query_primary = function(ctx) {
};


// Enter a parse tree produced by SQLParser#simple_table.
SQLParserListener.prototype.enterSimple_table = function(ctx) {
};

// Exit a parse tree produced by SQLParser#simple_table.
SQLParserListener.prototype.exitSimple_table = function(ctx) {
};


// Enter a parse tree produced by SQLParser#explicit_table.
SQLParserListener.prototype.enterExplicit_table = function(ctx) {
};

// Exit a parse tree produced by SQLParser#explicit_table.
SQLParserListener.prototype.exitExplicit_table = function(ctx) {
};


// Enter a parse tree produced by SQLParser#table_or_query_name.
SQLParserListener.prototype.enterTable_or_query_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#table_or_query_name.
SQLParserListener.prototype.exitTable_or_query_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#table_name.
SQLParserListener.prototype.enterTable_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#table_name.
SQLParserListener.prototype.exitTable_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#query_specification.
SQLParserListener.prototype.enterQuery_specification = function(ctx) {
};

// Exit a parse tree produced by SQLParser#query_specification.
SQLParserListener.prototype.exitQuery_specification = function(ctx) {
};


// Enter a parse tree produced by SQLParser#select_list.
SQLParserListener.prototype.enterSelect_list = function(ctx) {
};

// Exit a parse tree produced by SQLParser#select_list.
SQLParserListener.prototype.exitSelect_list = function(ctx) {
};


// Enter a parse tree produced by SQLParser#select_sublist.
SQLParserListener.prototype.enterSelect_sublist = function(ctx) {
};

// Exit a parse tree produced by SQLParser#select_sublist.
SQLParserListener.prototype.exitSelect_sublist = function(ctx) {
};


// Enter a parse tree produced by SQLParser#derived_column.
SQLParserListener.prototype.enterDerived_column = function(ctx) {
};

// Exit a parse tree produced by SQLParser#derived_column.
SQLParserListener.prototype.exitDerived_column = function(ctx) {
};


// Enter a parse tree produced by SQLParser#qualified_asterisk.
SQLParserListener.prototype.enterQualified_asterisk = function(ctx) {
};

// Exit a parse tree produced by SQLParser#qualified_asterisk.
SQLParserListener.prototype.exitQualified_asterisk = function(ctx) {
};


// Enter a parse tree produced by SQLParser#set_qualifier.
SQLParserListener.prototype.enterSet_qualifier = function(ctx) {
};

// Exit a parse tree produced by SQLParser#set_qualifier.
SQLParserListener.prototype.exitSet_qualifier = function(ctx) {
};


// Enter a parse tree produced by SQLParser#column_reference.
SQLParserListener.prototype.enterColumn_reference = function(ctx) {
};

// Exit a parse tree produced by SQLParser#column_reference.
SQLParserListener.prototype.exitColumn_reference = function(ctx) {
};


// Enter a parse tree produced by SQLParser#as_clause.
SQLParserListener.prototype.enterAs_clause = function(ctx) {
};

// Exit a parse tree produced by SQLParser#as_clause.
SQLParserListener.prototype.exitAs_clause = function(ctx) {
};


// Enter a parse tree produced by SQLParser#column_reference_list.
SQLParserListener.prototype.enterColumn_reference_list = function(ctx) {
};

// Exit a parse tree produced by SQLParser#column_reference_list.
SQLParserListener.prototype.exitColumn_reference_list = function(ctx) {
};


// Enter a parse tree produced by SQLParser#scalar_subquery.
SQLParserListener.prototype.enterScalar_subquery = function(ctx) {
};

// Exit a parse tree produced by SQLParser#scalar_subquery.
SQLParserListener.prototype.exitScalar_subquery = function(ctx) {
};


// Enter a parse tree produced by SQLParser#row_subquery.
SQLParserListener.prototype.enterRow_subquery = function(ctx) {
};

// Exit a parse tree produced by SQLParser#row_subquery.
SQLParserListener.prototype.exitRow_subquery = function(ctx) {
};


// Enter a parse tree produced by SQLParser#table_subquery.
SQLParserListener.prototype.enterTable_subquery = function(ctx) {
};

// Exit a parse tree produced by SQLParser#table_subquery.
SQLParserListener.prototype.exitTable_subquery = function(ctx) {
};


// Enter a parse tree produced by SQLParser#subquery.
SQLParserListener.prototype.enterSubquery = function(ctx) {
};

// Exit a parse tree produced by SQLParser#subquery.
SQLParserListener.prototype.exitSubquery = function(ctx) {
};


// Enter a parse tree produced by SQLParser#predicate.
SQLParserListener.prototype.enterPredicate = function(ctx) {
};

// Exit a parse tree produced by SQLParser#predicate.
SQLParserListener.prototype.exitPredicate = function(ctx) {
};


// Enter a parse tree produced by SQLParser#comparison_predicate.
SQLParserListener.prototype.enterComparison_predicate = function(ctx) {
};

// Exit a parse tree produced by SQLParser#comparison_predicate.
SQLParserListener.prototype.exitComparison_predicate = function(ctx) {
};


// Enter a parse tree produced by SQLParser#comp_op.
SQLParserListener.prototype.enterComp_op = function(ctx) {
};

// Exit a parse tree produced by SQLParser#comp_op.
SQLParserListener.prototype.exitComp_op = function(ctx) {
};


// Enter a parse tree produced by SQLParser#between_predicate.
SQLParserListener.prototype.enterBetween_predicate = function(ctx) {
};

// Exit a parse tree produced by SQLParser#between_predicate.
SQLParserListener.prototype.exitBetween_predicate = function(ctx) {
};


// Enter a parse tree produced by SQLParser#between_predicate_part_2.
SQLParserListener.prototype.enterBetween_predicate_part_2 = function(ctx) {
};

// Exit a parse tree produced by SQLParser#between_predicate_part_2.
SQLParserListener.prototype.exitBetween_predicate_part_2 = function(ctx) {
};


// Enter a parse tree produced by SQLParser#in_predicate.
SQLParserListener.prototype.enterIn_predicate = function(ctx) {
};

// Exit a parse tree produced by SQLParser#in_predicate.
SQLParserListener.prototype.exitIn_predicate = function(ctx) {
};


// Enter a parse tree produced by SQLParser#in_predicate_value.
SQLParserListener.prototype.enterIn_predicate_value = function(ctx) {
};

// Exit a parse tree produced by SQLParser#in_predicate_value.
SQLParserListener.prototype.exitIn_predicate_value = function(ctx) {
};


// Enter a parse tree produced by SQLParser#in_value_list.
SQLParserListener.prototype.enterIn_value_list = function(ctx) {
};

// Exit a parse tree produced by SQLParser#in_value_list.
SQLParserListener.prototype.exitIn_value_list = function(ctx) {
};


// Enter a parse tree produced by SQLParser#pattern_matching_predicate.
SQLParserListener.prototype.enterPattern_matching_predicate = function(ctx) {
};

// Exit a parse tree produced by SQLParser#pattern_matching_predicate.
SQLParserListener.prototype.exitPattern_matching_predicate = function(ctx) {
};


// Enter a parse tree produced by SQLParser#pattern_matcher.
SQLParserListener.prototype.enterPattern_matcher = function(ctx) {
};

// Exit a parse tree produced by SQLParser#pattern_matcher.
SQLParserListener.prototype.exitPattern_matcher = function(ctx) {
};


// Enter a parse tree produced by SQLParser#negativable_matcher.
SQLParserListener.prototype.enterNegativable_matcher = function(ctx) {
};

// Exit a parse tree produced by SQLParser#negativable_matcher.
SQLParserListener.prototype.exitNegativable_matcher = function(ctx) {
};


// Enter a parse tree produced by SQLParser#regex_matcher.
SQLParserListener.prototype.enterRegex_matcher = function(ctx) {
};

// Exit a parse tree produced by SQLParser#regex_matcher.
SQLParserListener.prototype.exitRegex_matcher = function(ctx) {
};


// Enter a parse tree produced by SQLParser#null_predicate.
SQLParserListener.prototype.enterNull_predicate = function(ctx) {
};

// Exit a parse tree produced by SQLParser#null_predicate.
SQLParserListener.prototype.exitNull_predicate = function(ctx) {
};


// Enter a parse tree produced by SQLParser#quantified_comparison_predicate.
SQLParserListener.prototype.enterQuantified_comparison_predicate = function(ctx) {
};

// Exit a parse tree produced by SQLParser#quantified_comparison_predicate.
SQLParserListener.prototype.exitQuantified_comparison_predicate = function(ctx) {
};


// Enter a parse tree produced by SQLParser#quantifier.
SQLParserListener.prototype.enterQuantifier = function(ctx) {
};

// Exit a parse tree produced by SQLParser#quantifier.
SQLParserListener.prototype.exitQuantifier = function(ctx) {
};


// Enter a parse tree produced by SQLParser#all.
SQLParserListener.prototype.enterAll = function(ctx) {
};

// Exit a parse tree produced by SQLParser#all.
SQLParserListener.prototype.exitAll = function(ctx) {
};


// Enter a parse tree produced by SQLParser#some.
SQLParserListener.prototype.enterSome = function(ctx) {
};

// Exit a parse tree produced by SQLParser#some.
SQLParserListener.prototype.exitSome = function(ctx) {
};


// Enter a parse tree produced by SQLParser#exists_predicate.
SQLParserListener.prototype.enterExists_predicate = function(ctx) {
};

// Exit a parse tree produced by SQLParser#exists_predicate.
SQLParserListener.prototype.exitExists_predicate = function(ctx) {
};


// Enter a parse tree produced by SQLParser#unique_predicate.
SQLParserListener.prototype.enterUnique_predicate = function(ctx) {
};

// Exit a parse tree produced by SQLParser#unique_predicate.
SQLParserListener.prototype.exitUnique_predicate = function(ctx) {
};


// Enter a parse tree produced by SQLParser#primary_datetime_field.
SQLParserListener.prototype.enterPrimary_datetime_field = function(ctx) {
};

// Exit a parse tree produced by SQLParser#primary_datetime_field.
SQLParserListener.prototype.exitPrimary_datetime_field = function(ctx) {
};


// Enter a parse tree produced by SQLParser#non_second_primary_datetime_field.
SQLParserListener.prototype.enterNon_second_primary_datetime_field = function(ctx) {
};

// Exit a parse tree produced by SQLParser#non_second_primary_datetime_field.
SQLParserListener.prototype.exitNon_second_primary_datetime_field = function(ctx) {
};


// Enter a parse tree produced by SQLParser#extended_datetime_field.
SQLParserListener.prototype.enterExtended_datetime_field = function(ctx) {
};

// Exit a parse tree produced by SQLParser#extended_datetime_field.
SQLParserListener.prototype.exitExtended_datetime_field = function(ctx) {
};


// Enter a parse tree produced by SQLParser#routine_invocation.
SQLParserListener.prototype.enterRoutine_invocation = function(ctx) {
};

// Exit a parse tree produced by SQLParser#routine_invocation.
SQLParserListener.prototype.exitRoutine_invocation = function(ctx) {
};


// Enter a parse tree produced by SQLParser#function_names_for_reserved_words.
SQLParserListener.prototype.enterFunction_names_for_reserved_words = function(ctx) {
};

// Exit a parse tree produced by SQLParser#function_names_for_reserved_words.
SQLParserListener.prototype.exitFunction_names_for_reserved_words = function(ctx) {
};


// Enter a parse tree produced by SQLParser#function_name.
SQLParserListener.prototype.enterFunction_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#function_name.
SQLParserListener.prototype.exitFunction_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#sql_argument_list.
SQLParserListener.prototype.enterSql_argument_list = function(ctx) {
};

// Exit a parse tree produced by SQLParser#sql_argument_list.
SQLParserListener.prototype.exitSql_argument_list = function(ctx) {
};


// Enter a parse tree produced by SQLParser#orderby_clause.
SQLParserListener.prototype.enterOrderby_clause = function(ctx) {
};

// Exit a parse tree produced by SQLParser#orderby_clause.
SQLParserListener.prototype.exitOrderby_clause = function(ctx) {
};


// Enter a parse tree produced by SQLParser#sort_specifier_list.
SQLParserListener.prototype.enterSort_specifier_list = function(ctx) {
};

// Exit a parse tree produced by SQLParser#sort_specifier_list.
SQLParserListener.prototype.exitSort_specifier_list = function(ctx) {
};


// Enter a parse tree produced by SQLParser#sort_specifier.
SQLParserListener.prototype.enterSort_specifier = function(ctx) {
};

// Exit a parse tree produced by SQLParser#sort_specifier.
SQLParserListener.prototype.exitSort_specifier = function(ctx) {
};


// Enter a parse tree produced by SQLParser#order_specification.
SQLParserListener.prototype.enterOrder_specification = function(ctx) {
};

// Exit a parse tree produced by SQLParser#order_specification.
SQLParserListener.prototype.exitOrder_specification = function(ctx) {
};


// Enter a parse tree produced by SQLParser#limit_clause.
SQLParserListener.prototype.enterLimit_clause = function(ctx) {
};

// Exit a parse tree produced by SQLParser#limit_clause.
SQLParserListener.prototype.exitLimit_clause = function(ctx) {
};


// Enter a parse tree produced by SQLParser#null_ordering.
SQLParserListener.prototype.enterNull_ordering = function(ctx) {
};

// Exit a parse tree produced by SQLParser#null_ordering.
SQLParserListener.prototype.exitNull_ordering = function(ctx) {
};


// Enter a parse tree produced by SQLParser#insert_statement.
SQLParserListener.prototype.enterInsert_statement = function(ctx) {
};

// Exit a parse tree produced by SQLParser#insert_statement.
SQLParserListener.prototype.exitInsert_statement = function(ctx) {
};

return SQLParserListener;

};
