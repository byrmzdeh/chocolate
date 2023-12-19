import React, { useContext, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import CustomAlert from '../../src/components/CustomAlert';
import { useNavigate } from 'react-router-dom';
import { LangContext } from '../context/LangContext';

const SignUp = () => {

    const navigate = useNavigate();

    const [passHidden, setPassHidden] = useState(true);
    const [lang] = useContext(LangContext);


    const [alertState, setAlertState] = useState("none");

    const customAlert = () => {
        if (alertState !== "none") {
            if (alertState === "gap") {
                //Ikinci defe gap olanda yeniden alert vermesi ucun statei sifirlayir

                setTimeout(() => {
                    setAlertState("")
                }, 10000);
                return <CustomAlert text="Fill the gap" />;
            }
            if (alertState === "wrong") {
                setTimeout(() => {
                    setAlertState("")
                }, 10000);
                return <CustomAlert text="Belə bir istifadəçi email-i mövcuddur!" />;
            }
            if (alertState === "success") {
                return <CustomAlert text="Uğurla qeydiyyatdan keçdiniz ! " />;
            }

        }
    };



    const users = localStorage.getItem('users');




    const [singUpFormData] = useState({
        user_mail: undefined,
        user_name: undefined,
        user_pass: undefined,
        user_status: "user",
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!singUpFormData.user_mail || !singUpFormData.user_name || !singUpFormData.user_pass) {
            setAlertState("gap")
        } else {



            if (!users) {
                localStorage.setItem('users', JSON.stringify(singUpFormData))
                console.log("hello");
            } else {

                var array = []

                if (typeof (JSON.parse(users)[0]) === 'object') {
                    array = JSON.parse(users)
                } else {
                    array = [JSON.parse(users)]
                }

                const defineUserIsValid = array.find((item) => item.user_mail == singUpFormData.user_mail)
                console.log(defineUserIsValid, "define");
                console.log(array, "array");
                if (defineUserIsValid == undefined) {
                    array.push(singUpFormData);
                    console.log(array);
                    localStorage.setItem('users', JSON.stringify(array))
                    localStorage.setItem('user', JSON.stringify(singUpFormData))
                } else {
                    setAlertState("wrong")
                }
            }
        }
        navigate('/')
        window.location.reload();

    }



    return (
        <>


            <div className="signup-area pt-5 pb-5">
                {passHidden}
                <div className="container d-flex justify-content-center">
                    <div className="signup-form col-lg-6">

                        <form className='p-4' onSubmit={handleSubmit}>
                            <div class="sweet d-flex align-items-center justify-content-center mt-5">
                                <div class="products d-flex align-items-center justify-content-center ">
                                    <p>{lang === 'en' ? 'Chocolate' : 'Şokolad'}</p>
                                </div>
                                <div class="online text-center ">

                                    <h5 class="p2">{lang === 'en' ? 'Create Your Account' : 'Hesabınızı Yaradın'}</h5><span>~~~~~~~~</span>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-12 my-2">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder={lang === 'en' ? 'Username' : 'Istifadəçi Adı'}
                                            onChange={(e) => singUpFormData.user_name = e.target.value}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 my-2">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email" onChange={(e) => singUpFormData.user_mail = e.target.value} />
                                    </div>
                                </div>
                                <div className="col-lg-12 my-2">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" onClick={() => {
                                            setPassHidden(!passHidden);
                                        }}>
                                            <i className={`fa-solid fa-eye${passHidden ? "" : "-slash"}`}></i>
                                        </span>
                                        <input type='password' className="form-control" placeholder={lang === 'en' ? 'Password' : 'Şifrə'}
                                            onChange={(e) => singUpFormData.user_pass = e.target.value}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 my-2">
                                    <div className="send-btn">
                                        <button type="submit" className="orderBtn">
                                            {lang === 'en' ? 'SIGN UP NOW' : 'İNDİ QEYD OLUN'}
                                            <span />
                                        </button>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {customAlert()}
        </>

    )
}

export default SignUp