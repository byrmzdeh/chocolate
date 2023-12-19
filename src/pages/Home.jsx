import React, { useContext, useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import img from '../picture/point.png'

import { Card, Container } from 'react-bootstrap'
import { Col, Row } from "react-bootstrap";

import CountUp from 'react-countup';



import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from "swiper/react";

// import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import { Context } from '../context/Context'
import { Link } from 'react-router-dom'
import { LangContext } from '../context/LangContext';
import SingleCard from '../components/SingleCard'
import { useSelector } from 'react-redux'





const Home = () => {
  const [lang, setlang] = useContext(LangContext)
  const [sweet] = useContext(Context)
  const [btn, setBtn] = useState('ADD TO CART')
  const [right, setRight] = useState(<i className="fa-solid fa-arrow-right ms-2"></i>)
  const [iframe, setIframe] = useState()
  const newsData = useSelector(state => state)

  // const [sweet] = useContext(Context)
  // const [catData, setCatData] = useState(sweet)
  // const { addItem } = useCart()

  const [chocolate] = useContext(Context)
  const [data, setData] = useState(chocolate)



  return (
    <div className='home' >


      <section className="one">
        <Header />
      </section>


      <section className='two ' >
        <div className="row row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start mt-5">
            <div className='our ms-5'>
              <h3 ><span >{lang === 'en' ? 'unique sweets ' : 'unikal şirniyyatlar'}</span>{lang === 'en' ? ' for gourmets' :
                ' qurmanlar üçün '}</h3>
              <p className='pt-4'>{lang === 'en' ? 'all kinds of delicious, sweet things' : '"konfetdən, qənnadı məmulatlarından'} <br /> {lang === 'en' ? 'made from candy, confectionery' : 'hər cür dadlı, şirin şeylər”'}</p>
              <p className='download pt-3'  ><i className="fa-regular fa-money-bill-1" style={{ color: '#c19f5f' }}></i><a href="/home" className='ps-3 '>{lang === 'en' ? 'Download Price' : 'Yükləmə qiyməti'}</a></p>
              <a href="/home" className='read pt-3'>{lang === 'en' ? 'Read More' : 'Daha çox '} <i className="fa-solid fa-arrow-right ms-2"></i></a>
            </div>
          </div>


          <div className="col d-flex align-items-start mt-5">
            <img src="http://crems.like-themes.com/wp-content/uploads/2020/07/section-about-bg.png" alt="err" />
          </div>


          <div className="col d-flex flex-column align-items-start mt-5">

            <div className='natural d-flex'>
              <i className="fa-solid fa-spa"></i>
              <div className='ms-3'>
                <h3>{lang === 'en' ? 'Natural Organic Product' : 'Təbii Üzvi Məhsul'}</h3>
                <p>{lang === 'en' ? 'Purification of organic substances' : 'Üzvi maddələrin saflaşdırılması'}</p>
              </div>
            </div>

            <div className='natural d-flex mt-5'>
              <i className="fa-solid fa-heart-circle-check"></i>
              <div className='ms-3'>
                <h3>{lang === 'en' ? 'Packaging Design' : 'Qablaşdırma Dizaynı'}</h3>
                <p>{lang === 'en' ? 'a means of communication between the brand and the customer' : 'marka ilə müştəri arasında kommunikasiya vasitəsi'}</p>
              </div>
            </div>

            <div className='natural d-flex mt-5'>
              <i className="fa-solid fa-leaf"></i>
              <div className='ms-3'>
                <h3>{lang === 'en' ? 'Best Quality Cocoa' : 'Ən keyfiyyətli kakao'}</h3>
                <p>{lang === 'en' ? 'It is made from the best quality cocoa-bean varieties of Ecuador' : 'Ekvadorun ən keyfiyyətli kakao-paxla sortlarından hazırlanır'}</p>
              </div>
            </div>

          </div>
        </div>

      </section>


      <section className='three d-flex align-items-center justify-content-center flex-column  '>
        <div className='made '>
          <h1 className='text-center'> {lang === 'en' ? 'Made with love' : 'Sevgi ilə hazırlanmışdır'}</h1>
          <h1 className='text-center'><span >{lang === 'en' ? 'unique sweets ' : 'gurme üçün'}</span> {lang === 'en' ? 'for gourmet' : 'unikal şirniyyatlar'}</h1>
        </div>
        <div className='square'></div>
      </section>

      <section className='four d-flex align-items-center flex-column'>
        <img className='dark' src="http://crems.like-themes.com/wp-content/uploads/2020/07/grunge-dark-temp.png" alt="err" />
        <div className='sweet d-flex align-items-center justify-content-center mt-5'>
          <div className='products d-flex align-items-center justify-content-center '>
            <p>{lang === 'en' ? 'products' : 'məhsullar'}</p>
          </div>
          <div className='online text-center '>
            <p className='p1'>{lang === 'en' ? 'ONLINE STORE' : 'ONLİNE MAĞAZA'}</p>
            <p className='p2'>{lang === 'en' ? 'Discover Sweet Delicious' : 'Dadlı şirniyyatları kəşf edin'}</p>
            <span>~~~~~~~~</span>
          </div>

        </div>





        <Row>
          {newsData.map((item, index) => {
            return <SingleCard key={index} id={item.id} photo={item.photo} title={item.title} desc={item.desc} />

          })}
        </Row>


        <a href="#" className='store '><button>{lang === 'en' ? 'ONLINE STORE' : 'ONLİNE MAĞAZA'}<i className="fa-solid fa-arrow-right ms-2"></i></button></a>
      </section>


      <section className='five d-flex align-items-center justify-content-center pt-5 '>
        <div className=' d-flex align-items-center justify-content-center flex-column'>
          <h1> {lang === 'en' ? 'Watch Our Video' : 'Videomuzu İzləyin'}</h1>
          <button className='btn video-btn bg-transparent' onClick={() => setIframe(true)}><i className="fa-solid fa-play fs-2"></i></button>
          {
            iframe === true ? <>
              <div className="video  d-flex align-items-center justify-content-center">

                <iframe width={660} height={315} src="https://www.youtube.com/embed/qV8PpOiPFW4?start=94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <button className='border border-none' onClick={() => setIframe(false)} >X</button>
              </div>

            </> : ""
          }

        </div>
      </section>


      <section className='six'>
        <div className="pricess col-12 d-flex align-items-center justify-content-evenly red">
          <div className="cups d-flex flex-column align-items-center">
            <h1 ><CountUp start={100} end={340} duration={3} />+</h1>
            <p >{lang === 'en' ? 'Cups of Coffee' : 'Qəhvə Fincanları'}</p>
          </div>
          <div className="cups d-flex flex-column align-items-center">
            <h1 ><CountUp start={1000} end={2678} duration={3} />+</h1>
            <p >{lang === 'en' ? 'Orders Everyday' : 'Hər Gün Sifarişlər'}</p>
          </div>
          <div className="cups d-flex flex-column align-items-center">
            <h1 ><CountUp start={10} end={60} duration={3} /></h1>
            <p >{lang === 'en' ? 'Skilled Professionals' : 'Bacarıqlı Peşəkarlar'}</p>
          </div>
          <div className="cups d-flex flex-column align-items-center">
            <h1 ><CountUp start={60} end={130} duration={3} /></h1>
            <p >{lang === 'en' ? 'Burgers at Hour' : 'Saatda Burger'}</p>
          </div>
        </div>



      </section >

      <section className='seven'>
        <div className='d-flex align-items-center '>
          <img src="http://crems.like-themes.com/wp-content/uploads/2020/07/sign-person.png" alt="err" />
          <div className='right d-flex align-items-center justify-content-center '>
            <div className="our ">
              <p>{lang === 'en' ? 'OUR MISSION' : 'BİZİM MİSSİYAMIZ'}</p>
              <h1 className='mb-5'>{lang === 'en' ? '“Making chocolates is an' : '“Şokolad hazırlamaq bir'} <br /> {lang === 'en' ? 'art that we have' : 'sənətdir ki, illər'}  <br /> {lang === 'en' ? 'perfected over the years' : ' ərzində müştərilərimizi xoşbəxt'}  <br />{lang === 'en' ? ' to make our customers happy” ' : 'etmək üçün təkmilləşdirmişik"'} </h1>
            </div>
            <div className="pastry d-flex">
              <div className="orlando">
                <h2 className='mt-5'>Orlando Detmers</h2>
                <p>{lang === 'en' ? 'PASTRY CHEF' : 'XƏNMƏT AŞPAZI'}</p>
              </div>
              <img className='abc' src="http://crems.like-themes.com/wp-content/uploads/2020/07/sign.png" style={{ width: '110px' }} alt="err" />
            </div>

          </div>
        </div>
      </section>



      <section className='none '>
        <div className="one">
          <Container>
            <div className="black text-center ">
              <p className='pt-5'>{lang === 'en' ? 'GALLERY' : 'QALEREYA'}</p>
              <h1>{lang === 'en' ? '“Our pastry chefs create sweets only ' : '“Bizim xəmir aşpazlarımız şirniyyatları yalnız'} <br /> {lang === 'en' ? '“with creativity and love”' : 'yaradıcılıq və sevgi ilə hazırlayırlar”'} </h1>
            </div>
            <Row className='boxes my-5 '>
              <div className="box-one col-md-3 d-flex align-items-center justify-content-center">
                <div className='squaree'></div>
              </div>

              <div className="box-two col-md-3 mt-5 d-flex align-items-center justify-content-center">
                <div className='squaree'></div>
              </div>

              <div className="box-three col-md-3 d-flex align-items-center justify-content-center">
                <div className='squaree'></div>
              </div>

              <div className="box-four col-md-3 mt-5 d-flex align-items-center justify-content-center">
                <div className='squaree'></div>
              </div>


            </Row>
          </Container>
        </div>
        <div className="two d-flex align-items-center justify-content-center ">
          <a href="/shop" className='store mb-5 '><button>{lang === 'en' ? 'ONLINE STORE' : 'ONLİNE MAĞAZA'} <i className="fa-solid fa-arrow-right ms-2"></i></button></a>
        </div>

      </section>

      <Footer />
    </div >
  )
}

export default Home
