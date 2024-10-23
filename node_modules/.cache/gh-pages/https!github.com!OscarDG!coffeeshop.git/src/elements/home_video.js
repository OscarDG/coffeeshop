
import '../css/home_video.css'

function HomeVideo(){
    return(
        <div className="home-video--section">
            <div className='video-container'>
                <video controls>
                    <source url='https://www.youtube.com/watch?v=PAKFzFqJa58&list=RDPAKFzFqJa58&start_radio=1' type='video/mpg'/>
                </video>
            </div>
            <h2 className='video-title'>Un café con conciencia social</h2>
            <p className='video-text'>Aenean pharetra convallis tellus quis aliquet. Phasellus blandit rhoncus erat quis ornare. Morbi ligula tellus, pellentesque et vehicula eu, pharetra non diam. Nam pulvinar vehicula lobortis. Duis sit amet suscipit tortor, nec rutrum nibh. Nullam a lacus tellus. Mauris id urna vitae lorem scelerisque rutrum nec vitae purus. Praesent id magna nec lacus feugiat luctus a ut dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
            <a className='blue-cta' href='/'>Nuestra Historia</a>
        </div>
    );
};

export default HomeVideo