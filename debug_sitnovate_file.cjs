const fs = require('fs');
const path = 'public/sitnovate-app/assets/index-CFGrlOPU.js';

try {
    let content = fs.readFileSync(path, 'utf8');
    const name = 'Jash Chauhan';
    const idx = content.indexOf(name);

    if (idx === -1) {
        console.error('Jash Chauhan not found!');
    } else {
        // Save to file to avoid terminal truncation/interleaving
        fs.writeFileSync('debug_out.txt', content.slice(idx, idx + 800), 'utf8');
        console.log('Saved debug_out.txt');
    }
} catch (e) {
    console.error(e);
}
