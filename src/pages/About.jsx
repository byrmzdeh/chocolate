import React, { useState, useEffect, useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import img from '../picture/point.png'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { LangContext } from '../context/LangContext'

// import { TeamContext } from '../context/TeamContext'

const About = () => {



  const [btn, setBtn] = useState('ADD TO CART')
  const [right, setRight] = useState(<i className="fa-solid fa-arrow-right ms-2"></i>)
  const [iframe, setIframe] = useState()
  const [data, setData] = useState([])
  const [lang, setLang] = useContext(LangContext);
  useEffect(() => {
    fetch("https://mocki.io/v1/1c3b4e55-4f52-43e0-95c6-9f3f2a5c07cc")
    .then(res => res.json())
    .then(x => setData(x))
  }, [])


  // const team = useContext(TeamContext)
  // const [teamdata,setteamdata] = useState(team)




  return (
    <div className='about'>


      <section className="one ">
        <Header />
        
        <div className='one-one d-flex align-items-center justify-content-center flex-column ' >
          <h1>{lang === 'en' ? "About us" : 'Bizim haqqımızda'}</h1>
          <p><a href="/"> {lang === 'en' ? "Home" : 'Ev'}</a> // {lang === 'en' ? "About us" : 'Bizim haqqımızda'}</p>
        </div>
      </section>


      <section className="two d-flex align-items-center flex-column">
        <div className="d-flex">
          <div className="write">
            <h2> {lang === 'en' ? "Our patisserie produces unique" : 'Bizim şirniyyat evimiz ləzzət sevənlər üçün '} <br /> {lang === 'en' ? "sweets for lovers of yummy" : 'unikal şirniyyatlar istehsal edir'} </h2>
            <p>{lang === 'en' ? "Our cakes and sweets shops are located in different cities." : 'Bizim tort və şirniyyat sexlərimiz müxtəlif  şəhərdə yerləşir. '} <br /> {lang === 'en' ? " Even if you don't know the exact location of the shops," : 'Sexlərin dəqiq yerini bilməsəniz də, vanil, kakao və '} <br /> {lang === 'en' ? " the delicious smell of vanilla, cocoa and cinnamon will bring you to the place." : ' darçının ətrafa yayılan ləzzətli qoxusu sizi məkana doğru gətirəcək.'} </p>
            <p className='download pt-4'  ><i className="fa-regular fa-money-bill-1" style={{ color: '#c19f5f' }}></i><a href="/home" className='ps-3 '>{lang === 'en' ? "Download Price" : 'Yükləmə Qiyməti'}</a></p>
            <button className='read mt-5'><a href="#">{lang === 'en' ? "Read More" : 'Daha Cox'}</a><i className="fa-solid fa-right-long ms-3"></i></button>
          </div>
          <div className="picture">
            <img width={340} src="http://crems.like-themes.com/wp-content/uploads/2019/06/gallery-01-e1597251883779.jpg" alt="" />
            <img width={335} className='ms-5' src="http://crems.like-themes.com/wp-content/uploads/2019/06/gallery-02-1536x1536.jpg" alt="" />
          </div>
        </div>


        <div className="row pt-5">

          <div className='col-md-4 d-flex'>
            <i className="fa-solid fa-spa"></i>
            <div className='ms-3'>
              <h3>{lang ==='en'? 'Natural Organic Product' :'Təbii Üzvi Məhsul'}</h3>
              <p>{lang ==='en'? 'İstehsalda istifadə olunan bütün maddələr yoxlama mərhələsindən keçir.' :'İstehsalda istifadə olunan bütün maddələr yoxlama mərhələsindən keçir.'}</p>
            </div>
          </div>

          <div className='col-md-4 d-flex '>
            <i className="fa-solid fa-heart-circle-check"></i>
            <div className='ms-3'>
              <h3> {lang ==='en'? 'Packaging Design' :'Qablaşdırma Dizaynı '}</h3>
              <p>{lang ==='en'? 'Modern equipment of world leaders in the food industry has been installed.' :'Yeyinti sənayesi üzrə dünya liderlərinin müasir avadanlıqları quraşdırılıb.'}</p>
            </div>
          </div>

          <div className='col-md-4 d-flex'>
            <i className="fa-solid fa-leaf"></i>
            <div className='ms-3'>
              <h3>{lang ==='en'? 'Best Quality Cocoa' : 'Ən keyfiyyətli kakao'}</h3>
              <p>{lang ==='en'? 'Quality control is one of the main secrets of the success of our products.' :'Keyfiyyətə nəzarət - məhsullarımızın uğurunun əsas sirlərindən biridir.'}</p>
            </div>
          </div>

        </div>

      </section>


      <section className='three d-flex align-items-center justify-content-center flex-column  '>
        <div className='made '>
          <h1 className='text-center'>{lang ==='en'? 'Made with love' :'Sevgi ilə hazırlanmışdır'}</h1>
          <h1 className='text-center'><span >{lang ==='en'? 'unique sweets ' :'unikal şirniyyatlar'}</span>{lang ==='en'? ' for gourmets' :
' qurmanlar üçün '}</h1>
        </div>
        <div className='square'></div>
      </section>


      <section className='four d-flex align-items-center flex-column'>
        <div className='sweet d-flex align-items-center justify-content-center mt-5'>
          <div className='products d-flex align-items-center justify-content-center '>
            <p>{lang==='en'? 'team' : 'komanda'}</p>
          </div>
          <div className='online text-center '>
            <p className='p1'> {lang==='en'? 'OUR TEAM' : 'BİZİM KOMANDA'}</p>
            <p className='p2'> {lang==='en'? 'Meet Our Confectioners' : 'Şirniyyatçılarımızla tanış olun'}</p>
            <span>~~~~~~~~</span>
          </div>
        </div>

        <Row className='mt-5'>
           {data.map((item,i) => (
            <div key={i} className="col-md-3 col-sm-6 col-12  ">
              <div className="john">
                <img className='rotate1' width={300} height={400} src={img} alt="" />
                <div className='team1 ' >
                <Link to={`/teamone/${item.id}`}><img src={item.img} width={230} alt="err" /></Link>
                  <div className='d-flex align-items-center justify-content-center flex-column'>
                    <h3 className='pt-2' >{item.name}</h3>
                    <p>{item.category}</p>
                  </div>
                </div>

              </div>
            </div>

          ))
          } 

          {/* <div className="col-md-3  ">
            <div className="john">
              <img className='rotate1' width={300} height={400} src={img} alt="" />
              <div className='team1 ' >
                <Link to='/teamone'><img src="http://crems.like-themes.com/wp-content/uploads/2017/09/team_01.jpg" width={260} alt="err" /></Link>
                <div className='d-flex align-items-center justify-content-center flex-column'>
                  <h3 className='pt-2' >John Portman</h3>
                  <p>CONFECTIONER</p>
                </div>
              </div>

            </div>
          </div>

          <div className="col-md-3  ">
            <div className="john">
              <img className='rotate1' width={300} height={400} src={img} alt="" />
              <div className='team1 ' >
                <Link to={'/teamtwo'}><img src="http://crems.like-themes.com/wp-content/uploads/2017/09/team_02.jpg" width={260} alt="err" /></Link>
                <div className='d-flex align-items-center justify-content-center flex-column'>
                  <h3 className='pt-2' >Kelley Miles</h3>
                  <p>PASTRY CHEF</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3  ">
            <div className="john">
              <img className='rotate1' width={300} height={400} src={img} alt="" />
              <div className='team1 ' >
                <Link to={'/teamthree'}><img src="http://crems.like-themes.com/wp-content/uploads/2017/09/team_03.jpg" width={260} alt="err" /></Link>
                <div className='d-flex align-items-center justify-content-center flex-column'>
                  <h3 className='pt-2' >Sherman Warner</h3>
                  <p>CONFECTIONER</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-3  ">
            <div className="john">
              <img className='rotate1' width={300} height={400} src={img} alt="" />
              <div className='team1 ' >
                <Link to={'/teamfour'}><img src="http://crems.like-themes.com/wp-content/uploads/2017/09/team_04.jpg" width={260} alt="err" /></Link>
                <div className='d-flex align-items-center justify-content-center flex-column'>
                  <h3 className='pt-2' >Denis Green</h3>
                  <p>BARISTA</p>
                </div>
              </div>
            </div>
          </div> */}


        </Row>



        <a href="#" className='store '><button>{lang==='en' ? 'READ MORE' : 'Daha Çox'} <i className="fa-solid fa-arrow-right ms-2"></i></button></a>
      </section>

      <Footer />

    </div>
  )
}

export default About
