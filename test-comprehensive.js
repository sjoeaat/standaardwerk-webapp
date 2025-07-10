import fs from 'fs';
import { FlexibleParser } from './src/core/FlexibleParser.js';
import { DEFAULT_VALIDATION_RULES } from './src/config/validationRules.js';

const text = fs.readFileSync('./test-comprehensive.txt', 'utf8');
const parser = new FlexibleParser({}, DEFAULT_VALIDATION_RULES);
const result = parser.parse(text);

console.log('🎯 COMPREHENSIVE TEST RESULTS:');
console.log('=====================================');
console.log('✅ Steps found:', result.steps.length);
console.log('✅ Variables found:', result.variables.length);
console.log('✅ Conditions found:', result.conditions.length);
console.log('✅ Cross-references found:', result.crossReferences.length);
console.log('❌ Errors:', result.errors.length);
console.log('⚠️  Warnings:', result.warnings.length);

if (result.errors.length > 0) {
  console.log('\n🔴 ERRORS:');
  result.errors.forEach((error, i) => {
    console.log(`  ${i+1}. ${error.message} (line ${error.lineNumber})`);
  });
}

if (result.warnings.length > 0) {
  console.log('\n🟡 WARNINGS:');
  result.warnings.forEach((warning, i) => {
    console.log(`  ${i+1}. ${warning.message} (line ${warning.lineNumber})`);
  });
}

console.log('\n📋 STEPS PARSED:');
result.steps.forEach((step, i) => {
  console.log(`  ${i+1}. ${step.type} ${step.number}: ${step.description}`);
  if (step.conditions && step.conditions.length > 0) {
    console.log(`     Conditions: ${step.conditions.length}`);
  }
});

console.log('\n📝 VARIABLES PARSED:');
result.variables.forEach((variable, i) => {
  console.log(`  ${i+1}. ${variable.name} = ${variable.value || '(empty)'} [${variable.group || 'unknown'}]`);
});

console.log('\n🔗 CROSS-REFERENCES:');
result.crossReferences.forEach((ref, i) => {
  console.log(`  ${i+1}. ${ref.program} SCHRITT ${ref.steps.join('+')}`);
});

console.log('\n📊 STATISTICS:');
console.log(`  RUST steps: ${result.steps.filter(s => s.type === 'RUST').length}`);
console.log(`  SCHRITT steps: ${result.steps.filter(s => s.type === 'SCHRITT').length}`);
console.log(`  KLAAR steps: ${result.steps.filter(s => s.type === 'KLAAR').length}`);
console.log(`  Total conditions: ${result.conditions.length}`);
console.log(`  OR conditions: ${result.conditions.filter(c => c.operator === 'OR').length}`);
console.log(`  AND conditions: ${result.conditions.filter(c => c.operator === 'AND').length}`);
console.log(`  Variables with assignments: ${result.variables.filter(v => v.value).length}`);

console.log('\n🎉 COMPREHENSIVE TEST COMPLETE!');
console.log('=====================================');