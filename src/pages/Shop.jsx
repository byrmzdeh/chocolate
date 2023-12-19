import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Context } from '../context/Context'
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';


import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import { useWishlist } from 'react-use-wishlist'
import { LangContext } from '../context/LangContext';
// import Pagination from '../context/Pagination';

const Shop = () => {

    const [sweet] = useContext(Context);
    const [catData, setCatData] = useState(sweet);
    const { addItem } = useCart();
    const { addWishlistItem, getWishlistItem, removeWishlistItem } = useWishlist();
    const [lang, setLang] = useContext(LangContext)
    const [sortState, setSortState] = useState(false);





    const [filteredData, setFilteredData] = useState(sweet);

    const [query, setQuery] = useState('')
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Number.POSITIVE_INFINITY);
    const notify = () => toast.success('Product Added !', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    });;

    const filter = (catItem) => {
        const result = sweet.filter(cd => (cd.category === catItem))
        setCatData(result)
        setFilteredData(result)
    }
    useEffect(() => {
        filter('Craft Bakery')
        setFilteredData(sweet)
    }, [sweet])


        const filterPrice = () => {
        const result = sweet.filter((pd) => pd.price >= minPrice && pd.price <= maxPrice);
        setCatData(result);
    };



    return (
        <div className='shop'>

            <section className="one">
                <Header />
                <div className="one-one d-flex align-items-center justify-content-center flex-column ">
                    <h1>{lang === 'en' ? 'All Products ' : 'Bütün Məhsullar'}</h1>
                    <p><a href="/"> {lang === 'en' ? 'HOME' : 'ANA SƏHİFƏ'}</a> //   {lang === 'en' ? 'PRODUCTS' : 'MƏHSULLAR'}</p>
                </div>
            </section>

            <section className='two'>
                <Container className='d-flex justify-content-between'>
                    <Col sm={2}>
                        <h1 className='pt-5'>{lang === 'en' ? 'Product categories' : 'Məhsul kateqoriyaları'}</h1>
                        <hr />
                        <hr />
                        <ul className="list-group mt-5">
                            <li onClick={() => { filter('Bakery') }} > {lang === 'en' ? 'Bakery' : 'Çörəkxana'}</li>
                            <li onClick={() => { filter('Chocolate') }}> {lang === 'en' ? 'Chocolate' : 'Şokolad'}</li>
                            <li onClick={() => { filter('Craft Bakery') }}> {lang === 'en' ? 'Craft Bakery' : 'Əl işi Çörəkçiliyi'}</li>
                            <li onClick={() => { filter('Craft Food') }}> {lang === 'en' ? 'Craft Food' : 'Əl işi Yeməyi'}</li>
                            <li onClick={() => { filter('Cupcake') }}> {lang === 'en' ? 'Cupcake' : 'Keks'}</li>
                            <li onClick={() => { filter('Delicious Sweets') }}> {lang === 'en' ? 'Delicious Sweets' : 'Ləzzətli Şirniyyatlar'} </li>
                        </ul>

                        <div className="filterPrice my-4">
                            <h3>
                                <b >{lang === 'en' ? 'Price ' : 'Qiymət Aralığı'}</b>
                            </h3>
                            <button
                                className="btn btn-warning text-white my-3"
                                onClick={(e) => {
                                    if (sortState == false) {
                                        setSortState(true);
                                        { lang === "en" ? e.currentTarget.innerHTML = "From high to low" : e.currentTarget.innerHTML = "Çoxdan aza sırala" }
                                        setCatData(
                                            sweet.sort((a, b) => a.price - b.price)
                                        )
                                    } else {
                                        setSortState(false)
                                        { lang === "en" ? e.currentTarget.innerHTML = "From low to high" : e.currentTarget.innerHTML = "Azdan çoxa sırala" }
                                        setCatData(
                                            sweet.sort((a, b) => b.price - a.price)
                                        )
                                    }
                                }}
                            >
                                {lang === "en" ? "From low to high" : "Azdan çoxa sırala"}
                            </button>
                            <div>
                                <label htmlFor="minPrice" className="form-label">
                                    {lang === 'en' ? 'Min Price' : 'Minimum Qiymət'}
                                </label>
                                <input
                                    type="number"
                                    id="minPrice"
                                    className="form-control"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                />

                                <label htmlFor="maxPrice" className="form-label mt-2">
                                    {lang === 'en' ? 'Max Price' : 'Maksimum Qiymət'}
                                </label>
                                <input
                                    type="number"
                                    id="maxPrice"
                                    className="form-control"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                />

                                <Button variant="primary" className="mt-2" onClick={filterPrice}>
                                    {lang === 'en' ? 'Apply' : 'Tətbiq et'}
                                </Button>
                            </div>
                        </div>

                    </Col>
                    <Col sm={8}>
                        <Row className='mb-5'>
                            {
                                catData.map(item => (
                                    <Col key={item.id} sm={4} className="cart d-flex align-items-center justify-content-center flex-column g-5" >
                                        <Link to={`/shop/${item.id}`}><img src={item.img} width={230} alt="err" /></Link>
                                        <div className="card-body text-center">
                                            {/* <Button className='addToFav' onClick={() => {
                                                if (getWishlistItem(item.id) !== undefined) {
                                                    removeWishlistItem(item.id);
                                                } else {
                                                    addWishlistItem(item);
                                                }
                                            }} variant="ms-2"><b><i class="fa-regular fa-heart"></i></b></Button> */}
                                            <Button
                                                className="addToFav btn btn-warning wishButton mt-3"
                                                onClick={() => {
                                                    if (getWishlistItem(item.id) !== undefined) {
                                                        removeWishlistItem(item.id);
                                                    } else {
                                                        addWishlistItem(item);
                                                    }
                                                }}
                                            >
                                                {getWishlistItem(item.id) !== undefined ? (
                                                    <i className="fa-solid fa-heart text-danger"></i>
                                                ) : (
                                                    <i className="fa-solid fa-heart text-white"></i>
                                                )}
                                            </Button>

                                            <button className='add mt-3' onClick={() => { notify(addItem(item)) }}>  {lang === 'en' ? 'ADD TO CART' : 'SƏBƏTƏ ƏLAVƏ EDİN'}<i className="fa-solid fa-arrow-right ms-2"></i></button>
                                            {/* <i className="fa-solid fa-heart  pt-3" onClick={() => {
                                                if (getWishlistItem(item.id) !== undefined) {
                                                    removeWishlistItem(item.id);
                                                } else {
                                                    addWishlistItem(item);
                                                }
                                            }}></i> */}


                                            <p className="card-text pt-2">{item.name}</p>
                                            <span >${item.price}</span>



                                            <ToastContainer />
                                        </div>
                                    </Col>
                                ))
                            }


                        </Row>



                    </Col>

                    <div >

                    </div>



                </Container>
            </section>
            <Footer />
        </div>
    )
}

export default Shop


// import React, { useContext, useState } from 'react'
// import { ProductContext } from '../../../context/ProductContext'
// import { Link, NavLink } from 'react-router-dom'
// import slugify from 'slugify'
// import SingleCard from '../../../components/SingleCard'
// // import { Container } from 'react-bootstrap'
// import { useCart } from 'react-use-cart'

// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { LangContext } from '../../../context/LangContext'
// import Header from '../../../components/Header'


// const Sidebar = () => {

//     const [show, setShow] = useState(false);
//     const [lang, setLang] = useContext(LangContext)
//     const [product] = useContext(ProductContext)

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const sortedProductsAscending = [...product].sort((a, b) => a.price - b.price);
//     const [sortState, setSortState] = useState(false);


//     const searchSubmited = (e) => {
//         e.preventDefault();
//         setCatData(query);
//     }



//     const [query, setQuery] = useState('')
//     const [minPrice, setMinPrice] = useState(0);
//     const [maxPrice, setMaxPrice] = useState(Number.POSITIVE_INFINITY);


//     const filterPrice = () => {
//         const result = product.filter((pd) => pd.price >= minPrice && pd.price <= maxPrice);
//         setCatData(result);
//     };


//     const [catData, setCatData] = useState(product)

//     const filterCategory = (catItem) => {
//         const result = product.filter(cd => (
//             cd.category === catItem
//         ))
//         setCatData(result)
//     }


//     const { totalItems } = useCart()
//     return (
//         <>
//             <Header />

//             <div className="aboutus-section1">
//                 <div className="aboutus-section1-img">
//                     <img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/Shop-list-title-area-img.jpg" alt="error" className='img-fluid ' />
//                 </div>
//                 <div className="aboutus-section1-main">
//                     <b className='px-5 mt-5'> {lang === "en" ? "SHOP." : "Məhsullar"}</b>
//                 </div>
//             </div>


//             <h1 className='ms-5 mt-5'>  {lang === "en" ? "Products :" : "Məhsullar :"}</h1>
//             <div className="sidebar-section2 my-5 container">


//                 <div className="sidebar-section2-part2 mb-5">

//                     <div className="search">

//                         <h3><b>Search</b></h3>
//                         <div>
//                             <Button variant="primary" onClick={handleShow}><i class="fa-solid fa-magnifying-glass"></i></Button>

//                             <Modal show={show} onHide={handleClose}>
//                                 <Modal.Header closeButton>
//                                     <Modal.Title className='text-danger'> {lang === "en" ? "Search Product" : "Məhsul Axtar"}</Modal.Title>
//                                 </Modal.Header>
//                                 <form className="d-flex" onSubmit={searchSubmited}>
//                                     <div className="input-group mb-3">
//                                         <input onChange={e => setQuery(e.target.value)} className="form-control mx-3 mt-3 border-2 border-danger" type="search" placeholder="Search" />
//                                     </div>
//                                 </form>

//                                 <ul className='list-group'>
//                                     {query === '' ? '' : product.filter(value => value.name.toLocaleLowerCase().includes(query)).map(item => (
//                                         <Link to={`/shop-sidebar/${slugify(item.name)}`} className='list-group-item' key={item.id} >{item.name}</Link>
//                                     ))}
//                                 </ul>
//                             </Modal>
//                         </div>

//                     </div>
//                     <div className="filterPrice my-4">
//                         <h3>
//                             <b>{lang === 'en' ? 'Price ' : 'Qiymət Aralığı'}</b>
//                         </h3>
//                         <button
//                             className="btn btn-warning text-white my-3"
//                             onClick={(e) => {
//                                 if (sortState == false) {
//                                     setSortState(true);
//                                     { lang === "en" ? e.currentTarget.innerHTML = "From high to low" : e.currentTarget.innerHTML = "Çoxdan aza sırala" }
//                                     setCatData(
//                                         product.sort((a, b) => a.price - b.price)
//                                     )
//                                 } else {
//                                     setSortState(false)
//                                     { lang === "en" ? e.currentTarget.innerHTML = "From low to high" : e.currentTarget.innerHTML = "Azdan çoxa sırala" }
//                                     setCatData(
//                                         product.sort((a, b) => b.price - a.price)
//                                     )
//                                 }
//                             }}
//                         >
//                             {lang === "en" ? "From low to high" : "Azdan çoxa sırala"}
//                         </button>
//                         <div>
//                             <label htmlFor="minPrice" className="form-label">
//                                 {lang === 'en' ? 'Min Price' : 'Minimum Qiymət'}
//                             </label>
//                             <input
//                                 type="number"
//                                 id="minPrice"
//                                 className="form-control"
//                                 value={minPrice}
//                                 onChange={(e) => setMinPrice(e.target.value)}
//                             />

//                             <label htmlFor="maxPrice" className="form-label mt-2">
//                                 {lang === 'en' ? 'Max Price' : 'Maksimum Qiymət'}
//                             </label>
//                             <input
//                                 type="number"
//                                 id="maxPrice"
//                                 className="form-control"
//                                 value={maxPrice}
//                                 onChange={(e) => setMaxPrice(e.target.value)}
//                             />

//                             <Button variant="primary" className="mt-2" onClick={filterPrice}>
//                                 {lang === 'en' ? 'Apply' : 'Tətbiq et'}
//                             </Button>
//                         </div>
//                     </div>
//                     <div className="filterCategory my-4">
//                         <h3><b>{lang === "en" ? "Category " : "Katagoriya"}</b></h3>
//                         <ul >
//                             <li className='py-3' onClick={() => { filterCategory("bag") }}> {lang === "en" ? "Bag" : "Çanta"}</li>
//                             <li className='py-3' onClick={() => { filterCategory("elixir") }}> {lang === "en" ? "Elixir" : "İksir"}</li>
//                             <li className='py-3' onClick={() => { filterCategory("t-shirt") }}> {lang === "en" ? "T-Shirt" : "Köynək"}</li>
//                             <li className='py-3' onClick={() => { filterCategory("frame") }}> {lang === "en" ? "Frame" : "Çərçivə"}</li>
//                             <li className='py-3' onClick={() => { filterCategory("phone") }}> {lang === "en" ? "Phone" : "Telefon"}</li>
//                         </ul>
//                         <h3>
//                             <b>{lang === 'en' ? 'Sort the price by category ' : 'Kataqoriyaya görə qiymıti sırala'}</b>
//                         </h3>
//                         <button
//                             className="btn text-white mt-3"
//                             onClick={(e) => {
//                                 if (sortState == false) {
//                                     setSortState(true);
//                                     { lang === "en" ? e.currentTarget.innerHTML = "From high to low" : e.currentTarget.innerHTML = "Çoxdan aza sırala" }
//                                     setCatData(
//                                         catData.sort((a, b) => a.price - b.price)
//                                     )
//                                 } else {
//                                     setSortState(false)
//                                     { lang === "en" ? e.currentTarget.innerHTML = "From low to high" : e.currentTarget.innerHTML = "Azdan çoxa sırala" }
//                                     setCatData(
//                                         catData.sort((a, b) => b.price - a.price)
//                                     )
//                                 }
//                             }}
//                         >
//                             {lang === "en" ? "From low to high" : "Azdan çoxa sırala"}
//                         </button>
//                     </div>
//                 </div>
//                 <div className="sidebar-section2-part1 row g-5">

//                     {product.length === 0 ? <img src='https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif' alt='err' /> : catData.length === 0 ?
//                         product.map(item => (
//                             <SingleCard key={item.id} alldata={item} />
//                         )) : catData.map(item => (
//                             <SingleCard key={item.id} alldata={item} />
//                         ))}
//                 </div>


//             </div>

//         </>
//     )
// }

// export default Sidebar