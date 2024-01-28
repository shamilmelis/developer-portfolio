import React from 'react'
import '../Projects-Page/index.scss'
import '../Projects-Page/media.scss'
import Aside from "../../Components/Aside";
import MoviedbImg from '../../Images/Projects/moviedb.png'
import TourwebImg from '../../Images/Projects/tourweb.png'
import TeplyeRykiImg from '../../Images/Projects/teplyeryki.png'
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
                                            <a href="https://moviedb-project-seven.vercel.app/" className={'wrapper_link'}></a>
                                            <img src={MoviedbImg} alt="img" className={'project_img'}/>
                                            <p className={'project_descr'}>The MovieDB - сайт по фильмам, сериалам</p>
                                        </div>
                                    </div>
                                    <div className={'col'}>
                                        <div className={'box'}>
                                            <a href="https://best-to-fly.vercel.app/" className={'wrapper_link'}></a>
                                            <img src={TourwebImg} alt="img" className={'project_img'}/>
                                            <p className={'project_descr'}>Best to Fly - сайт по турам</p>
                                        </div>
                                    </div>
                                    <div className={'col'}>
                                        <div className={'box'}>
                                            <a href="https://crm-animal.vercel.app/" className={'wrapper_link'}></a>
                                            <img src={TeplyeRykiImg} alt="img" className={'project_img'}/>
                                            <p className={'project_descr'}>Помощь Животным (CRM) - питомцы в теплые руки</p>
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