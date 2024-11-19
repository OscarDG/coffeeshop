import '../css/home_hero.css';

function HomeHero(){
    return(
        <div className="home-hero">
            <div className='hero-text'>
                <h1>Café cultivado por manos campesinas</h1>
            </div>
            <div className='hero-cta'>
                <a href='#products'>Descubre</a>
            </div>
        </div>
    );
};

export default HomeHero