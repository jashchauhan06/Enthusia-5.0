import { chmod } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const vitePath = join(__dirname, 'node_modules', '.bin', 'vite');

try {
  await chmod(vitePath, 0o755);
  console.log('✓ Vite permissions fixed');
} catch (error) {
  // Ignore errors on Windows or if file doesn't exist
  console.log('→ Skipping permission fix (not needed on this platform)');
}
