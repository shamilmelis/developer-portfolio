import React from 'react'
import '../Projects-Page/index.scss'
import '../Projects-Page/media.scss'
import Aside from "../../Components/Aside";
import AnimalMeal from '../../Images/Projects/animalmeal.png'
import Footer from "../../Components/Footer";
import {useState, useEffect} from "react";
import axios from "axios";
const ProjectsPage = () => {
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
                    <div className={'projects_section'}>
                        <div className={'projects_container'}>
                            <div className={'projects_row'}>
                                <h1 className={'projects_title'}>Проекты 🗂️</h1>
                                <div className={'projects_row_box'}>
                                    <div className={'col'}>
                                        <div className={'box'}>
                                            <a href="https://korm-dlya-shivotnih.vercel.app/" className={'wrapper_link'}></a>
                                            <img src={AnimalMeal} alt="img" className={'project_img'}/>
                                            <p className={'project_descr'}>Интернет-Магазин - "AnimalMEAL"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default ProjectsPage