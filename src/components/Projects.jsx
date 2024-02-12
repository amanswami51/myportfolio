import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assests/data.json"

function Projects() {
  return (
    <div id='projects'>
      <Carousel showStatus={false} showThumbs={false} showIndicators={false} showArrows={true} infiniteLoop={true}>
        {
          data.projects.map((x)=>{
            return <div className='projects__div' key={x.title}>
              <h1>{x.title}</h1>
              <h5>{x.date}</h5>
              <p>{x.technologies}</p>
              <p>{x.description}</p>
              {x.url && <a href={x.url} target='blank'><button>Visit</button></a>}
              {x.gitlink && <a href={x.gitlink} target='blank'><button>GitHub</button></a>}
            </div>
          })
        }
      </Carousel>
    </div>
  )
}

export default Projects
