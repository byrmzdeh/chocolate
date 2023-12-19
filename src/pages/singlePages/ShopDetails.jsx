import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Context } from '../../context/Context';


const ShopDetails = () => {
    const { details } = useParams()
    const [sweet] = useContext(Context)
    const detailsdata = sweet.find(p => p.id.toString() === details)
    const { addItem } = useCart()

    const notify = () => toast.success('Product Added !', {
        position: "bottom-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    });;


    return (
        <div className='shopDetails'>
            <section className="one">
                <Header />
                <div className="one-one d-flex align-items-center justify-content-center flex-column ">
                    <h1 className="display-5 fw-bold  lh-1 mb-3">{detailsdata.name}</h1>
                    <p><a href="/">HOME</a> // <a href="/shop">CHOCOLOTE</a> // {detailsdata.name}</p>
                </div>

            </section>

            <section className='two d-flex align-items-center justify-content-center'>
                
            <Col sm={4}>
                    <img src={detailsdata.img} width={350} alt="Bootstrap Themes" />
                </Col>
                <Col sm={5}>
                    <p className='price'>${detailsdata.price}</p>
                    <p className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <br />totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt <br />explicabo.</p>
                    <div className='d-flex align-items-center justify-content-between mt-3' style={{ width: "500px" }}>
                        <p><span>Category:</span> {detailsdata.category}</p>
                        <button onClick={() => { notify(addItem(detailsdata)) }} >ADD TO CART</button>
                        <ToastContainer />
                    </div>
                    
                </Col>


            </section>
            <Footer />
        </div>


    )
}

export default ShopDetails
