import { createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0);
  const increase = () => setCount((prev) => prev + 1);

  return (
    <>
      <main class="flex min-h-screen flex-col items-center justify-evenly bg-gray-900 text-white">
        <button
          onClick={increase}
          class="rounded-md bg-gray-600 px-8 py-4 text-xl"
        >
          {count()}
        </button>
      </main>
    </>
  );
}

export default App;
