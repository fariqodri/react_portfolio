export enum DrawerActionTypes {
  TOGGLE_DRAWER = "TOGGLE_DRAWER"
}

export interface ToggleDrawerAction {
  type: DrawerActionTypes.TOGGLE_DRAWER
  payload: { isDrawerOpen: boolean }
}

export const toggleDrawer: (isDrawerOpen: boolean) => ToggleDrawerAction = (isDrawerOpen: boolean) => ({
  type: DrawerActionTypes.TOGGLE_DRAWER,
  payload: {isDrawerOpen}
})

export type Action = ToggleDrawerAction