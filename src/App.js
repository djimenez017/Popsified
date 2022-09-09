import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <h1>Welcome to Posified</h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
