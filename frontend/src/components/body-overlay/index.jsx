import video from '../../assets/images/video5.mp4';

function BodyOverlay() {
    return (
        <video className='body-overlay' muted autoPlay loop>
            <source src={video} type="video/mp4" />
        </video>
    );
}

export default BodyOverlay;

