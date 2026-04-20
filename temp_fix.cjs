const fs = require('fs');
const path = 'src/pages/CaseStudyDetail.tsx';
let content = fs.readFileSync(path, 'utf8');

// Fix the corrupted lines with precise replacement
const target1 = /<div className="absolute top-0 left-1\/2 -translate-x-1\/2 -translate-y-1\/2 w-4 h-4 rounded-full \`\$\{isGreenTheme \? .*/;
const replacement1 = '<div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${isGreenTheme ? "bg-emerald-500 shadow-[0_0_15px_#10b981]" : "bg-amber-500 shadow-[0_0_15px_#f59e0b]"}`} />';

const target2 = /<div className="absolute bottom-0 left-1\/2 -translate-x-1\/2 translate-y-1\/2 w-4 h-4 rounded-full \`\$\{!isGreenTheme \? .*/;
const replacement2 = '<div className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full ${!isGreenTheme ? "bg-emerald-500 shadow-[0_0_15px_#10b981]" : "bg-amber-500 shadow-[0_0_15px_#f59e0b]"}`} />';

content = content.replace(target1, replacement1);
content = content.replace(target2, replacement2);

fs.writeFileSync(path, content);
console.log('Fix applied successfully');
