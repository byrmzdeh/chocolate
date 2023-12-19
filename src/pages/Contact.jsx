import React , {useContext} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from "react";
import { LangContext } from '../context/LangContext';

const Contact= () => {
    const [mail, setmail] = useState('')
    const [pass, setpass] = useState('')
    const [mesage, setmesage] = useState('')
    const [alerttext, setalerttext] = useState('')
    const [border, setborder] = useState('')
    const [lang,setLang] =useContext(LangContext)

    const submit = (e) => {
        e.preventDefault();
        if (mail === '' || pass === '') {
            setalerttext('One or more fields have an error. Please check and try again.');
            setborder('danger');
           
        } else {
            setalerttext('Thank you for your message. It has been sent.');
            setborder('success');
            
        }
    }




    return (
        <div className='contact'>
            <section className="one">
                <Header />
                <div className='one-one d-flex align-items-center justify-content-center flex-column '>
                    <h1> {lang==='en' ? 'Contact' : 'Əlaqə'}</h1>
                    <p><a href="/">{lang==='en' ? 'Home' : 'Ana Səhifə'}</a> // {lang==='en' ? 'CONTACT' : 'ƏLAQƏ'}</p>
                </div>
            </section>

            <section className='two pt-5'>
                <div className="row mt-5">
                    <div className="col-md-3 d-flex align-items-center justify-content-center flex-column text-center border-end border-warning-subtle">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className='pt-3'>{lang==='en' ? 'Location' : 'Məkan'}</p>
                        <p>29 Nicolas str, New York, 987597- <br />50</p>
                    </div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center flex-column text-center border-end border-warning-subtle">
                        <i className="fa-solid fa-phone-volume"></i>
                        <p className='pt-3'> {lang==='en' ? 'Phones' : 'Telefonlar'}</p>
                        <p>0(800) 890-90-609 <br />
                            0(800) 890-90-620</p>
                    </div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center flex-column text-center border-end border-warning-subtle">
                        <i className="fa-regular fa-envelope"></i>
                        <p className='pt-3'> {lang==='en' ? 'Email' : 'E-poçt'}</p>
                        <p>sale@like-themes.com <br />
                            tech@like-themes.com</p>
                    </div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center flex-column text-center">
                        <i className="fa-regular fa-clock"></i>
                        <p className='pt-3'> {lang==='en' ? 'Working Hours' : 'İş saatları'}</p>
                        <p>{lang==='en' ? 'Wednesday - Sunday ' : 'Çərşənbə - Bazar günü'}<br />
                            7:00 AM - 5:00 PM</p>
                    </div>

                    <iframe className='mt-5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70062.74571499511!2d-74.27250570102863!3d40.71667325942788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25370329a0e1d%3A0xe1bcdc2adcfee473!2sNewark%2C%20New%20Jersey%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2saz!4v1693686317689!5m2!1str!2saz" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                </div>
            </section>

            <section className='three d-flex align-items-center justify-content-center flex-column'>
                <h3 className='pb-2'>{lang==='en' ? 'Send Message' : 'Mesaj Göndər'}</h3>
                <hr />
                <form onSubmit={submit} className='col-md-3 d-flex align-items-center justify-content-center flex-column'>
                    <div className="mb-3 d-flex justify-content-between"  >
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Your Email' aria-describedby="emailHelp" onChange={e => { setmail(e.target.value) }} />
                        <input type="password" className="form-control" placeholder='Your Password' id="exampleInputPassword1" onChange={e => { setpass(e.target.value) }} />
                    </div>
                    <div className="mb-4 form-check">
                        <textarea className='ps-5 mt-3' placeholder='Message' cols={63} rows={10} onChange={e => { setmesage(e.target.value) }} />
                    </div>
                    <p className={`border border-${border} text-white p-1`}>{alerttext}</p>
                    <button type="submit" className="btn btn-primary mt-3"> {lang==='en' ? 'Submit' : 'Göndər'}</button>

                </form>


            </section>

            <Footer />
        </div>
    )
}

export default Contact
