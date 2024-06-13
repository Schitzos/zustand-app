import { StateCreator } from 'zustand'

type CounterState = {
  counter: number
}

type CounterActions = {
    setCounter: (counter: CounterState['counter']) => void
    resetCounter: () => void
}

export type CounterSlice = CounterState & CounterActions

const initialCounter: CounterState['counter'] = 1

export const createCounterSlice: StateCreator<CounterSlice> = (set) => ({
  counter: initialCounter,
  setCounter: (counter: number) => set(() => ({ counter })),
  resetCounter: (): void => set(() => ({ counter: initialCounter })),
})


