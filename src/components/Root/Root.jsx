import React from 'react';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Books from '../Books/Books';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Books></Books>
            <Footer></Footer>
        </div>
    );
};

export default Root;