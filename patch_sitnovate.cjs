const fs = require('fs');
const path = 'public/sitnovate-app/assets/index-CFGrlOPU.js';

try {
    let content = fs.readFileSync(path, 'utf8');

    // Exact target string identified from debug_out.txt
    const targetStr = 'linkedin:"https://www.linkedin.com/in/jashchauhan06/"}]';
    const idx = content.indexOf(targetStr);

    if (idx === -1) {
        console.error('Target string NOT FOUND. Aborting.');
        process.exit(1);
    }

    console.log(`Found target string at index ${idx}. Applying patch...`);

    // Append new members
    // Note: Reconstructing the array closure ']' at the end
    const newMembers = `,{text:\`Saksham Wadhankar\nWeb Developer\`,image:"/sitnovate-app/assets/images/Team/sakshamwadhankar.webp",linkedin:"https://www.linkedin.com/in/saksham-wadhankar"},{text:\`Om Rai\nWeb Developer\`,image:"/sitnovate-app/assets/images/Team/OmRai.webp",linkedin:"https://www.linkedin.com/in/om-rai-07a368377/"}`;

    // Replace the closing sequence with: closing sequence + new members (inserted before ']')
    // Target ends with '}]'. We want '}, {new}, {new}]'.
    // So replace '}]' with '}' + newMembers + ']'.

    const replacement = 'linkedin:"https://www.linkedin.com/in/jashchauhan06/"}' + newMembers + ']';

    const newContent = content.replace(targetStr, replacement);

    fs.writeFileSync(path, newContent, 'utf8');
    console.log('Successfully patched index-CFGrlOPU.js with new team members.');

} catch (e) {
    console.error('Error applying patch:', e);
    process.exit(1);
}
