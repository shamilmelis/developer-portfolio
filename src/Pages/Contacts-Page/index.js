import React from 'react'
import '../Contacts-Page/index.scss'
import '../Contacts-Page/media.scss'
import Aside from "../../Components/Aside";
import Footer from "../../Components/Footer";
import {useState, useEffect} from "react";
import axios from "axios";
const ContactsPage = () => {
    const [getDark, setGetDark] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            axios('https://6579c19f1acd268f9af9f4fc.mockapi.io/darkTheme/1')
                .then(res => {
                    setGetDark(res.data)
                })
        }, 500)
    }, [getDark])
    return (
        <div className={getDark.eable === false ? 'wrapper' : 'wrapper dark-theme'}>
            <Aside></Aside>
            <div className={'empty-wrapper'}></div>
            <div className={'content_wrapper'}>
                <main>
                    <section className={'contacts_section'}>
                        <div className={'contacts_container'}>
                            <div className={'contacts_box'}>
                                <h1 className={'contacts_title'}>Контакты 📧</h1>
                                <div className={'contacts_box_inner'}>
                                    <a href="tel:+996995355435" className={'contacts_descr phone'}>+996 (995) 35-54-35</a>
                                    <a href="mailto:akastramormoley1st@mail.ru" className={'contacts_descr inbox'}>akastramormoley1st@mail.ru</a>
                                    <a href="https://t.me/shampano333" className={'contacts_descr telegram'}>t.me/shampano333</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default ContactsPage