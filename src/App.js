import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/portfolio' exact component={Portfolio} />
                        <Route path='/blog' exact component={Blog} />
                        <Route path='/about' exact component={About} />
                        <Route path='/contact' exact component={Contact} />
                    </Switch>
                    <Footer />
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
