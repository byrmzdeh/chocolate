import React, { useState, useEffect, useContext } from 'react';
import { Row, Col } from 'react-bootstrap'; // Import Col from react-bootstrap
import { useParams } from 'react-router-dom';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { LangContext } from '../../context/LangContext';

const TeamOne = () => {
  const [mail, setmail] = useState('');
  const [pass, setpass] = useState('');
  const [mesage, setmesage] = useState('');
  const [alerttext, setalerttext] = useState('');
  const [border, setborder] = useState('');
  const { id } = useParams();
  const [detailsdataone, setDetailsDataOne] = useState([]);
  const [lang,setLang] = useContext(LangContext)

  useEffect(() => {
    // Fetch data for the specific team member using 'id'
    fetch("https://mocki.io/v1/1c3b4e55-4f52-43e0-95c6-9f3f2a5c07cc")
      .then(res => res.json())
      .then(data => {
        const teamMember = data.find(item => item.id === +id);
        if (teamMember) {
          setDetailsDataOne([teamMember]);
        }
      });
  }, [id]);

  const submit = () => {
    if (!mail || !pass) {
      setalerttext('One or more fields have an error. Please check and try again.');
      setborder('danger');
    } else {
      setalerttext('Thank you for your message. It has been sent.');
      setborder('success');
    }
  };

  return (
    <div className='teamone'>
      <section className="one">
        <Header />
        <hr />
        <div className='one-one d-flex align-items-center justify-content-center flex-column'>
          <h1>{lang==='en' ? 'Team' : 'Komanda'}</h1>
          <p><a href="/">{lang==='en' ? 'Home' : 'Ana Səhifə'}</a> // <a href="/Team">{lang==='en' ? 'Team' : 'Komanda'}</a></p>
        </div>
      </section>

      <section className='two d-flex'>
        <Row >
          {detailsdataone.map((item, i) => (
            <Col key={i} md={2} className='carts d-flex align-items-center justify-content-center'>

              <div className="picture mt-5 ms-5">
                <img  src={item.img} width={300} alt="err" />
              </div>
              <div className='information ms-5 mt-5 d-flex flex-column ' >
                <h4 className='pt-5'>{item.name}</h4>
                <h6>{item.category}</h6>
               
                <p className='pt-2'><b>{lang==='en' ? 'Age :' : 'Yaş:'} </b>{item.age}</p>
                <p><b>{lang==='en' ? 'Experience :' : 'Təcrübə :'} </b>{item.experience}</p>
                <p><b>{lang==='en' ? 'Specialization :' : 'İxtisas:'} </b>{item.specialization}</p>
              </div>
              <div className='ms-5 mt-5'>
                  <p className='icon text-white'><i className="fa-solid fa-phone-volume pe-2 text-white"></i>803-33-5644-99</p>
                  <p className='icon text-white'><i className="fa-regular fa-envelope pe-2 text-white"></i>contact.name@your-company.com</p>
                </div>

            </Col>
          ))}
        </Row>

        <div className='teamcontact col-md-4 mt-5'>
          <form onSubmit={submit} className='d-flex align-items-center justify-content-center flex-column mt-5'>
            <h3>{lang==='en' ? 'Contact Me' : 'Mənimlə əlaqə saxlayın'}</h3>
            <div className="mt-3 ms-2 d-flex justify-content-between" style={{ width: "450px" }}>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Your Email' aria-describedby="emailHelp" onChange={e => { setmail(e.target.value) }} />
              <input type="password" className="form-control" placeholder='Your Password' id="exampleInputPassword1" onChange={e => { setpass(e.target.value) }} />
            </div>
            <div className="mb-3 form-check">
              <textarea className='ps-5 mt-3' placeholder='Message' cols={50} rows={7} onChange={e => { setmesage(e.target.value) }} />
            </div>
            <p className={`border border-${border} text-white p-1`}>{alerttext}</p>
            <button type="submit" className="btn btn-primary mt-3">{lang==='en' ? 'Submit' : 'Göndər'}</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TeamOne;
