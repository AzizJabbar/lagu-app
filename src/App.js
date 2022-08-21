import logo from "./logo.svg";
import "./App.css";
import TopTracks from "./containers/toptracks";
import TopArtists from "./containers/topartists";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />

      <TopTracks />
      <TopArtists />
    </Layout>
  );
}

export default App;
