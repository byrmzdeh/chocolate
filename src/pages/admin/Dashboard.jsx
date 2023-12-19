import React, {  useContext } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { removeNews, removeNewsFromDatabase } from '../../maneger/actions/newAction';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import Header from '../../components/Header';
import { LangContext } from '../../context/LangContext'

function Dashbaord() {
    const newsdata = useSelector(p => p);
    const dispatch = useDispatch();
    const [lang, setLang] = useContext(LangContext);
    return (
        <div div className='dashboard'>
            <Header/>
      
            <h1 className='text-center pt-5'>{lang==='en' ? 'Admin Panel' : 'Admin Panel'}</h1>
            <LinkContainer to="add"><Button style={{backgroundColor:'#c19f5f', border:'none'}}>{lang==='en' ? 'ADD' : 'ƏLAVƏ EDİN'}</Button></LinkContainer>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>{lang==='en' ? 'Photo' : 'Şəkil'}</th>
                        <th>{lang==='en' ? 'Title' : 'Başlıq'}</th>
                        <th>{lang==='en' ? 'Description' : 'Təsvir'}</th>
                        <th>{lang==='en' ? 'EDIT' : 'DƏYİŞİKLİK EDİN'}</th>
                        <th>{lang==='en' ? 'DELETE' : 'SİLİN'}</th>
                    </tr>
                </thead>
                <tbody>
                    {newsdata.map((item, count) => (
                        <tr key={count}>
                            <td>{count + 1}</td>
                            <td><img width={100} src={item.photo} alt={item.title} /></td>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td><Link to={`edit/${slugify(item.title)}`}><Button variant='warning'>{lang==='en' ? 'Edit' : 'Düzəliş edin'}</Button></Link></td>
                            <td ><Button onClick={() => { dispatch(removeNewsFromDatabase( item.id )) }} 
                            variant="danger">X</Button></td>
                        </tr>
                    ))}


                </tbody>
            </Table>

        </div>
    );
}

export default Dashbaord;