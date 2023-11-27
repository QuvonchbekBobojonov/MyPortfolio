// import video1 from '../../assets/video1.mp4';
// import video2 from '../../assets/video2.mp4';
// import video3 from '../../assets/video3.mp4';
// import video4 from '../../assets/video4.mp4';
import video5 from '../../assets/video5.mp4';

function BodyOverlay() {
    return (
        <video className='body-overlay' muted autoPlay loop>
            <source src={video5} type="video/mp4" />
        </video>
    );
}

export default BodyOverlay;

