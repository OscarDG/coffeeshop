
import '../css/home_video.css'

function HomeVideo(){
    return(
        <div className="home-video--section">
            <div className='video-container'>
                <video controls>
                    <source url='https://www.youtube.com/watch?v=PAKFzFqJa58&list=RDPAKFzFqJa58&start_radio=1' type='video/mpg'/>
                </video>
            </div>
            <h2 className='video-text'>Un café con conciencia social</h2>
        </div>
    );
};

export default HomeVideo