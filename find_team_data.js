const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Since glob might not be installed in the root node_modules, we can try to use a simple recursive directory search
// or assume we are in an environment where we can just read the specific directory if we know it.
// simpler: just read the known directory public/sitnovate-app/assets

const searchDir = path.join(__dirname, 'public', 'sitnovate-app', 'assets');

try {
    const files = fs.readdirSync(searchDir).filter(f => f.endsWith('.js'));
    const targets = ["Abhani", "Raipurkar", "Team"];

    console.log(`Searching in ${searchDir}...`);

    files.forEach(file => {
        const filePath = path.join(searchDir, file);
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            let found = false;

            targets.forEach(t => {
                if (content.includes(t)) {
                    if (!found) {
                        console.log(`\n--- Found matches in ${file} ---`);
                        found = true;
                    }
                    console.log(`MATCH: '${t}'`);
                    const idx = content.indexOf(t);
                    const start = Math.max(0, idx - 300);
                    const end = Math.min(content.length, idx + 800);
                    console.log(`CONTEXT wrapped: ...${content.slice(start, end)}...`);
                }
            });
        } catch (err) {
            console.error(`Error reading ${file}: ${err.message}`);
        }
    });
} catch (err) {
    console.error(`Error reading directory: ${err.message}`);
}
