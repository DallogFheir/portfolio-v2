import Sections from "./components/Sections";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

function App() {
  return (
    <>
      <header>
        <Title />
        <Subtitle />
      </header>
      <main>
        <Sections />
      </main>
    </>
  );
}

export default App;
