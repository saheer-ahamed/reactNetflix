import React, { useState, useEffect } from 'react'
import './RowPost.css'
import YouTube from 'react-youtube'
import { API_KEY, imgUrl } from '../../../Constants/constants' 
import axios from '../axios'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data)
      setMovies(response.data.results)
    })
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }

  function handleMovies(id){
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if(response.data.results.length !== 0){
        setUrlId(response.data.results[0])
      }else{
        setUrlId('')
      }
    })
  }

  return (
    <div className='row'>
        <h2 className="Title">{props.title}</h2>
        <div className="posters">
          {movies.map((mov) => 
            <img onClick={() => handleMovies(mov.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imgUrl+mov.backdrop_path}`} alt="posters" />
          )}
        </div>
        {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost