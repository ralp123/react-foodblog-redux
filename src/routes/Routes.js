import React from 'react';
import Navbar from '../components/homepage/Navbar';
import Home from '../components/homepage/Home';
import PostPage from '../components/postpage/PostPage';
import TestPage from '../components/testpage/TestP';
import Blog from '../components/blog/Blog';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import { BrowserRouter, Route} from "react-router-dom";


function Routes() {
    return (   
        <BrowserRouter>
            <Navbar />
           
            <Route exact path="/" component={Home} />

            <Route exact path="/blog" component={Blog} />

            <Route exact path="/post/:postId" component={PostPage} />    

            <Route exact path="/login" component={Login} />   

            <Route exact path="/register" component={Register} /> 
        </BrowserRouter>
    );
}

export default Routes;
