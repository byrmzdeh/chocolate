import React, {  useContext } from 'react';
import { Col } from "react-bootstrap"
import NewsForm from "../ProductForm"
import { useDispatch } from "react-redux"
import {  addNewsToDatabase } from "../../../maneger/actions/newAction";
import { useNavigate } from "react-router-dom";
import { LangContext } from "../../../context/LangContext";

const AddNews = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [lang,setLang] = useContext(LangContext)
  return (
    <div className="addproduct">
        <h1 className="text-center pt-5">{lang==='en' ? 'Add Products' :'Məhsullar əlavə edin'}</h1>
        <div className="d-flex justify-content-center">
            <Col md={6}>
                <NewsForm sendValue={(items)=>{
                    dispatch(addNewsToDatabase(items));
                    navigate('/admin')
                }} />
            </Col>
        </div>
    </div>
  )
}

export default AddNews