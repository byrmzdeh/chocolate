import React, {useContext} from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useCart } from 'react-use-cart';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LangContext } from '../context/LangContext';

const Basket = () => {
    const { isEmpty, items, updateItemQuantity, removeItem, emptyCart, cartTotal } = useCart();
    const [lang,setLang]=useContext(LangContext)

    return isEmpty ? (
        <div className='no bg-dark' style={{ height: "600px" }}>
            <section className="one">
                <Header />
                <div className='one-one d-flex align-items-center justify-content-center flex-column ' >
                    <h1>{lang==='en' ? 'Cart' :'Səbət'}</h1>
                    <p><Link to="/">{lang==='en' ? 'Home' :'Ana Səhifə'}</Link> // {lang==='en' ? 'Cart' :'Səbət'}</p>
                </div>
            </section>
            <section className='two d-flex align-items-center justify-content-center flex-column'>
                <img src="http://crems.like-themes.com/wp-content/uploads/2019/06/404_crems.png" alt="" width={250} />
                <h1>{lang==='en' ? 'Your cart is currently empty. ' :'Səbətiniz hazırda boşdur.'}</h1>
                <Button className='mt-3'><Link to="/shop">{lang==='en' ? 'RETURN TO SHOP' :'MAĞAZA QAYIT'}</Link></Button>
            </section>
            <Footer />
        </div>
    ) : (
        <div className='basket'>
            <section className="one">
                <Header />
                <div className='one-one d-flex align-items-center justify-content-center flex-column ' >
                    <h1>{lang==='en' ? 'Cart' :'Səbət'}</h1>
                    <p><Link to="/"> {lang==='en' ? 'Home' :'Ana Səhifə'}</Link> //{lang==='en' ? ' About us ' :'Bizim haqqımızda'}</p>
                </div>
            </section>

            <section className='two d-flex align-items-center '>
                <Container>
                    <table className="table mt-5">
                        <thead>
                            <tr>
                                <th scope="col" className='pb-4'>#</th>
                                <th scope="col" className='pb-4'>{lang==='en' ? 'Photo' :'Şəkil'}</th>
                                <th scope="col" className='pb-4'> {lang==='en' ? 'Name' :'Ad'}</th>
                                <th scope='col' className='pb-4'> {lang==='en' ? 'Price' :'Qiymət'}</th>
                                <th scope="col" className='pb-4'> {lang==='en' ? 'Quantity' :'Kəmiyyət'}</th>
                                <th scope='col' className='pb-4'> {lang==='en' ? 'Delete' :'Sil'}</th>
                            </tr>
                        </thead>

                        <tbody>
                            {items.map((item, count) => (
                                <tr key={item.id}>
                                    <th scope="row">{count + 1}</th>
                                    <td><Link to={`/basket/${item.id}`}><img src={item.img} width={130} alt="err" /></Link></td>
                                    <td>{item.name}</td>
                                    <td>{item.price * item.quantity} $</td>

                                    <td>
                                        <Button className='minus' onClick={() => {
                                            if (item.quantity > 1) {
                                                updateItemQuantity(item.id, item.quantity - 1);
                                            }
                                        }}>-</Button>
                                        <span className='mx-2'>{item.quantity}</span>
                                        <Button className='plus' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</Button>
                                    </td>
                                    <td>
                                        <Button className='del' onClick={() => removeItem(item.id)}>X</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="clear my-5 ">
                        <h4> {lang==='en' ? 'Total price: ' :'Ümumi qiymət:'}{cartTotal} $</h4>
                        <Button variant='danger ms-5' onClick={() => { emptyCart() }}> {lang==='en' ? 'Clear All' :'Hamısını sil'}</Button>
                        <button className='check' ><a href="/checkout"> {lang==='en' ? 'Checkout' :'Ödəniş edin'}</a></button>

                    </div>
                </Container>
            </section>

            <Footer />
        </div>
    );
};

export default Basket;

