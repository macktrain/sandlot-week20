import './App.css';
import Header from './components/Header'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Portfolio from './views/Portfolio'
import Contact from './views/Contact'
import Resume from './views/Resume'
import {Container} from 'react-bootstrap'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Container className="App">
          <Route path='/' component ={Home} exact/>
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
          <Route path='/resume' component={Resume} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
