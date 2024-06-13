'use client'
import { usePersistStore } from "@/store/persist-store";

export default function CurrentName() {
  const firstName = usePersistStore((state) => state.firstName)
  const lastName = usePersistStore((state) => state.lastName)
  
  console.log('render name value')

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 shadow-lg rounded-lg max-w-md mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">User Information</h1>
      <div className="text-lg mb-2">
        <span className="font-semibold">First Name: </span>
        <span className="text-blue-600">{firstName}</span>
      </div>
      <div className="text-lg">
        <span className="font-semibold">Last Name: </span>
        <span className="text-blue-600">{lastName}</span>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={()=>usePersistStore.getState().resetUser()}>
        Reset User
      </button>
    </div>
  )
}
