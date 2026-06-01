const fs = require('fs');
const code = fs.readFileSync('F:/六级/模拟考试/questions.js', 'utf8').replace('const EXAMS', 'var EXAMS');
eval(code);
const out = EXAMS.map(e => ({
  id: e.id,
  name: e.name,
  year: e.meta.year,
  session: e.meta.session,
  set: e.meta.set,
  cn: e.translation.text,
  ref: e.translation.reference,
  hasRef: !(e.translation.reference || '').startsWith('（'),
}));
fs.writeFileSync('F:/六级/分析结果/_papers_export.json', JSON.stringify(out, null, 2));
console.log('exported', out.length, 'missing', out.filter(x => !x.hasRef).length);
