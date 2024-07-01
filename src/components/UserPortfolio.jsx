import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Back from './Back';
import PhotoPopup from './PhotoPopup';


const UserPortfolio = () => {
    const [photos, setPhotos] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const {userId, albumId} = useParams();
    const [showPopup, setShowPopup] = useState(false);
    const [imgSrc, setImgSrc] = useState('')

    const imgHandler = (url) => {
        // console.log(e);
        // console.log(e.target.src);
        setImgSrc(url);
        setShowPopup(true)
    }

    const handleClose = (value) => {
        setShowPopup(value);
    }

    useEffect ( ()=> {
        fetch('https://jsonplaceholder.typicode.com/photos/')
        .then(res => res.json())
        .then(json => {
            setPhotos(json)
            const filters = json.filter ( user => (
                user.albumId === parseInt(albumId, 10)
            ))
            setFiltered(filters)
        })
    },[photos])

  return (
    <div className='todo-container'>
        <Back />
        
        <h2>UserPortfolio</h2>
        <ul className='photosUl'>
            {
                filtered.map ( photo => (
                    <li key={photo.id}>
                            <img src={photo.thumbnailUrl} alt={photo.title} onClick={(e)=>imgHandler(photo.url)} />
                    </li>
                ) )
            }
        </ul>
        {showPopup && <PhotoPopup src={imgSrc} onClose={handleClose}  />} 
        </div>
  )
}

export default UserPortfolio