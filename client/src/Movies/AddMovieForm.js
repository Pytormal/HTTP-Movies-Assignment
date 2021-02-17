import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const initialState = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: '',
}

const AddMovieForm = props => {
    const [addMovie,setAddMovie] = useState(initialState)
}