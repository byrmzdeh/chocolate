import React, { useState } from 'react'

const CustomAlert = ({text}) => {

    const [alertClass,setAlertClass] = useState("alert-active");

    setTimeout(()=>{
        setAlertClass("");
    }, 10000)


  return (
    <div className={`custom-alert-container ${alertClass} `} >
        <div className="main-box d-flex align-items-center justify-content-center flex-column">
            <div className="img-box ">
                <img width={370} src="http://crems.like-themes.com/wp-content/uploads/2019/06/404_crems.png" alt="" />
            </div>

            <div className="text-box">
                <p >{text}</p>
            </div>

            <button className='btn btn-close bg-white' id='closeBtn' onClick={()=> setAlertClass("")}></button>
        </div>
    </div>
  )
}

export default CustomAlert