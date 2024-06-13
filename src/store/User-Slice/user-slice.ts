import { State, StateCreator } from 'zustand'

type UserState = {
  firstName: string
  lastName: string
}

type CounterActions = {
  setFirstName: (counter: UserState['firstName']) => void
  setLastName: (counter: UserState['lastName']) => void
  resetUser: () => void
}

export type UserSlice = UserState & CounterActions

const initialState: UserState = {
  firstName: '-',
  lastName: '-',
}

export const createUserSlice:StateCreator<UserSlice>  = (set) => ({
  ...initialState,
  setFirstName: (firstName) => set(() => ({ firstName: firstName })),
  setLastName: (lastName) => set(() => ({ lastName: lastName })),
  resetUser: () => set(() => ({ ...initialState })),
})

