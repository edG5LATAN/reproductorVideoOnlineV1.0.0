import React from 'react'
import './Reproductor.css'

function Reproductor() {
  return (
    <div className="reproductor_video mb-5">
        <p>video numero 3</p>
       
        <iframe
          width="100%"
          height="100%"
          className="iframe_video"
          src="https://www.youtube.com/embed/I5exsScaHWo?si=XV88UenV8sUjaX1Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
  )
}

export default Reproductor
