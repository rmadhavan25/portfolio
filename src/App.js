
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/header';
import Work from './components/Work';

function App() {
  return (
    <div>
      <Header></Header>
      <section id="About">
        <About></About>
      </section>
      <section id='Work'>
        <Work></Work>
      </section>
      <section id="Contact">
        <Contact></Contact>
      </section>
    </div>

  );
}

export default App;
