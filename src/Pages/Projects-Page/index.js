import React from 'react'
import '../Projects-Page/index.scss'
import '../Projects-Page/media.scss'
import Aside from "../../Components/Aside";
import MoviedbImg from '../../Images/Projects/moviedb.png'
import TourwebImg from '../../Images/Projects/tourweb.png'
import Footer from "../../Components/Footer";
import {useState} from "react";
const ProjectsPage = () => {
    const [modeSelect, setModeSelect] = useState(false)
    return (
        <div className={modeSelect === false ? 'wrapper' : 'wrapper dark-theme'}>
            <Aside modeSelect={modeSelect} modeSelected={setModeSelect}></Aside>
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