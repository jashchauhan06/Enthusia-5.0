const fs = require('fs');
const path = 'public/sitnovate-app/assets/index-CFGrlOPU.js';

try {
    let content = fs.readFileSync(path, 'utf8');
    const name = 'Jash Chauhan';
    const idx = content.indexOf(name);

    if (idx === -1) {
        console.error('Jash Chauhan not found!');
    } else {
        console.log('--- CONTEXT START ---');
        // Print enough characters to capture the full object end
        console.log(content.slice(idx, idx + 800));
        console.log('--- CONTEXT END ---');
    }
} catch (e) {
    console.error(e);
}
