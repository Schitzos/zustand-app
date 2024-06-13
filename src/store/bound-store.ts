import { create } from 'zustand'
import { createCounterSlice, CounterSlice } from './Counter-Slice/counter-slice'

type StoreState = CounterSlice 

export const useBoundStore = create<StoreState>((...a) => ({
    ...createCounterSlice(...a),
}))

