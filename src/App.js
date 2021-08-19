import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Reuse/Navbar/Navbar';
import Dropdown from './Components/Reuse/Dropdown/Dropdown';
import Footer from './Components/Reuse/Footer/Footer';
import Homepage from './Components/Homepage/Homepage/Homepage';
import Services from './Components/Homepage/Services/Services';
import Dashboard from './Components/Dashboard/Dashboard';
import Contact from './Components/Homepage/Contact/Contact';
import About from './Components/About/About';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => { setIsOpen(!isOpen); };

    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false)
                console.log('resized')
            }
        };

        window.addEventListener('resize', hideMenu);

        return () => {
            window.removeEventListener('resize', hideMenu);
        };
    });

    return (
        <>
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/service">
                    <Services />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
            <Footer />
        </>
    );
}

export default App;
