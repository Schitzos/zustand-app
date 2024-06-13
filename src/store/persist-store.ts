import { create } from 'zustand'
import { createUserSlice, UserSlice } from './User-Slice/user-slice'
import { createJSONStorage, persist } from 'zustand/middleware'

type StoreState = UserSlice

export const usePersistStore = create<StoreState>((...a) => ({
    ...persist(createUserSlice, {
        name: "user-store",
        storage: createJSONStorage(() => localStorage),
    })(...a),
}))

