export enum NameActionTypes {
  TOGGLE_VISIBILITY = "TOGGLE_VISIBILITY" 
}

export interface ToggleVisibilityAction {
  type: NameActionTypes.TOGGLE_VISIBILITY
  payload: { isNameVisible: boolean }
}

export const toggleVisibility: (isNameVisible: boolean) => ToggleVisibilityAction = (isNameVisible: boolean) => ({
  type: NameActionTypes.TOGGLE_VISIBILITY,
  payload: {isNameVisible}
})

export type Action = ToggleVisibilityAction