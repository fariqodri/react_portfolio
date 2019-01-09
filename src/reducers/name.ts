import {NameActionTypes, Action} from "../actions/name"

export interface NameVisibilityState {
  isNameVisible: boolean
}

export const initState: NameVisibilityState = {
  isNameVisible: true
}

export function nameReducer(state: NameVisibilityState = initState, action: Action): NameVisibilityState {
  switch (action.type) {
    case NameActionTypes.TOGGLE_VISIBILITY: {
      return {
        ...state,
        isNameVisible: action.payload.isNameVisible
      }
    }
    default: {
      return state
    }
  }
}