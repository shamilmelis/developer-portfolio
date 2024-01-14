import React, {useEffect} from "react";
import '../Aside/index.scss'
import '../Aside/media.scss'
import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
const Aside = () => {
    const [menu, setMenu] = useState(false)
    const [modeSelect, modeSelected] = useState(false)
    const [dark, setDark] = useState(false)
    const modeSelectFn = () => {
        modeSelected(!modeSelect)
        axios.put(`https://6579c19f1acd268f9af9f4fc.mockapi.io/darkTheme/1`, {eable: modeSelect})
            .then(res => {
                setDark(res.data.eable ? modeSelect : res.data.eable)
                console.log(dark)
            })
    }


    const menuFunction = () => {
        setMenu(!menu)
    }
    return (
        <aside className={menu === true ? 'aside Opened' : 'aside'}>
            <div className={'aside-container'}>
                <div className={'info_box'}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="person-img" className={'info_box_avatar'}/>
                    <div className={'info_box_position'}>
                        <span className={'person_name'}>Shamil Melisov</span>
                        <span className={'person_position'}>Front End Developer</span>
                    </div>
                    <div className={'burger_box'}>
                        <button onClick={() => menuFunction()}><i className="fa-solid fa-bars-staggered"></i></button>
                    </div>
                </div>
                <div className={'routes_box'}>
                    <div className={'routes_inner_box'}>
                        <Link className={'route_link'} to={'/'}></Link>
                        <i className="fa-solid fa-user"></i>
                        <span className={'routes_name'}>Главная</span>
                    </div>
                    <div className={'routes_inner_box'}>
                        <Link className={'route_link'} to={'/projects'}></Link>
                        <i className="fa-solid fa-briefcase"></i>
                        <span className={'routes_name'}>Проекты</span>
                    </div>
                    <div className={'routes_inner_box'}>
                        <Link className={'route_link'} to={'/blog'}></Link>
                        <i className="fa-solid fa-list"></i>
                        <span className={'routes_name'}>Блог</span>
                    </div>
                    <div className={'routes_inner_box'}>
                        <Link className={'route_link'} to={'/contacts'}></Link>
                        <i className="fa-solid fa-address-card"></i>
                        <span className={'routes_name'}>Контакты</span>
                    </div>
                </div>
                <div className={'mode_box'}>
                    <div className={dark === false ? 'mode_box_inner' : (dark === true ? 'mode_box_inner dark' : 'mode_box_inner')}>
                        <button className={'mode_button'} onClick={() => modeSelectFn()}></button>
                        <div className={'mode_box_inner_box'}>
                            <span className={'mode_wrapper'}>{dark === false ? <i className="fa-solid fa-moon"></i> : (dark === true ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Aside