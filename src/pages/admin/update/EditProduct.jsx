import { Col } from "react-bootstrap"
import ProductForm from "../ProductForm"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import slugify from "slugify"
import React, {  useContext } from 'react';
import { editNews, editNewsFromDatabase } from "../../../maneger/actions/newAction"
import { LangContext } from "../../../context/LangContext"

const EditNews = () => {
  const {pe} = useParams();
  const newsdata = useSelector(p=>p);
  const newsprop = newsdata.find(p=>slugify(p.title)==pe);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lang, setLang] = useContext(LangContext)
  console.log(pe);
  console.log(newsprop);
  return (
    <div>
        <h1 className='text-center my-3'>{lang==='en' ? 'Edit Blog' : 'Bloqu redaktə edin'}</h1>
        <div className="d-flex justify-content-center">
            <Col md={6}>
                <ProductForm editnews={newsprop} 
                sendValue={(items)=>{
                  dispatch(editNewsFromDatabase(newsprop.id,items));
                  navigate('/admin');
              }}
                 />
            </Col>
        </div>
    </div>
  )
}

export default EditNews