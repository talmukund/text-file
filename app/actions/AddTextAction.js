// @flow
import writeToFile from '../utils/Utils';

export const ADD_TO_FILE = 'ADD_TO_FILE';

export async function addToFile(text: string) {
  await writeToFile(text);
  return {
    type: ADD_TO_FILE,
    payload: text
  };
}
