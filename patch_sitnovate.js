const fs = require('fs');
const path = 'public/sitnovate-app/assets/index-CFGrlOPU.js';

try {
    let content = fs.readFileSync(path, 'utf8');
    const name = 'Jash Chauhan';
    const idx = content.indexOf(name);

    if (idx === -1) {
        console.error('Jash Chauhan not found!');
        process.exit(1);
    }

    console.log(`Found '${name}' at ${idx}.`);

    // Show context for debugging
    const snippet = content.slice(idx, idx + 400);
    console.log('CONTEXT START:', snippet);

    // Target string: ends with closing brace of the object
    const targetStr = 'linkedin:"https://www.linkedin.com/in/jash-chauhan-2073a0294/"}';
    const targetIdx = content.indexOf(targetStr, idx);

    if (targetIdx === -1) {
        console.error('Exact target string for replacement not found.');

        // Debugging: try to find just the ID part to see what is different
        const partial = '2073a0294';
        const partialIdx = content.indexOf(partial, idx);
        if (partialIdx !== -1) {
            console.log('Found partial ID at', partialIdx);
            console.log('Surrounding text:', content.slice(partialIdx - 50, partialIdx + 50));
        }
        process.exit(1);
    }

    console.log(`Found target string at ${targetIdx}. Applying patch...`);

    // New members to append
    const newMembers = `,{text:\`Saksham Wadhankar\nWeb Developer\`,image:"/sitnovate-app/assets/images/Team/sakshamwadhankar.webp",linkedin:"https://www.linkedin.com/in/saksham-wadhankar"},{text:\`Om Rai\nWeb Developer\`,image:"/sitnovate-app/assets/images/Team/OmRai.webp",linkedin:"https://www.linkedin.com/in/om-rai-07a368377/"}`;

    const replacement = targetStr + newMembers;

    // Use substring replacement to avoid regex special char issues or replaceAll behavior
    const before = content.slice(0, targetIdx);
    const after = content.slice(targetIdx + targetStr.length);
    const newContent = before + replacement + after;

    fs.writeFileSync(path, newContent, 'utf8');
    console.log('Successfully patched.');

} catch (e) {
    console.error('Error:', e);
}
