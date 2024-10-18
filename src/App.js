import './css/App.css';
import './css/home_hero.css';
import HomeHero from './elements/home_hero';
import Navbar from './elements/navbar';
import Products from './elements/products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <section className='home-hero--wrapp'>
        <HomeHero />
      </section>
      <section className='home-products--wrapp'>
        <Products />
      </section>
      <section className='home-video'>
      </section>
      <section className='home-clients'>
      </section>
      <footer>
      </footer>
    </div>
  );
}

export default App;
