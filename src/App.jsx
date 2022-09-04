import { Header, Main, Three } from "./components/index";

function App() {
  return (
    <div className="bg-pw dark:bg-pb min-h-screen text-xl text-black dark:text-white pt-16 pb-6">
      <Header />
      <Three />
      <Main />
    </div>
  );
}

export default App;
