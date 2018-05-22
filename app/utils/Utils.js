// @flow
import * as fs from 'fs';

export default async function writeToFile(text: string): string {
  const filePath = 'C:\\Users\\Mkary\\demofile.txt';
  await fs.writeFileSync(filePath, text);
  return 'data written successfully';
}

