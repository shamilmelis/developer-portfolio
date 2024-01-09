import React from 'react'
import '../Blogs-Page/index.scss'
import '../Blogs-Page/media.scss'
import Aside from "../../Components/Aside";
import Footer from "../../Components/Footer";
const BlogsPage = () => {
    return (
        <div className={'wrapper'}>
            <Aside></Aside>
            <div className={'empty-wrapper'}></div>
            <div className={'wrapper_content'}>
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
                                            <h1 className={'blog_name'}>Подготовка к экзаменам | ОРТ</h1>
                                            <p className={'blog_descr'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae excepturi illo modi molestias sed. Asperiores assumenda ipsum optio quasi ullam!</p>
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
                                            <h1 className={'blog_name'}>Подготовка к экзаменам | ОРТ</h1>
                                            <p className={'blog_descr'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae excepturi illo modi molestias sed. Asperiores assumenda ipsum optio quasi ullam!</p>
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
                                            <h1 className={'blog_name'}>Подготовка к экзаменам | ОРТ</h1>
                                            <p className={'blog_descr'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae excepturi illo modi molestias sed. Asperiores assumenda ipsum optio quasi ullam!</p>
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