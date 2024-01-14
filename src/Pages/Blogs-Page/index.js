import React from 'react'
import '../Blogs-Page/index.scss'
import '../Blogs-Page/media.scss'
import Aside from "../../Components/Aside";
import Footer from "../../Components/Footer";
import {useState} from "react";
const BlogsPage = () => {
    const [text, setText] = useState('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nesciunt!')
    const [descrText, setDescrText] = useState('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae excepturi illo modi molestias sed. Asperiores assumenda ipsum optio quasi ullam!')
    const [modeSelect, setModeSelect] = useState(false)
    return (
        <div className={modeSelect === false ? 'wrapper' : 'wrapper dark-theme'}>
            <Aside modeSelect={modeSelect} modeSelected={setModeSelect}></Aside>
            <div className={'empty-wrapper'}></div>
            <div className={'content_wrapper'}>
                <main>
                    <section className={'blog_section'}>
                        <div className={'blog_container'}>
                            <div className={'blog_box'}>
                                <h1 className={'blog_title'}>Блоги 📰</h1>
                                <div className={'blog_row'}>
                                    <div className={'col'}>
                                        <div className={'box'}>
                                            <a href="#" className={'wrapper_link'}></a>
                                            <div className={'blog_info'}>
                                                <img src="https://img.freepik.com/free-photo/young-afro-american-man-speak-phone-while-sitting-green-grass-with-laptop-city-street_231208-5493.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699056000&semt=ais" alt="photo" className={'blog_author_avatar'}/>
                                                <span className={'blog_author'}>Шамиль Мелисов</span>
                                            </div>
                                            <h1 className={'blog_name'}>{text.length > 38 ? text.substring(0, 38) + '...' : text}</h1>
                                            <p className={'blog_descr'}>{descrText.length > 180 ? descrText.substring(0, 180) + '...' : descrText}</p>
                                            <span className={'blog_time'}>16:24</span>
                                        </div>
                                    </div>
                                    <div className={'col'}>
                                        <div className={'box'}>
                                            <a href="#" className={'wrapper_link'}></a>
                                            <div className={'blog_info'}>
                                                <img src="https://img.freepik.com/free-photo/young-afro-american-man-speak-phone-while-sitting-green-grass-with-laptop-city-street_231208-5493.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699056000&semt=ais" alt="photo" className={'blog_author_avatar'}/>
                                                <span className={'blog_author'}>Шамиль Мелисов</span>
                                            </div>
                                            <h1 className={'blog_name'}>{text.length > 38 ? text.substring(0, 38) + '...' : text}</h1>
                                            <p className={'blog_descr'}>{descrText.length > 180 ? descrText.substring(0, 180) + '...' : descrText}</p>
                                            <span className={'blog_time'}>16:24</span>
                                        </div>
                                    </div>
                                    <div className={'col'}>
                                        <div className={'box'}>
                                            <a href="#" className={'wrapper_link'}></a>
                                            <div className={'blog_info'}>
                                                <img src="https://img.freepik.com/free-photo/young-afro-american-man-speak-phone-while-sitting-green-grass-with-laptop-city-street_231208-5493.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699056000&semt=ais" alt="photo" className={'blog_author_avatar'}/>
                                                <span className={'blog_author'}>Шамиль Мелисов</span>
                                            </div>
                                            <h1 className={'blog_name'}>{text.length > 38 ? text.substring(0, 38) + '...' : text}</h1>
                                            <p className={'blog_descr'}>{descrText.length > 180 ? descrText.substring(0, 180) + '...' : descrText}</p>
                                            <span className={'blog_time'}>16:24</span>
                                        </div>
                                    </div>
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

export default BlogsPage