/* eslint-disable react/no-unescaped-entities */
import "./index.css";
import Navbar from "./NavBar";
import ProductPage from "./productPage";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        <ProductPage />
      </main>
    </div>
  );
}

export default App;
