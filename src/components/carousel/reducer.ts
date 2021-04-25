import { images } from 'utils/images'
import mod from 'utils/mod'

export type State = {
  index: number
  nextIndex: number
  direction?: 'next' | 'prev'
}

export const initialState: State = {
  index: 0,
  nextIndex: 0,
  direction: undefined,
}

export enum ActionType {
  NEXT = 'NEXT',
  PREV = 'PREV',
  UPDATE = 'UPDATE',
}

type NextAction = {
  type: ActionType.NEXT
}

type PrevAction = {
  type: ActionType.PREV
}

type UpdateAction = {
  type: ActionType.UPDATE
}

export type Action = NextAction | PrevAction | UpdateAction

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.NEXT: {
      return {
        index: state.nextIndex,
        nextIndex: mod(state.nextIndex + 1, images.length),
        direction: 'next',
      }
    }

    case ActionType.PREV: {
      return {
        index: state.nextIndex,
        nextIndex: mod(state.nextIndex - 1, images.length),
        direction: 'prev',
      }
    }

    case ActionType.UPDATE: {
      return {
        ...state,
        index: state.nextIndex,
        direction: undefined,
      }
    }

    default: {
      return state
    }
  }
}
