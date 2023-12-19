import React , {useContext} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useWishlist } from 'react-use-wishlist';
import { LangContext } from '../context/LangContext';

const Wishlist = () => {
  const { addItem } = useCart();
  const { items, removeWishlistItem } = useWishlist();
  const [lang, setLang] = useContext(LangContext)

  const notify = () =>
    toast.success('Product Added !', {
      position: 'bottom-right',
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
    });

  return (
    <div className='wishlist'>
      <section className="one">
        <Header />
        <div className="one-one d-flex align-items-center justify-content-center flex-column ">
          <h1> {lang==='en' ? 'Wishlist' :'İstək siyahısı'}</h1>
          <p>
            <a href="/shop">{lang==='en' ? 'SHOP' :'MAĞAZA'}</a> // {lang==='en' ? 'Wishlist' :'İstək siyahısı'}
          </p>
        </div>
      </section>

      <section className='two container'>
        <table className="table my-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">{lang==='en' ? 'Photo' :'Şəkil'}</th>
              <th scope="col">{lang==='en' ? 'Product' :'Məhsul'}</th>
              <th scope="col">{lang==='en' ? 'Price' :'Qiymət'}</th>
              <th scope="col">{lang==='en' ? 'Delete' :'Sil'}</th>
              <th className='basketwish' scope="col">
                {lang==='en' ? 'Basket' :'Səbət'}
              </th>
            </tr>
          </thead>
          <tbody>
          {items.map((item, count) => {
            // if (count % 2 == 0) {
              return (
                <tr key={item.id}>
                  <th scope="row">{count + 1}</th>
                  <th scope="row"><img width={180} src={item.img} alt="error" /></th>
                  <th scope="row"><Link className='product-name' to={`/shop-sidebar/${(item.name)}`}><h4><b>{item.name}</b></h4></Link></th>
                  <th scope="row"><del><h4 >{item.oldprice}</h4> </del>{item.price} $</th>

                  <th scope="row" ><Button variant='none' onClick={() => removeWishlistItem(item.id)} className=' delete-button'><i className="fa-solid fa-x"></i></Button></th>
                  <th className='basketwish' scope="row"><Button className='add py-1' onClick={() => {notify( addItem(item)) }}  variant="ms-2">{lang==='en' ? 'ADD TO CART' :'SƏBƏTƏ ƏLAVƏ EDİN'}</Button></th>

                </tr>
              )
            // }



          })}
          </tbody>
          <ToastContainer />
        </table>
      </section>
      <Footer />
    </div>
  );
};

export default Wishlist;
