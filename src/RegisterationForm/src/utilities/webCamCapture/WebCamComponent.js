import React, { Component, useState } from 'react';
import {TbCapture,TbReload} from "react-icons/tb";

import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user"
};

const WebcamCapture = () => {
    const [image,setImage]=useState('');  
const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
    },

    [webcamRef]
  );

  return (
    <>
    <div className="webcam-container">
    {image==''? <Webcam
        audio={false}
        height={200}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={220}
        videoConstraints={videoConstraints}
      />:<img src={image}/>}
      <div>
{image!=''?

<TbReload color='red' size='30'onClick={(e)=>

{

e.preventDefault();

setImage('')

}}

className="webcam-btn"/>:

<TbCapture size="30"color='blue' onClick={(e)=>{

e.preventDefault();

capture();

}}

className="webcam-btn"/>

}
</div>
</div>
</>
  );
};
export default WebcamCapture;