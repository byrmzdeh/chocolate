import React from 'react'
import img from '../picture/point.png'


const SingleCard = ({id, photo, title, desc}) => {
  return (
   
        <div className='col-md-3 col-12  d-flex align-items-center justify-content-center ' >
            <img className='bg mb-5' src={img} alt="err" />
            <div className="chocolate position-absolute  ">
              <div className="pic">
                <a href="#"><img width={200} src={photo} alt="err" /></a>
              </div>
              <div className='box d-flex align-items-center justify-content-center flex-column'>
                <a href="#" className='mt-3'><h5>{title}</h5></a>
                <p className='mt-3'>{desc}</p>
              </div>
            </div>
          </div>
   
  )
}

export default SingleCard