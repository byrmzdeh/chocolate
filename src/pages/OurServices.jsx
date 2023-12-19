import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import img from '../picture/point.png'
import { LangContext } from '../context/LangContext'


const OurServices = () => {
    const [lang, setLang] = useContext(LangContext)
    return (
        <div className='ourservices'>
            <section className="one">
                <Header />
                <div className="one-one d-flex align-items-center justify-content-center flex-column ">
                    <h1 >{lang === 'en' ? 'Our Services' : 'Bizim Xidmətlər'}</h1>
                    <p><a href="/">{lang === 'en' ? 'HOME' : 'ANA SƏHİFƏ'}</a> //{lang === 'en' ? 'Our Services' : 'Bizim Xidmətlər'}</p>
                </div>
            </section>

            <section className='two   d-flex align-items-center flex-column  '>
                <div className='sweet d-flex align-items-center justify-content-center '>
                    <div className='online text-center mt-5'>
                        <p className='p1'>{lang === 'en' ? 'WHAT WE CREATE' : 'BİZ NƏ YARADIK'}</p>
                        <p className='p2'>{lang === 'en' ? 'Unique Handmade Sweets' : 'Unikal Əl işi şirniyyatlar'}</p>
                        <span>~~~~~~~~</span>
                    </div>
                </div>

                <Row className='craft align-items-center justify-content-evenly mt-5 me-5' style={{ width: '96%' }}>

                    <div className="col-md-3 ">
                        <Link to={'/candies'}><img width={410} src="http://crems.like-themes.com/wp-content/uploads/2019/06/type_01-500x750.jpg" alt="err" /> </Link>
                        <div className='write'>
                            <h1>{lang === 'en' ? 'Craft Candies' : 'Craft konfetləri'}</h1>
                            <a href='#'>{lang === 'en' ? 'Read More' : 'Daha Çox'} <i class="fa-solid fa-arrow-right "></i></a>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <Link to={'/sweets'}><img width={410} src="http://crems.like-themes.com/wp-content/uploads/2019/06/type_02-500x750.jpg" alt="err" /> </Link>
                        <div className='write'>
                            <h1>{lang === 'en' ? 'Boxed Gift' : 'Qutuda Hədiyyə'} <br /> {lang === 'en' ? 'Sweets' : 'Şirniyyatları'}</h1>
                            <a href='#'>{lang === 'en' ? 'Read More' : 'Daha Çox'}<i class="fa-solid fa-arrow-right "></i></a>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <Link to={'/pure'}><img width={410} src="http://crems.like-themes.com/wp-content/uploads/2019/06/type_03-500x750.jpg" alt="err" /> </Link>
                        <div className='write'>
                            <h1>{lang === 'en' ? 'Pure Chocolate' : 'Təmiz şokolad'}</h1>
                            <a href='#'>{lang === 'en' ? 'Read More' : 'Daha Çox'}<i class="fa-solid fa-arrow-right "></i></a>
                        </div>
                    </div>
                </Row>



                <div className="natural d-flex align-items-center justify-content-center mt-5">
                    <Row>
                        <div className='col-md-4 d-flex mt-5'>
                            <i className="fa-solid fa-spa"></i>
                            <div className='ms-3'>
                                <h3>{lang === 'en' ? 'Natural Organic Product' : 'Təbii Üzvi Məhsul'}</h3>
                                <p>{lang === 'en' ? 'Purification of organic substances' : 'Üzvi maddələrin saflaşdırılması'}</p>
                            </div>
                        </div>

                        <div className='col-md-4 d-flex mt-5 '>
                            <i className="fa-solid fa-heart-circle-check"></i>
                            <div className='ms-3'>
                                <h3>{lang === 'en' ? 'Packaging Design' : 'Qablaşdırma Dizaynı'}</h3>
                                <p>{lang === 'en' ? 'a means of communication between the brand and the customer' : 'marka ilə müştəri arasında kommunikasiya vasitəsi'}</p>
                            </div>
                        </div>

                        <div className='col-md-4 d-flex mt-5'>
                            <i className="fa-solid fa-leaf"></i>
                            <div className='ms-3'>
                                <h3>{lang === 'en' ? 'Best Quality Cocoa' : 'Ən keyfiyyətli kakao'}</h3>
                                <p>{lang === 'en' ? 'It is made from the best quality cocoa-bean varieties of Ecuador' : 'Ekvadorun ən keyfiyyətli kakao-paxla sortlarından hazırlanır'}</p>
                            </div>
                        </div>
                    </Row>
                </div>
            </section>

            <section className='three '>

                <Row>
                    <div className='left col-md-6 mt-5 '></div>
                    <div className='right col-md-6 d-flex align-items-center justify-content-center flex-column mt-5 '>
                        <div className="our ">
                            <p>{lang === 'en' ? 'OUR MISSION' : 'BİZİM MİSSİYAMIZ'}</p>
                            <h1 className='mb-5'>{lang === 'en' ? '“Making chocolates is an' : '“Şokolad hazırlamaq bir'} <br /> {lang === 'en' ? 'art that we have' : 'sənətdir ki, illər'}  <br /> {lang === 'en' ? 'perfected over the years' : ' ərzində müştərilərimizi xoşbəxt'}  <br />{lang === 'en' ? ' to make our customers happy” ' : 'etmək üçün təkmilləşdirmişik"'} </h1>
                        </div>
                        <div className="pastry d-flex align-items-center justify-content-between">
                            <div className="orlando">
                                <h2 className='mt-5'>Orlando Detmers</h2>
                                <p>{lang === 'en' ? 'PASTRY CHEF' : 'XƏNMƏT AŞPAZI'}</p>
                            </div>
                            <img className='abc' src="http://crems.like-themes.com/wp-content/uploads/2020/07/sign.png" style={{ width: '110px' }} alt="err" />
                        </div>

                    </div>
                </Row>

            </section>

            <section className='four  d-flex align-items-center flex-column'>
                <img className='dark' src="http://crems.like-themes.com/wp-content/uploads/2020/07/grunge-dark-temp.png" alt="err" />
                <div className='sweet d-flex align-items-center justify-content-center mt-5'>
                    <div className='online text-center  '>
                        <p className='p1'>{lang === 'en' ? 'ONLINE STORE ' : 'ONLİNE MAĞAZA '}</p>
                        <p className='p2'>{lang === 'en' ? 'Discover Sweet Delicious ' : 'Dadlı Şirniyyatları kəşf edin '}</p>
                        <span>~~~~~~~~</span>
                    </div>
                </div>

                <div className='row mt-5 '>
                    <div className='col-md-3  d-flex align-items-center justify-content-center ' style={{ backgroundColor: "#221b1b" }} >
                        <img className='bg mb-5' width={500} height={500} src={img} alt="err" />
                        <div className="chocolate position-absolute">
                            <div className='box d-flex align-items-start justify-content-center flex-column'>
                                <p className='ps-5'>{lang === 'en' ? 'BASIC PLAN ' : 'ƏSAS PLAN '}</p>
                                <h2 className='pt-3'>{lang === 'en' ? '$9.99/ay ' : '$9.99/ay '}</h2>
                                <h6 className='pt-2'><i className="fa-solid fa-check pe-2"></i>{lang === 'en' ? 'Recipe creation ' : 'Reseptin yaradılması '}</h6>
                                <h6><i className="x fa-solid fa-x pe-2"></i>{lang === 'en' ? 'Purchase of ingredients ' : 'Tərkiblərin satın alınması '}</h6>
                                <h6><i className="x fa-solid fa-x pe-2"></i>{lang === 'en' ? 'Product preparation ' : 'Məhsulun hazırlanması '}</h6>
                                <a href="#" className='store pt-4 ps-4'><button>{lang === 'en' ? 'READ MORE ' : 'DAHA ÇOX '}<i className="fa-solid fa-arrow-right ms-2"></i></button></a>
                            </div>
                        </div>
                    </div>


                    <div className='col-md-3  d-flex align-items-center justify-content-center ' style={{ backgroundColor: "#221b1b" }} >
                        <img className='bg mb-5' width={500} height={500} src={img} alt="err" />
                        <div className="chocolate position-absolute">
                            <div className='box d-flex align-items-start justify-content-center flex-column'>
                                <p className='ps-5'>{lang === 'en' ? 'LIGHT PLAN' : 'İŞIQ PLAN '}</p>
                                <h2 className='pt-3'>{lang === 'en' ? '$15.29/ay ' : '$15.29/ay '}</h2>
                                <h6 className='pt-2'><i className="fa-solid fa-check pe-2"></i>{lang === 'en' ? 'Recipe creation ' : 'Reseptin yaradılması '}</h6>
                                <h6><i className="fa-solid fa-check pe-2"></i>{lang === 'en' ? 'Purchase of ingredients ' : 'Tərkiblərin satın alınması '}</h6>
                                <h6><i className="x fa-solid fa-x pe-2"></i>{lang === 'en' ? 'Product preparation ' : 'Məhsulun hazırlanması '}</h6>
                                <a href="#" className='store pt-4 ps-4'><button>{lang === 'en' ? 'READ MORE ' : 'DAHA ÇOX '}<i className="fa-solid fa-arrow-right ms-2"></i></button></a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3  d-flex align-items-center justify-content-center ' style={{ backgroundColor: "#221b1b" }} >
                        <img className='bg mb-5' width={500} height={500} src={img} alt="err" />
                        <div className="chocolate position-absolute">
                            <div className='box d-flex align-items-start justify-content-center flex-column'>
                                <p className='ps-5'>{lang === 'en' ? 'OPTIMAL PLAN' : 'OPTİMAL PLAN'}</p>
                                <h2 className='pt-3'>{lang === 'en' ? '$29.99/ay ' : '$29.99/ay '}</h2>
                                <h6 className='pt-2'><i className="fa-solid fa-check pe-2"></i>{lang === 'en' ? 'Recipe creation ' : 'Reseptin yaradılması '}</h6>
                                <h6><i className="fa-solid fa-check pe-2"></i>{lang === 'en' ? 'Purchase of ingredients ' : 'Tərkiblərin satın alınması '}</h6>
                                <h6><i className="fa-solid fa-check pe-2"></i>{lang === 'en' ? 'Product preparation ' : 'Məhsulun hazırlanması '}</h6>
                                <a href="#" className='store pt-4 ps-4 '><button>{lang === 'en' ? 'READ MORE ' : 'DAHA ÇOX '}<i className="fa-solid fa-arrow-right ms-2"></i></button></a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3  d-flex align-items-center justify-content-center ' style={{ backgroundColor: "#221b1b", backgroundImage: "url('http://crems.like-themes.com/wp-content/uploads/2019/06/best_plan.jpg')" }} >
                        <div className="chocolate position-absolute">
                            <div className='box d-flex align-items-start justify-content-center flex-column'>
                                <p className='ps-5'>{lang === 'en' ? 'MAXIMUM PLAN' : 'MAKSİMUM PLAN'}</p>
                                <h2 className='pt-3'>{lang === 'en' ? '$74.49/ay ' : '$74.49/ay '}</h2>
                                <h6 className='pt-2'><i className="fa-solid fa-check pe-2"></i>{lang === 'en' ? 'Recipe creation ' : 'Reseptin yaradılması '}</h6>
                                <h6><i className="fa-solid fa-check pe-2"></i>{lang === 'en' ? 'Purchase of ingredients ' : 'Tərkiblərin satın alınması '}</h6>
                                <h6><i className="fa-solid fa-check pe-2"></i>{lang === 'en' ? 'Product preparation ' : 'Məhsulun hazırlanması '}</h6>
                                <a href="#" className='store pt-4 ps-4 '><button>{lang === 'en' ? 'READ MORE ' : 'DAHA ÇOX '}<i className="fa-solid fa-arrow-right ms-2"></i></button></a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default OurServices
