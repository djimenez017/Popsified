import Header from './components/Header';
import Footer from './components/Footer'
import './App.css';
import {Container} from "react-bootstrap"
 
const App = () => {
  return (
    <div className="App">
      <Header />
        <Container>
          <h1>Welcome to Posified</h1>
        </Container> 
      <Footer />
    </div>
  );
}

export default App;
