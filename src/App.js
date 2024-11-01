import './css/App.css';
import './css/home_hero.css';
import { Footer } from './elements/footer';
import HomeHero from './elements/home_hero';
import HomeVideo from './elements/home_video';
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
      <section className='home-video--wrapp'>
        <HomeVideo />
      </section>
      <section className='home-clients'>
      </section>
      <footer className='home-footer--wrap'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
