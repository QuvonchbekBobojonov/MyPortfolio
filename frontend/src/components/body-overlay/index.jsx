import { useMemo } from 'react';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';
import video4 from '../../assets/video4.mp4';
import video5 from '../../assets/video5.mp4';

const videos = [video1, video2, video3, video4, video5];

function BodyOverlay() {
    const randomVideo = useMemo(() => {
        const index = Math.floor(Math.random() * videos.length);
        return videos[index];
    }, []);

    return (
        <video
            className="body-overlay"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
        >
            <source src={randomVideo} type="video/mp4" />
            Sizning brauzeringiz video tagni qo‘llab-quvvatlamaydi.
        </video>
    );
}

export default BodyOverlay;
