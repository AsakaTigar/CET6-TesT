#!/usr/bin/env node
/** List exam papers — no Kiro API, run: node scripts/list_exams.js */
const fs = require('fs');
const code = fs.readFileSync(require('path').join(__dirname, '../模拟考试/questions.js'), 'utf8')
  .replace('const EXAMS', 'var EXAMS');
eval(code);
EXAMS.forEach((p, i) => {
  const head = (p.translation && p.translation.text || '').slice(0, 16);
  const yr = p.meta && p.meta.year ? `[${p.meta.year}] ` : '';
  console.log(
    `${yr}[#${i}] id=${p.id} name=${p.name} theme=${p.theme} | trans.source=${p.translation && p.translation.source} | trans.head=${head}`
  );
});
console.log(`\nTotal: ${EXAMS.length} papers`);
