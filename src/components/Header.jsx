import React, { useContext, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useCart } from 'react-use-cart'
import { Context } from '../context/Context';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { LangContext } from '../context/LangContext';
import { ModeContext } from '../context/ModeContext';


const Header = () => {
  const [product] = useContext(Context)
  const [data, setData] = useState(null)
  const [search, setSearch] = useState(null)
  const [lang, setLang] = useContext(LangContext);
  const [mode, setMode] = useContext(ModeContext);




  const searchSubmited = (e) => {
    e.preventDefault()
    setSearch(data)
  }
  const { totalItems } = useCart()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'))


  const defineUser = () => {
    if (!user) {
      return lang === "en" ? "Sign In" : "Daxil ol";
    } else {
      return user.user_name;
    }
  };




  return (
    <header className="p-3 bg-none position-relative " style={{ zIndex: 10 }}>

      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between ">
          <div className='me-3'>
            <img src="http://crems.like-themes.com/wp-content/uploads/2019/06/logo_1x_white-1.png" alt="err" />
          </div>
          <nav className='dropdownmenu bg-none'>
            <ul>
              <li><a href="/" style={{ color: '#c19f5f' }} > {lang === "en" ? "Home" : "Ana Səhifə"} </a>
              </li>


              <li><a href="/contact">{lang === 'en' ? 'Contact' : 'Əlaqə'}</a></li>


              <li><a href="#">{lang === 'en' ? 'About' : 'Haqqımızda'} <span style={{ color: '#c19f5f' }}>+</span></a>
                <ul id='submenu'>
                  <li><a href="/about">{lang === 'en' ? 'About Us ' : 'Bizim Haqqımızda'}</a></li>
                  <li><a href="/ourservices"> {lang === 'en' ? 'Our Services' : 'Xidmətlərimiz'}</a></li>
                  {/* <li><a href="#">Testimonials</a></li> */}
                  <li><a href="/faq">{lang === 'en' ? 'FAQ ' : 'Suallar'}</a></li>
                  <li className='gallery'><a href="#"> {lang === 'en' ? 'Gallery' : 'Qalereya'} <span style={{ color: '#c19f5f' }}>+</span></a>
                    <ul id='submenu1'>
                      <li><a href="/columns2"> {lang === 'en' ? 'Gallery 2-columns' : 'Qalereya 2 sütunlu'}</a></li>
                      <li><a href="/columns3"> {lang === 'en' ? 'Gallery 3-columns' : 'Qalereya 3 sütunlu'}</a></li>
                      <li><a href="/columns4"> {lang === 'en' ? 'Gallery 4-columns' : 'Qalereya 4 sütunlu'}</a></li>
                    </ul>
                  </li>
                 
                </ul>
              </li>


              <li><a href="#"> {lang === 'en' ? 'Product' : 'Məhsul'}<span style={{ color: '#c19f5f' }}>+</span></a>
                <ul id='submenu'>
                  <li><a href="/shop"> {lang === 'en' ? 'Shop' : 'Mağaza'}</a></li>
                  <li><a href="/basket">{lang === 'en' ? 'Cart ' : 'Səbət'}</a></li>
                  <li><a href="/wishlist"> {lang === 'en' ? 'Wishlist' : 'İstəklərim'}</a></li>
                  <li><a href="/checkout">{lang === 'en' ? 'Checkout ' : 'Ödəniş'}</a></li>
                  <li><a href="/signin"> {lang === 'en' ? 'My account' : 'Hesabım'}</a></li>
                </ul>
              </li>


              <li ><a href="/blog">{lang === 'en' ? 'Blog' : 'Bloq'}</a></li>



             


            </ul>
          </nav>




          <div className="block">
            <div className='col-2 d-flex align-items-center justify-content-between' >


              <button className="btn btn-none " onClick={handleShow}>
                <a href="#"><i className="fa-solid fa-magnifying-glass" ></i></a>
              </button>

              <Modal show={show} onHide={handleClose}>
                <div className="modal-body">
                  <form onSubmit={searchSubmited}>
                    <div className="input-group mb-3">
                      <input onChange={e => setData(e.target.value)} type="text" className="form-control" placeholder="Enter Product" aria-label="Recipient's username" aria-describedby="button-addon2" />
                      <Button className="btn2" style={{ backgroundColor: '#5a5757', color: 'white' }} type="submit" id="button-addon2">{lang === 'en' ? 'Search' : 'Axtarış'}</Button>
                    </div>
                  </form>


                  <ul className="list-group">
                    {data === null ? null : product.filter(value => value.name.includes(search)).map(item => (
                      <Link to={`/shop/${item.id}`} key={item.id} class="list-group-item">{item.name}</Link>

                    ))}

                  </ul>




                </div>
                <Modal.Footer>
                  <Button style={{ backgroundColor: '#2d2627', color: 'white' }} onClick={handleClose}>
                    {lang === 'en' ? 'Close' : 'Bağla'}
                  </Button>
                </Modal.Footer>
              </Modal>




              <button type="button" className="btn btn-none "><a href="/contact"><i className="fa-solid fa-user-pen "></i></a></button>

              <button type="button" className="btn btn-none position-relative">
                <a href="/basket" ><i className="fa-solid fa-bag-shopping"></i></a>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-none">
                  {totalItems}
                  <span className="visually-hidden">{lang === 'en' ? 'unread messages' : 'oxunmamış mesajlar'}</span>
                </span>
              </button>


            </div>
          </div>
          <Dropdown className='drop'>
            <Dropdown.Toggle className='button' variant=''  >
              <i className="fa-solid fa-bars"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item className='ab' href="/">{lang === 'en' ? 'Home' : 'Ana Səhifə'}</Dropdown.Item >
              <Dropdown.Item className='ab' href="/about">{lang === 'en' ? 'About' : 'Haqqımızda'}</Dropdown.Item >
              <Dropdown.Item className='ab' href="/shop">{lang === 'en' ? 'Shop' : 'Mağaza'}</Dropdown.Item>
              <Dropdown.Item className='ab' href="/basket">{lang === 'en' ? 'Cart' : 'Səbət'}</Dropdown.Item>
              <Dropdown.Item className='ab' href="/contact">{lang === 'en' ? 'Contact' : 'Əlaqə'}</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>

          <div className='context d-flex gap-3 ms-5'>
            <Link to='/wishlist'><i className="fa-regular fa-heart fs-5 mt-3"></i></Link>
            <button className='modeBtn mt-2 p-2 border border-0 ' style={{ background: "none" }} onClick={() => {
              mode === 'light' ? setMode('dark') : setMode('light')
              mode === 'light' ? localStorage.setItem('mode', 'dark') : localStorage.setItem('mode', 'light')
            }} > {mode === 'light' ? <i class="fa-solid fa-moon" style={{ color: "#c19f5f", fontSize: "23px" }}></i> : <i class="fa-solid fa-sun" style={{ color: "#c19f5f", fontSize: "23px" }}></i>}</button>

            <button className='langBtn mt-1 p-1 border border-0' style={{ background: "none", color: "#c19f5f" }} onClick={() => {
              lang === 'en' ? setLang('az') : setLang('en')
              lang === 'en' ? localStorage.setItem('lang', 'az') : localStorage.setItem('lang', 'en')
            }}>{lang === 'en' ? "AZ" : 'EN'}</button>
          </div>


          <div className="user-info-box  d-flex g-3 align-items-center ">

            {!user || !user.user_status ? (
              <Link to="/signin" className="nav-part">
                <i class="fa-regular fa-user"></i>
              </Link>
            ) : user.user_status === "admin" ? (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {defineUser()}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#" onClick={() => {
                      navigate('/signin');
                    }}>
                      Change User
                    </a>
                  </li>
                  <li><Link to={'/admin'} className="dropdown-item"> {lang==='en' ? 'Dashboard' :'Admin Panel'}</Link></li>
                  {!user ? (
                    ""
                  ) : (
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => {
                          localStorage.removeItem("user");
                          navigate('/');
                          window.location.reload();
                        }}
                      >
                        {lang==='en' ? 'Log Out' :'Çıxış'}
                                              </a>
                    </li>
                  )}
                </ul>
              </div>
            ) : (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {defineUser()}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#" onClick={() => {
                      navigate('/signin');
                    }}>
                      {lang==='en' ? 'Change User' :'İstifadəçini dəyişdirin'}
                    </a>
                  </li>
                  {!user ? (
                    ""
                  ) : (
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => {
                          localStorage.removeItem("user");
                          navigate('/');
                          window.location.reload();
                        }}
                      >
                        {lang==='en' ? 'Log Out' :'Çıxış'}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}

          </div>

          <div>


          </div>
        </div>
      </div>
    </header >

  )
}

export default Header
