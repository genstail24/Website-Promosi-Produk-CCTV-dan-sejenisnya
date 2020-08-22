import React, {useState, useEffect} from 'react';
import './assets/css/style.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import axios from 'axios' 

/*
	SUDAH TERINSTALL bootstrap, axios, redux, react-redux, react-router. TINGGAL DIGUNAKAN!!!
*/

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import About from './components/pages/About';

import CoomingSoon from './components/layouts/ComingSoon';
import NotFound from './components/pages/NotFound';

function App() {
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(() => true)
	}, [])

	// const setLoading = (value) => {
	// 	setIsLoading(() => value)
	// 	alert('ok')
	// }
  return (
  	<BrowserRouter basename={process.env.PUBLIC_URL}>
	    <div className="App">

			{
			isLoading ? (
			<>
	    	<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/product" exact component={Product} />
				<Route path="/about" exact component={About} />
				<Route path="/contact" exact component={CoomingSoon} />
				<Route path="*" exact component={NotFound} />
			</Switch>
			<Footer />
			<a href="https://whatsapp.me?34343434">
				<i className="fab fa-whatsapp-square float-btn"></i>
			</a>
			</>
			) : (
					<div className="loading d-flex justify-content-center align-items-center">
						<div className="lds-hourglass"></div>
						<p>Wait a second...</p>
					</div>
				)
			}
	    </div>
    </BrowserRouter>
  );
}

export default App;
