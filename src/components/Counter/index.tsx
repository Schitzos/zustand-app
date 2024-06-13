'use client'
import { useBoundStore } from "@/store/bound-store";

export default function Counter() {
    console.log('render counter component')
    const counter = useBoundStore((state) => state.counter)
    const setCounter = useBoundStore((state) => state.setCounter)
    const resetCounter = useBoundStore((state) => state.resetCounter)

    const updateCounter = (val: number) => {
        setCounter(val)
    }

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 shadow-lg rounded-lg max-w-xs mx-auto">
            <div className="flex space-x-4 mb-4">
                <button
                    onClick={() => updateCounter(counter - 1)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                >
                    Decrement
                </button>
                <button
                    onClick={() => updateCounter(counter + 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Increment
                </button>
            </div>
            <button
                    onClick={() => resetCounter()}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Reset
                </button>
        </div>
    );
}
