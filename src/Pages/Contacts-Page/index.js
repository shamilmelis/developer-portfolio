import React from 'react'
import '../Contacts-Page/index.scss'
import '../Contacts-Page/media.scss'
import Aside from "../../Components/Aside";
import Footer from "../../Components/Footer";
import {useState} from "react";
const ContactsPage = () => {
    const [modeSelect, setModeSelect] = useState(false)
    return (
        <div className={modeSelect === false ? 'wrapper' : 'wrapper dark-theme'}>
            <Aside modeSelect={modeSelect} modeSelected={setModeSelect}></Aside>
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