'use client'
import { useBoundStore } from "@/store/bound-store";

export default function CounterValue() {
    console.log('render counter value')

    const counter = useBoundStore((state) => state.counter)
  return (
    <div>
    <h1 className="text-2xl font-bold mb-4">Counter</h1>
    <p className="text-lg mb-6">Current Count: <span className="font-semibold">{counter}</span></p>
    </div>
);
}
