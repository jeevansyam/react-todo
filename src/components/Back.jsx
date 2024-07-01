import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Back = () => {
    const navigate = useNavigate();
    const backHandler = (event) => {
        event.preventDefault();
        navigate(-1)
    }

  return (
    <Link to="#" onClick={backHandler}>  Back</Link>
  )
}

export default Back