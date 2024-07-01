import React from 'react';
import './../assets/css/popup.css'

const PhotoPopup = ({src, onClose}) => {
    const closeHandle = () => {
        onClose(false)
    }
  return (
    <div className='popup'>
        <div className='popupBox'>
            <div className="close" onClick={closeHandle}></div>
                <img src={src} alt="" />
        </div>
        <div className="overlay"></div>
    </div>
  )
}

export default PhotoPopup