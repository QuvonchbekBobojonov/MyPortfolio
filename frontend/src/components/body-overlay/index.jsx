import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';
import video4 from '../../assets/video4.mp4';
import video5 from '../../assets/video5.mp4';

const videos = [
    video1,
    video2,
    video3,
    video4,
    video5
];

function getRandomVideo() {
  const randomIndex = Math.floor(Math.random() * videos.length);
  return videos[randomIndex];
}

function BodyOverlay() {
    // const randomVideo = getRandomVideo();
    return (
        <video className='body-overlay' muted autoPlay loop>
            <source src={getRandomVideo()} type="video/mp4" />
        </video>
    );
}

export default BodyOverlay;

