import { createSignal } from "solid-js";
import { Board } from "./Board";

export function Layout() {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount((prev) => prev + 1);

  return (
    <main class="flex h-screen flex-row items-center justify-around gap-2 bg-gray-900 p-2 text-white">
      <button
        onClick={increment}
        class="rounded-md bg-gray-600 px-8 py-4 text-xl"
      >
        {count()}
      </button>
      <Board />
    </main>
  );
}
