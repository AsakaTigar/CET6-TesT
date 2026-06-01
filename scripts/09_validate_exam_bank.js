#!/usr/bin/env node
/** Validate questions.js — run: node scripts/09_validate_exam_bank.js */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, '分析结果', '_exam_validation.json');

const code = fs.readFileSync(path.join(ROOT, '模拟考试/questions.js'), 'utf8')
  .replace('const EXAMS', 'var EXAMS');
eval(code);

const errors = [];
const warnings = [];

for (const e of EXAMS) {
  const ref = (e.translation && e.translation.reference) || '';
  if (!ref || ref.startsWith('（') || ref.length < 80) {
    errors.push({ id: e.id, name: e.name, type: 'missing_reference', msg: 'translation.reference missing or placeholder' });
  }
  const dirs = (e.writing && e.writing.directions) || '';
  if (/Listening\s+Comprehension/i.test(dirs)) {
    errors.push({ id: e.id, name: e.name, type: 'dirty_writing', msg: 'writing.directions contains Listening Comprehension' });
  }
  if (/Section\s+A\s*\n\s*Directions:\s*In\s+this\s+section,\s*you\s+will\s+hear/i.test(dirs)) {
    errors.push({ id: e.id, name: e.name, type: 'dirty_writing', msg: 'writing.directions contains listening Section A' });
  }
  if (/Questions\s+1\s+to\s+4\s+are\s+based/i.test(dirs)) {
    errors.push({ id: e.id, name: e.name, type: 'dirty_writing', msg: 'writing.directions contains listening questions' });
  }
  const cn = (e.translation && e.translation.text) || '';
  const cnChars = (cn.match(/[\u4e00-\u9fff]/g) || []).length;
  if (cnChars < 40) {
    warnings.push({ id: e.id, name: e.name, type: 'short_translation', msg: `translation cn only ${cnChars} chars` });
  }
  if (e.reading && e.reading._source === 'template') {
    warnings.push({ id: e.id, name: e.name, type: 'template_reading', msg: 'reading from template fallback' });
  }
  if (e.listening && e.listening._source === 'template') {
    warnings.push({ id: e.id, name: e.name, type: 'template_listening', msg: 'listening from template fallback' });
  }
}

const report = {
  ts: new Date().toISOString(),
  total: EXAMS.length,
  errors: errors.length,
  warnings: warnings.length,
  items: { errors, warnings },
};
fs.writeFileSync(OUT, JSON.stringify(report, null, 2), 'utf8');

console.log(`papers=${EXAMS.length} errors=${errors.length} warnings=${warnings.length}`);
console.log(`report -> ${OUT}`);
if (errors.length) {
  errors.slice(0, 10).forEach(x => console.log(`  ERROR [${x.id}] ${x.name}: ${x.msg}`));
  process.exit(1);
}
process.exit(0);
