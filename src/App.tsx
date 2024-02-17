import AccordeonsSection from "./components/AccordeonsSection";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

function App() {
  return (
    <>
      <header className="header">
        <Title />
        <Subtitle />
      </header>
      <main>
        <AccordeonsSection />
      </main>
    </>
  );
}

export default App;
