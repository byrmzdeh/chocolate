import React, { useContext } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { LangContext } from '../context/LangContext'

const Footer = () => {
  const [lang,setLang]=useContext(LangContext)
  return (

    <footer >
      <Container>
        <Row>
          <div className="col-md-4 mt-5  " >
            <a href="#" className="nav-link p-0 mt-5 "><img src="http://crems.like-themes.com/wp-content/uploads/2019/06/logo_1x_white-1.png" alt="" /></a>
            <p className='text-white  pt-5'>{lang==='en'? 'You can refer to several': 'İnternetdən qoşulmaq üçün '}<br />
            {lang==='en'? 'websites below to connect': 'aşağıdakı bir neçə vebsayta '}<br />
            {lang==='en'? ' from the Internet.': 'müraciət edə bilərsiniz.'}</p>
            <div className='footer-icon d-flex align-items-center justify-content-evenly  mt-5' style={{ width: "123px" }}>
              <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="https://www.youtube.com/watch?v=-bdp9KYg_Vs&t=19s"><i className="fa-brands fa-youtube"></i></a></li>
            </div>
          </div>


          <div className="col-md-4 mt-5 ">
            <h5 className='pt-5' style={{ color: "#c19f5f" }}>{lang==='en'? 'Explore': 'Araşdırın'}</h5>
            
            <div className='phone d-flex mt-5'>
              <a href="#"><i className="fa-solid fa-phone"></i></a>
              <div>
                <ul>
                  <li><a href="#" style={{ color: "#c19f5f" }}>{lang==='en'? 'PHONE:': 'TELEFON:'}</a></li>
                  <li><a href="#">+49078-039-23-11</a></li>
                </ul>
              </div>
            </div>

            <div className='phone d-flex'>
              <a href="#"><i className="fa-solid fa-location-dot"></i></a>
              <div>
                <ul>
                  <li><a href="#" style={{ color: "#c19f5f" }}>{lang==='en'? 'OUR LOCATION:': 'ÜNVANIMIZ'} </a></li>
                  <li><a href="#">{lang==='en'? '975 Liberty Ave, Union, NJ 07083, USA': '975 Liberty Ave, Union, NJ 07083, ABŞ'}</a></li>
                </ul>
              </div>
            </div>

            <div className='phone d-flex'>
              <a href="#"><i className="fa-regular fa-envelope"></i></a>
              <div>
                <ul>
                  <li><a href="#" style={{ color: "#c19f5f" }}>EMAIL:</a></li>
                  <li><a href="#">crems@like-themes.com</a></li>
                </ul>
              </div>
            </div>

          </div>


          <div className="col-md-4 mt-5">
            <h5 className='pt-5' style={{ color: "#c19f5f" }}>{lang==='en'? 'Latest Posts': 'Ən Son Mesajlar'}</h5>

            <div className='craft d-flex mt-5'>
              <img src="http://crems.like-themes.com/wp-content/uploads/2019/06/blog_01-140x140.jpg" style={{ width: "80px" }} alt="" />
              <ul>
                <li><a href="#" style={{ color: "#c19f5f" }}>{lang==='en'? 'CRAFT FOOD ': 'USTA YEMƏKLƏRİ'}</a></li>
                <li><a href="#">{lang==='en'? 'Rent of Equipment for Pastry Shops ': 'Şirniyyat sexləri üçün avadanlıqların icarəsi'}</a></li>
              </ul>
            </div>

            <div className='craft d-flex mt-5'>
              <img src="http://crems.like-themes.com/wp-content/uploads/2019/06/blog_02-140x140.jpg" style={{ width: "80px" }} alt="" />
              <ul>
                <li><a href="#" style={{ color: "#c19f5f" }}> {lang==='en'? 'CRAFT DRİNK': 'USTA İÇKİ'}</a></li>
                <li><a href="#">{lang==='en'? 'Rental of equipment for liquor stores': 'İçki dükanları üçün avadanlıqların icarəsi'}</a></li>
              </ul>
            </div>


          </div>

        </Row>
      </Container>



    </footer>






  )
}

export default Footer
