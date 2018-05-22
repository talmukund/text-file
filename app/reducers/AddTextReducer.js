// @flow
import { ADD_TO_FILE } from '../actions/AddTextAction';

export type counterStateType = {
  +counter: number
};

type actionType = {
  +type: string
};

export default function counter(state: string = '', action: actionType) {
  console.log(action.payload);
  switch (action.type) {
    case ADD_TO_FILE:
      return `${state} ${action.payload}`;
    default:
      return state;
  }
}
