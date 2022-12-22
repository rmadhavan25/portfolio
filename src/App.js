
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/header';
import Work from './components/work/Work';

function App() {
  return (
    <div>
      <Header></Header>
      <section id="About">
        <About img={require("E:/portfolio/src/assets/take-off.png")}></About>
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
