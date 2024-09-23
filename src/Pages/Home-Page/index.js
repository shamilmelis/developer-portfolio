import React from 'react'
import '../Home-Page/index.scss'
import '../Home-Page/media.scss'
import Aside from "../../Components/Aside";
import PersonalImage2 from '../../Images/sham.jpg'
import {useState, useEffect} from "react";
import Footer from "../../Components/Footer";
import axios from "axios";
const HomePage = () => {
    const [blocks, setBlocks] = useState(false)
    const [getDark, setGetDark] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            axios('https://6579c19f1acd268f9af9f4fc.mockapi.io/darkTheme/1')
                .then(res => {
                    setGetDark(res.data)
                })
        }, 500)
    }, [getDark])

    const toggleBlocks = () => {
        setBlocks(!blocks)
    }
    return (
        <div className={getDark.eable === false ? 'wrapper' : 'wrapper dark-theme'}>
            <Aside></Aside>
            <div className={'empty-wrapper'}></div>
            <div className={'content_wrapper'}>
                <main>
                    <section className={'introduce_section'}>
                        <div className={'introduce_container'}>
                            <div className={'introduce_row'}>
                                <div className={'col-6'}>
                                    <div className={'box box_image'}>
                                        <img src={PersonalImage2} alt="photo" className={'developer_img'}/>
                                    </div>
                                </div>
                                <div className={'col-6'}>
                                    <div className={'box box_personal'}>
                                        <h1 className={'developer_personal'}>Хэй👋 - Я Шамиль</h1>
                                        <p className={'developer_descr'}>Разрабатываю веб-сайты и веб-приложения 💻</p>
                                        <p className={'developer_descr'}>Коротко говоря - Фронтендер 🤗</p>
                                        <p className={'developer_descr'}>P.S.. листай дальше</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={'about_section'}>
                        <div className={'about_container'}>
                            <div className={'about_box'}>
                                <img src={PersonalImage2} alt="photo" className={'about_image'}/>
                                <div className={'about_inner_box'}>
                                    <p className={'about_descr'}>
                                        <span
                                            className={'green_markered'}>Добро пожаловать в мое цифровое пространство!</span>
                                    </p>
                                    <p className={'about_descr'}>Я -
                                        <span className={'green_markered'}>Шамиль Мелисов</span>, Front End Developer с
                                        глубокой страстью к созданию исключительного
                                        пользовательского опыта.</p>
                                    <p className={'about_descr'}>За время своей карьеры я приобрел разнообразные навыки
                                        и
                                        острый взгляд на разработку Front End.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={'skills_section'}>
                        <div className={'skills_container'}>
                            <div className={'skills_box'}>
                                <h1 className={'instruments_title'}>Инструменты 🛠️</h1>
                                <div className={'instruments_inner_box'}>
                                    <div className={'col'}>
                                        <div className={'box'}>
                                            <img src="https://www.sublimehq.com/images/sublime_text.png" alt="photo"
                                                 className={'instruments_picture'}/>
                                            <span className={'instruments_name'}>Sublime Text</span>
                                            <div className={'rotate_box_info'}>
                                                <span>Sublime Text</span>
                                                <p>
                                                    Sublime Text — кроссплатформенный текстовый редактор для написания
                                                    программного кода на различных языках программирования (Groovy,
                                                    Erlang,
                                                    C+, Java и т.д.), а также верстки веб-документов.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col'}>
                                        <div className={'box'}>
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
                                                alt="photo" className={'instruments_picture'}/>
                                            <span className={'instruments_name'}>VS Code</span>
                                            <div className={'rotate_box_info'}>
                                                <span>VS Code</span>
                                                <p>
                                                    Visual Studio Code (VS Code) — это редактор кода для разных языков
                                                    программирования. Он относительно немного весит, гибкий и удобный. В
                                                    нем
                                                    можно писать, форматировать и редактировать код на разных
                                                    языках.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col'}>
                                        <div className={'box'}>
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/WebStorm_Icon.svg/1200px-WebStorm_Icon.svg.png"
                                                alt="photo" className={'instruments_picture'}/>
                                            <span className={'instruments_name'}>WebStorm</span>
                                            <div className={'rotate_box_info'}>
                                                <span>WebStorm</span>
                                                <p>
                                                    WebStorm — это интегрированная среда для разработки на JavaScript и
                                                    связанных с ним технологиях. Как и другие IDE JetBrains, WebStorm
                                                    позволяет автоматизировать рутинную работу и легко справляться со
                                                    сложными задачами, делая разработку более увлекательной</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h1 className={'skills_title'}>Навыки 📌</h1>
                                <div className={blocks === false ? 'skills_inner_box' : 'skills_inner_box Show'}>
                                    <div className={'col'}>
                                        <div className={'box'}>
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                                alt="photo" className={'skill_picture'}/>
                                            <span className={'skill_name'}>JavaScript</span>
                                            <div className={'rotate_box_info'}>
                                                <span>JavaScript</span>
                                                <p>
                                                    JavaScript — это интерпретируемый язык программирования, который
                                                    используют для написания frontend- и backend-частей сайтов, а также
                                                    мобильных приложений. Часто в текстах и обучающих материалах
                                                    название
                                                    языка сокращают до JS.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={'col'}>
                                        <div className={'box'}>
                                            <img
                                                src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
                                                alt="photo" className={'skill_picture'}/>
                                            <span className={'skill_name'}>HTML</span>
                                            <div className={'rotate_box_info'}>
                                                <span>HTML</span>
                                                <p>
                                                    HTML — язык разметки гипертекста для структурирования контента на
                                                    странице. Код на HTML говорит браузеру о том, как необходимо
                                                    отобразить
                                                    информацию. Для разметки используются теги, которые помогают
                                                    добавлять
                                                    заголовки, параграфы, списки, ссылки, изображения, видео и
                                                    таблицы.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col'}>
                                        <div className={'box'}>
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                                                alt="photo" className={'skill_picture'}/>
                                            <span className={'skill_name'}>CSS</span>
                                            <div className={'rotate_box_info'}>
                                                <span>CSS</span>
                                                <p>
                                                    CSS — каскадные таблицы стилей, язык, позволяющий менять внешний вид
                                                    HTML-документа, работать со шрифтами, цветами, градиентами и
                                                    анимациями.
                                                    Также CSS позволяет ускорить разработку, так как с его помощью можно
                                                    задавать стили сразу для группы элементов.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col'}>
                                        <div className={'box'}>
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                                                alt="photo" className={'skill_picture'}/>
                                            <span className={'skill_name'}>Bootstrap</span>
                                            <div className={'rotate_box_info'}>
                                                <span>Bootstrap</span>
                                                <p>
                                                    Bootstrap — это бесплатный CSS-фреймворк с открытым исходным кодом,
                                                    предназначенный для быстрой вёрстки адаптивных интерфейсов сайтов и
                                                    веб-приложений с ориентацией на мобильные устройства.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col'}>
                                        <div className={'box'}>
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"
                                                alt="photo" className={'skill_picture'}/>
                                            <span className={'skill_name'}>Sass</span>
                                            <div className={'rotate_box_info'}>
                                                <span>Sass</span>
                                                <p>
                                                    Sass — это метаязык (язык для описания другого языка), который
                                                    упрощает
                                                    и ускоряет написание CSS-кода. Его часто называют препроцессором CSS
                                                    —
                                                    это означает, что Sass имеет свой синтаксис, из которого генерирует
                                                    CSS-код, понятный любому браузеру</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col'}>
                                        <div className={'box'}>
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                                                alt="photo" className={'skill_picture'}/>
                                            <span className={'skill_name'}>React</span>
                                            <div className={'rotate_box_info'}>
                                                <span>React</span>
                                                <p>
                                                    React.js — это библиотека для языка программирования JavaScript с
                                                    открытым исходным кодом для разработки пользовательских интерфейсов.
                                                    Она
                                                    помогает быстро и легко реализовать реактивность — явление, когда в
                                                    ответ на изменение одного элемента меняется все остальное.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col'}>
                                        <div className={'box'}>
                                            <img src="https://iconape.com/wp-content/files/pb/93057/svg/redux.svg"
                                                 alt="photo" className={'skill_picture'}/>
                                            <span className={'skill_name'}>Redux</span>
                                            <div className={'rotate_box_info'}>
                                                <span>Redux</span>
                                                <p>
                                                    Redux — это инструмент для управления состоянием данных и
                                                    пользовательским интерфейсом в приложениях JavaScript с большим
                                                    количеством сущностей. Представляет собой библиотеку JavaScript.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col'}>
                                        <div className={'box'}>
                                            <img src="https://mui.com/static/logo.png" alt="photo"
                                                 className={'skill_picture'}/>
                                            <span className={'skill_name'}>Material UI</span>
                                            <div className={'rotate_box_info'}>
                                                <span>Material UI</span>
                                                <p>
                                                    Material-UI – это крупная библиотека, посредством которой
                                                    разработчики
                                                    создают красивый дизайн без использования CSS-верстки и прописывания
                                                    стилей. В ней находятся React-компоненты, которые дают возможность
                                                    программисту быстро создать устойчивые формы</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className={'show_blocks'}
                                        onClick={() => toggleBlocks()}>{blocks === false ? 'Показать еще' : 'Скрыть'}</button>
                            </div>
                        </div>
                    </section>
                    <section className={'socialmedia_section'}>
                        <div className={'socialmedia_container'}>
                            <h1 className={'socialmedia_title'}>Соц.сети 📲</h1>
                            <div className={'socialmedia_row'}>
                                <div className={'col'}>
                                    <div className={'box'}>
                                        <a href="https://www.weblancer.net/users/shm_HTML/"
                                           className={'wrapper_link'}></a>
                                        <img src="https://www.weblancer.net/img/freelance.png" alt="pic"
                                             className={'socialmedia_img'}/>
                                        <span className={'socialmedia_name'}>Weblancer</span>
                                        <span className={'route_to'}>👉ТЫКАЙ👈</span>
                                    </div>
                                </div>
                                <div className={'col'}>
                                    <div className={'box'}>
                                        <a href="https://habr.com/ru/users/dexr0w/" className={'wrapper_link'}></a>
                                        <img src="https://habr.com/img/habr_ru.png" alt="pic"
                                             className={'socialmedia_img'}/>
                                        <span className={'socialmedia_name'}>Хабр</span>
                                        <span className={'route_to'}>👉ТЫКАЙ👈</span>
                                    </div>
                                </div>
                                <div className={'col'}>
                                    <div className={'box'}>
                                        <a href="https://career.habr.com/dexr0w" className={'wrapper_link'}></a>
                                        <img src="https://career.habr.com/images/career_share.png" alt="pic"
                                             className={'socialmedia_img'}/>
                                        <span className={'socialmedia_name'}>Хабр Карьера</span>
                                        <span className={'route_to'}>👉ТЫКАЙ👈</span>
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

export default HomePage