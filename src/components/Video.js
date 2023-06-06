import React from 'react';

const Video = (props) => {
    return (
        <div>
            <video src={props.src} controls autostart autoPlay muted />
        </div>
    );
};

export default Video;