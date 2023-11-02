import "./App.css";
import NavBar from "./Components/NavBar.tsx";
import SearchBar from "./Components/SearchBar.tsx";
import UserDetails from "./Components/UserDetails.tsx";
import TextContent from "./Components/TextContent.tsx";
import GithubIcon from "./Components/GithubIcon.tsx";

function App() {
  return (
    <div className="app">
      <NavBar />

      <main>
        <h1>Blog Delux</h1>
        <SearchBar />
      </main>

      <section>
        <UserDetails />
        <TextContent />
      </section>
      <section>
        <UserDetails />
        <TextContent />
      </section>

      <section>
        <UserDetails />
        <TextContent />
      </section>
      <footer>
        <p>Modul D</p>
        <GithubIcon />
      </footer>
    </div>
  );
}

export default App;
