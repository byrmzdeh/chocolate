import React, { useContext } from 'react'

import { Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { LangContext } from '../context/LangContext';


const Faq = () => {
    const [lang, setLang] =useContext(LangContext)
    return (
        <div className='faq'>
            <section className="one">
                <Header />
                <div className="one-one d-flex align-items-center justify-content-center flex-column ">
                    <h1> {lang==='en' ? 'FAQ' :'Tez-tez verilən suallar'}</h1>
                    <p><a href="/"> {lang==='en' ? 'HOME' :'Ana Səhifə'}</a> // {lang==='en' ? 'FAQ' :'Tez-tez verilən suallar'}</p>
                </div>
            </section>
            <section className='two'>
                <Container>
                    <Row >
                        <div className="col-md-5 mt-5">
                            <p className='the pt-5'>{lang==='en' ? 'Every day help for our customers' :'Müştərilərimiz üçün hər gün kömək edin'}</p>
                            <p className='pt-2'>Phasellus porta turpis a lectus dapibus aliquet. Maecenas arcu est, <br /> consectetur eget ipsum ut, vulputate laoreet purus. Proin facilisis sem <br /> non turpis vulputate semper. Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                            <ul>
                                <li className='wh'>{lang==='en' ? 'Managment ' :'İdarəetmə '}</li>
                                <li className='wh'>{lang==='en' ? 'Analytics ' :'Analitika '}</li>
                                <li className='wh'>{lang==='en' ? 'Consultation ' :'Məsləhətləşmə '}</li>
                                <li className='wh'>{lang==='en' ? 'Engineering ' :'Mühəndislik '}</li>
                            </ul>
                            <p className='the pt-5'>{lang==='en' ? 'If you need more help ' :'Əgər daha çox köməyə ehtiyacınız varsa '}</p>
                            <p className='pt-2'>Maecenas arcu est, consectetur eget ipsum ut, vulputate. Proin <br /> facilisis sem non turpis vulputate semper. Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                        </div>


                        <div className="col-md-7 mt-5">
                            <Accordion defaultActiveKey="0" className='mt-5'>
                                <Accordion.Item eventKey="0" >
                                    <Accordion.Header >{lang==='en' ? 'Is it possible to pay for an order with Visa and MasterCard payment cards? ' :'Sifarişi Visa və MasterCard ödəniş kartları ilə ödəmək mümkündürmü? '}</Accordion.Header>
                                    <Accordion.Body className='body'>
                                        <ul>
                                            <li>Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, at venenatis libero. Suspendisse viverra placerat eros in venenatis.</li>
                                            <li className='pt-2'>Vestibulum interdum ex eu dignissim eleifend. Morbi molestie libero orci, volutpat pulvinar ipsum efficitur non. Aliquam ut ligula augue. Pellentesque vel velit nec turpis fermentum consectetur a non sapien.</li>
                                            <li className='pt-2'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1"  className='mt-2'>
                                    <Accordion.Header>{lang==='en' ? 'Is it possible to pay by credit card? ' :'Kredit kartı ilə ödəmək mümkündürmü? '}</Accordion.Header>
                                    <Accordion.Body className='body'>
                                        <ul>
                                            <li>Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, at venenatis libero. Suspendisse viverra placerat eros in venenatis.</li>
                                            <li className='pt-2'>Vestibulum interdum ex eu dignissim eleifend. Morbi molestie libero orci, volutpat pulvinar ipsum efficitur non. Aliquam ut ligula augue. Pellentesque vel velit nec turpis fermentum consectetur a non sapien.</li>
                                            <li className='pt-2'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2"  className='mt-2'>
                                    <Accordion.Header>{lang==='en' ? 'What payment methods exist in your company? ' :'Şirkətinizdə hansı ödəniş üsulları mövcuddur? '}</Accordion.Header>
                                    <Accordion.Body className='body'>
                                        <ul>
                                            <li>Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, at venenatis libero. Suspendisse viverra placerat eros in venenatis.</li>
                                            <li className='pt-2'>Vestibulum interdum ex eu dignissim eleifend. Morbi molestie libero orci, volutpat pulvinar ipsum efficitur non. Aliquam ut ligula augue. Pellentesque vel velit nec turpis fermentum consectetur a non sapien.</li>
                                            <li className='pt-2'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3"  className='mt-2'>
                                    <Accordion.Header>{lang==='en' ? 'Can I return the product after purchase? ' :'Aldıqdan sonra məhsulu qaytara bilərəmmi? '}</Accordion.Header>
                                    <Accordion.Body className='body'>
                                        <ul>
                                            <li>Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, at venenatis libero. Suspendisse viverra placerat eros in venenatis.</li>
                                            <li className='pt-2'>Vestibulum interdum ex eu dignissim eleifend. Morbi molestie libero orci, volutpat pulvinar ipsum efficitur non. Aliquam ut ligula augue. Pellentesque vel velit nec turpis fermentum consectetur a non sapien.</li>
                                            <li className='pt-2'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4"  className='mt-2'>
                                    <Accordion.Header>{lang==='en' ? 'How do I use a promotional code? ' :'Promosyon kodundan necə istifadə edirəm? '}</Accordion.Header>
                                    <Accordion.Body className='body'>
                                        <ul>
                                            <li>Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, at venenatis libero. Suspendisse viverra placerat eros in venenatis.</li>
                                            <li className='pt-2'>Vestibulum interdum ex eu dignissim eleifend. Morbi molestie libero orci, volutpat pulvinar ipsum efficitur non. Aliquam ut ligula augue. Pellentesque vel velit nec turpis fermentum consectetur a non sapien.</li>
                                            <li className='pt-2'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5"  className='mt-2'>
                                    <Accordion.Header className='body'>{lang==='en' ? 'What is the validity period of the gift certificate? ' :'Hədiyyə sertifikatının etibarlılıq müddəti nə qədərdir? '}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, at venenatis libero. Suspendisse viverra placerat eros in venenatis.</li>
                                            <li className='pt-2'>Vestibulum interdum ex eu dignissim eleifend. Morbi molestie libero orci, volutpat pulvinar ipsum efficitur non. Aliquam ut ligula augue. Pellentesque vel velit nec turpis fermentum consectetur a non sapien.</li>
                                            <li className='pt-2'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6" className='mt-2'>
                                    <Accordion.Header>{lang==='en' ? 'What payment methods exist in your company? ' :'Şirkətinizdə hansı ödəniş üsulları mövcuddur? '}</Accordion.Header>
                                    <Accordion.Body className='body'>
                                        <ul>
                                            <li>Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, at venenatis libero. Suspendisse viverra placerat eros in venenatis.</li>
                                            <li className='pt-2'>Vestibulum interdum ex eu dignissim eleifend. Morbi molestie libero orci, volutpat pulvinar ipsum efficitur non. Aliquam ut ligula augue. Pellentesque vel velit nec turpis fermentum consectetur a non sapien.</li>
                                            <li className='pt-2'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>


                                <Accordion.Item eventKey="7"  className='mt-2'>
                                    <Accordion.Header>{lang==='en' ? 'Is it possible to pay for an order with Visa and MasterCard payment cards? ' :'Sifarişi Visa və MasterCard ödəniş kartları ilə ödəmək mümkündürmü? '}</Accordion.Header>
                                    <Accordion.Body className='body'>
                                        <ul>
                                            <li>Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, at venenatis libero. Suspendisse viverra placerat eros in venenatis.</li>
                                            <li className='pt-2'>Vestibulum interdum ex eu dignissim eleifend. Morbi molestie libero orci, volutpat pulvinar ipsum efficitur non. Aliquam ut ligula augue. Pellentesque vel velit nec turpis fermentum consectetur a non sapien.</li>
                                            <li className='pt-2'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>




           
                                
                    


                            </Accordion>

                            {/* <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div> */}


                        </div>

                    </Row>


                </Container>
            </section>
            <Footer />

        </div>
    )
}

export default Faq
