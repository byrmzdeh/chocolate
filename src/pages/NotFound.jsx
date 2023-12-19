import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext'

const NotFound = () => {
    const [lang,setLang] =useContext(LangContext)
    return (
        <div className='notFound'>

            <section className="one">
                <div className="one-one d-flex align-items-center justify-content-center flex-column ">
                    <h1> {lang==='en' ? '404 Not Found' : '404 tapılmadı'}</h1>
                    <p><a href="/">{lang==='en' ? 'HOME' : 'ANA SƏHİFƏ'}</a> // 404</p>
                </div>
            </section>

            <section className='two  d-flex align-items-center justify-content-center flex-column '>
                <img src="http://crems.like-themes.com/wp-content/uploads/2019/06/404_crems.png" alt="" width={250} />
                <h1>{lang==='en' ? 'Oops! Page Not Found' : 'Vay! Səhifə tapılmadı'}</h1>
                <p>{lang==='en' ? 'The page you are looking for was moved, removed, ' : 'Axtardığınız səhifə köçürülüb, silinib, adı dəyişdirilib'} <br /> {lang==='en' ? 'renamed or might never existed.' : 'və ya heç vaxt mövcud olmaya bilər.'} </p>
                <button className='mt-3'><a href="/">{lang==='en' ? 'HOME PAGE' : 'ANA SƏHİFƏ'}</a></button>
            </section>
           
            <section className='three d-flex align-items-center justify-content-center'>
                <a href="#"> {lang==='en' ? 'Like-themes' : 'Bənzər mövzular'}</a>
                <span> {lang==='en' ? '© All Rights Reserved - 2020 ' : '© Bütün hüquqlar qorunur - 2020'} </span>
                <a href="#"> {lang==='en' ? 'Purchase' : 'Alış'}</a>
            </section>

        </div>
    )
}

export default NotFound
