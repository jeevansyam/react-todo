import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Back from './Back';

const UserAlbums = () => {
    const [albums, setAlbums] = useState([]);
    const [filteredAlbums, setFilteredAlbums] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();
    
    
    useEffect ( ()=> {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(json => {
            setAlbums(json)
            const filter = json.filter ( al => (
                al.userId === parseInt(id,10)
            )
            )
            setFilteredAlbums(filter)
        })
        .catch(err => `Error: ${err}`)
    },[id])
  return (
    <div className='todo-container'>
        <Back />
        <h2>User Albums</h2>
        <ul className='albumsUl'>
            {
                filteredAlbums &&
                filteredAlbums.map( album => (
                    
                        <li key={album.id}>
                           
                            <Link to={`/users/${id}/albums/${album.id}`}>{album.title}</Link></li>
                    
                ))
            }
        </ul>
    </div>
  )
}

export default UserAlbums