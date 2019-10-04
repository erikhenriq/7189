import { Action } from '@ngrx/store';

export enum ActionTypes {
  Add = 'ADD',
  Remove = 'REM',
  Clear = 'CLE',
}

export const Add = (product: any) => {
  return { type: ActionTypes.Add, payload: product } as Action;
};

export const Remove = (product: any) => {
  return { type: ActionTypes.Remove, payload: product } as Action;
};

export const Clear = () => {
  return { type: ActionTypes.Clear, payload: null } as Action;
};
