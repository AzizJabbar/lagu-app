import logo from "./logo.svg";
import "./App.css";
import TopTracks from "./containers/toptracks";
import TopArtists from "./containers/topartists";
import Layout from "./components/layout";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Layout>
      <Helmet>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Helmet>
      <TopTracks />
      <TopArtists />
    </Layout>
  );
}

export default App;
