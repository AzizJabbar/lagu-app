import logo from "./logo.svg";
import "./App.css";
import TopTracks from "./containers/toptracks";
import TopArtists from "./containers/topartists";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <TopTracks />
      <TopArtists />
    </Layout>
  );
}

export default App;
