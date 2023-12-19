import { useState, useContext } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LangContext } from '../../context/LangContext';
import Header from '../../components/Header';

// eslint-disable-next-line react/prop-types
function NewsForm({ sendValue, editnews }) {
    // eslint-disable-next-line react/prop-types
    const [photo, setPhoto] = useState(editnews ? editnews.photo : '');
    // eslint-disable-next-line react/prop-types
    const [title, setTitle] = useState(editnews ? editnews.title : '');
    // eslint-disable-next-line react/prop-types
    const [desc, setDesc] = useState(editnews ? editnews.desc : '');
    const [lang, setLang] = useContext(LangContext)


    const newsSubmited = event => {
        event.preventDefault();
        sendValue({
            photo,
            title,
            desc,
        })
    }
    return (
        <div>
 s
            <Form onSubmit={newsSubmited}>


                <Form.Group className="mb-3" >
                    <Form.Label> {lang === 'en' ? 'Photo' : 'Şəkil'}</Form.Label>
                    <Form.Control value={photo} onChange={e => { setPhoto(e.target.value) }} type="text" placeholder="Enter photo url" />

                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control value={title} onChange={e => { setTitle(e.target.value) }} type="text" placeholder="Enter title" />

                </Form.Group>

                <FloatingLabel controlId="floatingTextarea2" label="Description">
                    <Form.Control
                        as="textarea"
                        onChange={e => { setDesc(e.target.value) }}
                        style={{ height: '100px', "marginBottom": "20px" }}
                        value={desc}
                    />
                </FloatingLabel>
                <Button style={{ backgroundColor: '#c19f5f', border: 'none' }} type="submit">
                {lang === 'en' ? 'ADD' : 'ƏLAVƏ EDİN'}
                </Button>
            </Form>
        </div>
    );
}

export default NewsForm;