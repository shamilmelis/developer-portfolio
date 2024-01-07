import React from 'react'
import {Routes, Route} from "react-router-dom";
import HomePage from "./Pages/Home-Page";
import ProjectsPage from "./Pages/Projects-Page";
import BlogsPage from "./Pages/Blogs-Page";
import ContactsPage from "./Pages/Contacts-Page";
function App() {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage></HomePage>}></Route>
            <Route path={"/projects"} element={<ProjectsPage></ProjectsPage>}></Route>
            <Route path={'/blog'} element={<BlogsPage></BlogsPage>}></Route>
            <Route path={'/contacts'} element={<ContactsPage></ContactsPage>}></Route>
        </Routes>
    );
}

export default App;
