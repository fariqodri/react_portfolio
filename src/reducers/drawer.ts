import {Action, DrawerActionTypes} from "../actions/drawer"

export interface DrawerState {
  isDrawerOpen: boolean
}

export const initState: DrawerState = {
  isDrawerOpen: false
}

export function drawerReducer(state: DrawerState = initState, action: Action): DrawerState {
  switch (action.type) {
    case DrawerActionTypes.TOGGLE_DRAWER: {
      return {
        ...state,
        isDrawerOpen: action.payload.isDrawerOpen
      }
    }
    default: {
      return state
    }
  }
}