import { Header, Main, Footer, Three } from "./components/index";

function App() {
  return (
    <div className="bg-pw dark:bg-pb min-h-screen text-xl text-black dark:text-white pt-16">
      <Header />
      <Three />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
