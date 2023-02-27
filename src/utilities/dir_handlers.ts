import { existsSync } from 'fs';
import { promises as fs } from 'fs';

async function createOutDir(dir: string): Promise<void> {
  if (!existsSync(dir)) {
    await fs.mkdir(dir);
  }
}

export default createOutDir;
