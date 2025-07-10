import fs from 'fs';
import { FlexibleParser } from './src/core/FlexibleParser.js';
import { DEFAULT_VALIDATION_RULES } from './src/config/validationRules.js';

const text = fs.readFileSync('./test-validation.txt', 'utf8');
const parser = new FlexibleParser({}, DEFAULT_VALIDATION_RULES);
const result = parser.parse(text);

console.log('🎯 Parsing Result:');
console.log('✅ Steps found:', result.steps.length);
console.log('✅ Variables found:', result.variables.length);
console.log('❌ Errors:', result.errors.length);
console.log('⚠️  Warnings:', result.warnings.length);

if (result.errors.length > 0) {
  console.log('\n🔴 Errors:');
  result.errors.forEach((error, i) => {
    console.log(`  ${i+1}. ${error.message} (line ${error.lineNumber})`);
  });
}

if (result.warnings.length > 0) {
  console.log('\n🟡 Warnings:');
  result.warnings.forEach((warning, i) => {
    console.log(`  ${i+1}. ${warning.message} (line ${warning.lineNumber})`);
  });
}

console.log('\n📋 Steps:');
result.steps.forEach((step, i) => {
  console.log(`  ${i+1}. ${step.type} ${step.number}: ${step.description}`);
});

console.log('\n📝 Variables:');
result.variables.forEach((variable, i) => {
  console.log(`  ${i+1}. ${variable.name} = ${variable.value}`);
});