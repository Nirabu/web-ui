import * as React from "react";

const VideoContainer: React.FC = () => {
    return (
        <div className='boxContent__video'>
            <div className='embed-container'>
                <iframe
                    width="560"
                    height="315" src="https://www.youtube.com/embed/dx3GxpitvbY"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
};

export default VideoContainer;
