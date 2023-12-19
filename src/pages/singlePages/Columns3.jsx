import React, { useContext } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, Row } from 'react-bootstrap'
import { LangContext } from '../../context/LangContext'

const Columns3 = () => {
    const [lang,setLang] =useContext(LangContext)
    return (
        <div className='columns3'>
            <section className="one ">
                <Header />
                <hr />
                <div className='one-one d-flex align-items-center justify-content-center flex-column  ' >
                    <h1>{lang==='en' ? 'Gallery 2-columns' :'Qalereya 2 sütunlu'}</h1>
                     <p className='pt-2'><a href="/"> {lang==='en' ? 'Home' :'Ana Səhifə'}</a> // {lang==='en' ? 'Gallery 2-columns' :'Qalereya 2 sütunlu'}</p>
                </div>
            </section>

            <section className='two'>
               
                    <Row  >
                        <div className="col-md-4 d-flex align-items-center justify-content-center flex-column mt-5">
                            <img width={460} src="http://crems.like-themes.com/wp-content/uploads/2019/06/gallery-01-e1597251883779-755x500.jpg" alt="err" />
                             <p className='pt-2'>{lang==='en' ? 'Coffee' :'Qəhvə'}</p>
                        </div>

                        <div className="col-md-4 d-flex align-items-center justify-content-center flex-column mt-5">
                            <img width={460} src="http://crems.like-themes.com/wp-content/uploads/2019/06/gallery-02-755x500.jpg" alt="err" />
                             <p className='pt-2'>{lang==='en' ? 'Arabica' :'Ərəbistan'}</p>
                        </div>

                        <div className="col-md-4 d-flex align-items-center justify-content-center flex-column mt-5">
                            <img width={460} src="http://crems.like-themes.com/wp-content/uploads/2019/06/gallery-03-755x500.jpg" alt="err" />
                             <p className='pt-2'>{lang==='en' ? 'Robusta' :'Robusta'}</p>
                        </div>

                        <div className="col-md-4 d-flex align-items-center justify-content-center flex-column mt-5">
                            <img width={460} src="http://crems.like-themes.com/wp-content/uploads/2019/06/gallery-04-755x500.jpg" alt="err" />
                             <p className='pt-2'>{lang==='en' ? 'Espresso' :'espresso'}</p>
                        </div>

                        <div className="col-md-4 d-flex align-items-center justify-content-center flex-column mt-5">
                            <img width={460} src="http://crems.like-themes.com/wp-content/uploads/2019/06/gallery-07-755x500.jpg" alt="err" />
                             <p className='pt-2'>{lang==='en' ? 'Green Coffe ' :'Yaşıl Qəhvə'}</p>
                        </div>

                        <div className="col-md-4 d-flex align-items-center justify-content-center flex-column mt-5">
                            <img width={460} src="http://crems.like-themes.com/wp-content/uploads/2019/06/gallery-09-755x500.jpg" alt="err" />
                             <p className='pt-2'> {lang==='en' ? 'Espresso' :'Espresso'}</p>
                        </div>
                    </Row>
               
            </section>
            <Footer />
        </div>
    )
}

export default Columns3