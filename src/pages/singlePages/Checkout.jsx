import React, { useContext, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { LangContext } from "../../context/LangContext";

const Checkout = () => {
    const navigate = useNavigate();
    const [lang] = useContext(LangContext);
    const [inputGroup] = useState([

        {
            label: "first_name",
            value: "",
        },
        {
            label: "last_name",
            value: "",
        },
        {
            label: "company_name",
            value: "",
        },
        {
            label: "adress_name",
            value: "",
        },

        {
            label: "town_name",
            value: "",
        },

        {
            label: "state_name",
            value: "",
        },

        {
            label: "postcode",
            value: "",
        },

        {
            label: "email_adress",
            value: "",
        },

        {
            label: "phone",
            value: "",
        },
    ]);

    const setInputDataToState = (label, sendData) => {
        for (let i = 0; i < inputGroup.length; i++) {
            if (inputGroup[i].label === label) {
                inputGroup[i].value = sendData;
            }
        }
    };

    const [validation, setValidation] = useState("")


    const checkAllInputs = (inputs) => {

        const emptyInputs = inputs.filter((item) => item.value.length === 0);
        if (emptyInputs.length !== 0) {
            var validationText = "Fill the "
            emptyInputs.map((input) => {
                validationText = validationText + input.label + " , "
            })
            setValidation(validationText)
        } else {
            navigate("/pay")
        }
    }

    console.log(inputGroup.filter((item) => item.length === 0));
    const { items, cartTotal } = useCart();


    if (localStorage.getItem("user")) {
        return (
            <div className="checkout">
                <Header />
                <div className="container pb-5">
                    <hr />
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="billing-details">
                                <h3 className="title pt-2">{lang === 'en' ? 'Billing Details' : 'Ödəniş Təfərrüatları'}</h3>
                                <p className="py-2 text-danger">{validation}</p>
                                <hr />
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>
                                                    {lang === 'en' ? 'Country' : 'Ölkə'}
                                                    <span className="required">*</span>
                                                </label>
                                                <div className="select-box py-3">
                                                    <select className="form-control">
                                                        <option value={5}> {lang === 'en' ? 'United Arab Emirates' : 'Birləşmiş Ərəb Əmirlikləri'}</option>
                                                        <option value={1}>{lang === 'en' ? 'China' : 'Çin'}</option>
                                                        <option value={2}>{lang === 'en' ? 'United Kingdom' : 'Birləşmiş Krallıq'}</option>
                                                        <option value={0}>{lang === 'en' ? 'Germany' : 'Almaniya'}</option>
                                                        <option value={3}>{lang === 'en' ? 'France' : 'Fransa'}</option>
                                                        <option value={4}>{lang === 'en' ? 'Japan' : 'Yaponiya'}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>
                                                    {lang === 'en' ? 'First Name' : 'Ad'}
                                                    <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className="form-control my-3 "
                                                    required
                                                    onChange={(e) =>
                                                        setInputDataToState("first_name", e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>
                                                    {lang === 'en' ? 'Last Name' : 'Soyad'}
                                                    <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control my-3 "
                                                    id="surname"
                                                    onChange={(e) =>
                                                        setInputDataToState("last_name", e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>{lang === 'en' ? 'Company Name' : 'Şirkət Adı'}</label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    className="form-control my-3"
                                                    onChange={(e) =>
                                                        setInputDataToState("company_name", e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <label>
                                                    {lang === 'en' ? 'Address' : 'Adres'}
                                                    <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control my-3"
                                                    id="address"
                                                    onChange={(e) =>
                                                        setInputDataToState("adress_name", e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <label>
                                                    {lang === 'en' ? 'Town / City' : 'Şəhər'}
                                                    <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control my-3"
                                                    id="city"
                                                    onChange={(e) =>
                                                        setInputDataToState("town_name", e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>
                                                    {lang === 'en' ? 'State / County' : 'Ştat'}
                                                    <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control my-3"
                                                    id="state"
                                                    onChange={(e) =>
                                                        setInputDataToState("state_name", e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>
                                                    {lang === 'en' ? 'Postcode / Zip' : 'Post Kodu'}
                                                    <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control my-3"
                                                    id="zip"
                                                    onChange={(e) =>
                                                        setInputDataToState("postcode", e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>
                                                    {lang === 'en' ? 'Email Address' : 'Mail Adresi'}
                                                    <span className="required">*</span>
                                                </label>

                                                <input
                                                    type="email"
                                                    className="form-control my-3"
                                                    id="email"
                                                    onChange={(e) =>
                                                        setInputDataToState("email_adress", e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>
                                                    {lang === 'en' ? 'Phone' : 'Telefon'}
                                                    <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control my-3"
                                                    id="phone"
                                                    onChange={(e) =>
                                                        setInputDataToState("phone", e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="order-details">
                                <h3 className="title pt-2 mb-4">{lang === 'en' ? 'Your Order' : 'Sizin Sifarişiniz'}</h3>
                                <hr />
                                <div className="order-table table-responsive mb-4">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">{lang === 'en' ? 'PRODUCT NAME' : 'Məhsul Adı'}</th>
                                                <th scope="col">{lang === 'en' ? 'Total' : 'Ümumi'}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {items.map((cardItem) => {
                                                console.log(cardItem);
                                                return (
                                                    <tr>
                                                        <td className="product-name">
                                                            <a href="/shop" className="nav-link">
                                                                {cardItem.name}
                                                            </a>
                                                        </td>
                                                        <td className="product-total">
                                                            <span className="subtotal-amount">
                                                                ${cardItem.price}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                            <tr>
                                                <td className="total-price">
                                                    <span>{lang === 'en' ? 'Order Total' : 'Ümumi Sifariş'}</span>
                                                </td>
                                                <td className="product-subtotal">
                                                    <span className="subtotal-amount">${cartTotal}</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                                <button

                                    className="btn btn-warning  fw-bold  py-2 px-5 rounded-5 updateBtn mt-2 col-lg-12"
                                    onClick={() => {
                                        checkAllInputs(inputGroup);
                                    }}
                                >
                                    {lang === 'en' ? 'PLACE ORDER' : 'SİFARİŞ VERİN'}
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    } else {
        return (
            <LinkContainer className='daxil' to="/signin">
                <div className="btn-div d-flex justify-content-center flex-column ">
                    <h2 >{lang === 'en' ? 'You must log in to your account to pay the amount!' : 'Məbləği ödəmək üçün hesabınıza daxil olmalısınız!'}</h2>
                    <button className="mt-5 btn btn-danger text-light fw-bold ">
                        {lang === 'en' ? 'Login' : 'Daxil ol'}
                    </button>
                </div>

            </LinkContainer>
        );
    }
};

export default Checkout;