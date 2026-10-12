import { mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

export async function ensureDirectory(directory) {
  await mkdir(directory, { recursive: true });
}

export async function removeGeneratedPath(directory) {
  const resolved = path.resolve(directory);
  const roots = [path.resolve('reports'), path.resolve('test-results')];
  if (!roots.some((root) => resolved === root || resolved.startsWith(`${root}${path.sep}`))) {
    throw new Error(`Refusing to remove path outside generated output roots: ${resolved}`);
  }
  await rm(resolved, { recursive: true, force: true });
}
