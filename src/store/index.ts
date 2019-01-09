import {nameReducer, NameVisibilityState} from "../reducers/name"
import { Store, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { drawerReducer, DrawerState } from "../reducers/drawer";

export interface AppState {
  readonly nameVisibility: NameVisibilityState
  readonly drawer: DrawerState
}

const reducer = combineReducers<AppState>({
  nameVisibility: nameReducer,
  drawer: drawerReducer
})

export function configureStore(initialState: AppState): Store<AppState> {
  const composeEnhancer = composeWithDevTools({})
  const store = createStore(reducer, initialState, composeEnhancer())
  return store
}