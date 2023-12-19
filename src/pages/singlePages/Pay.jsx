import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import Header from '../../components/Header';
import { LangContext } from '../../context/LangContext';

const Payment = () => {

  const [data] = useContext(Context)
  const [index, setindex] = useState(0);
  const [lang, setLang] = useContext(LangContext)
  const n = 3;
  const nextSlide = () => {
    const newIndex = index + n;
    if (newIndex < data.length) {
      setindex(newIndex);
    } else {
      setindex(0)
    }
  };
  return (
    <>
      <div className="review-page  d-flex align-items-center justify-content-center flex-column">
        <div>
          <h1>{lang === 'en' ? 'Payment is successful !' : 'Ödəniş uğurludur !'}</h1>
        </div>
        <div className="review-product " >
          <h3 className='text-center '><b>{lang === 'en' ? 'Review product :' : 'Məhsulu nəzərdən keçirin :'}</b></h3>

          <Row className='mb-5'>
            {
              data.slice(index, index + n).map(item => (
                <Col key={item.id} sm={4} className="cart d-flex align-items-center justify-content-center flex-column g-5" >
                  <Link to={`/shop/${item.id}`}><img src={item.img} width={230} alt="err" /></Link>

                </Col>
              ))
            }


          </Row>
        </div>
        <div className="review-button">
          <button className=" mb-5" onClick={nextSlide}>{lang === 'en' ? 'More' : 'Daha çox'}</button>
        </div>
      </div>
    </>
  )
}

export default Payment

