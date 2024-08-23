import React from 'react'
import { Carousel } from 'react-responsive-carousel';

const data = [
    {
        img : "/images/1-jpg.jpg"
    },
    {
        img : "/images/2-jpg.jpg"
    },
    {
        img : "/images/3-jpg.jpg"
    },
    {
        img : "/images/5-jpg.jpg"
    }
]
const Home = () => {
  return (
    <Carousel 
    autoPlay={true}
        transitionTime={2}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
>
        
        {
        
            data.map((car)=>(
                <div>
                <img src = {car.img} style={{height:"800px" }} />
                </div>
            ))
        }

</Carousel>
  )
}

export default Home

