import './App.css';
import Footer from './Components/Reuse/Footer/Footer';
import Navbar from './Components/Reuse/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from './Components/Homepage/Contact/Contact';
import About from './Components/About/About';
import Dashboard from './Components/Dashboard/Dashboard';
import Services from './Components/Homepage/Services/Services';
import Homepage from './Components/Homepage/Homepage/Homepage';

function App() {
    return (
        <>
            <Navbar />
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
