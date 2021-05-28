import React from 'react';
import './_video.scss';

import {AiFillEye} from 'react-icons/ai'



const Video = () => {
    return (
         <div className="video">
             <div className="video__top">
                 <img src="https://i.ytimg.com/vi/XAzB5_xp3F0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkyX-cTB3vA44ozIR6gD2CrJVD4A" alt="" />
                 <span>05.23</span>
             </div>
             <div className="video__title">
                 create react app by chintu
             </div>
             <div className="video__details ">
                 <span>
                     <AiFillEye /> 5m view •
                 </span>
                 <span> 5 days ago</span>
             </div>
             <div className="video__channel">
                <img src="https://yt3.ggpht.com/ytc/AAUvwngdP3okXEWSNOV0jPGYSd7ulTVjYg3cJ3ENrvxU5w=s68-c-k-c0x00ffffff-no-rj" alt="" />
                <p>Shoharab Pk</p>
             </div>
         </div>
    );
};

export default Video;