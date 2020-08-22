import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assets/img/logo.jpg'

const Navbar = () => {

	const toggleClass = () => {
		// setLoading(true)
		document.querySelector('.navbar-collapse').classList.toggle('show');
	}
	return (
		<>
		  {/*<!-- navbar -->*/}
		  <nav className="navbar navbar-expand-lg navbar-light navbar-center">
		  	<div className="container-fluid">
			    <Link className="navbar-brand" to="/">
			      <img src={logo} width="30" height="30" className="d-inline-block align-top rounded-circle" alt="logo Perusahaan" loading="lazy"></img>
			      <span className="ml-3">CCTV</span>
			    </Link>
			    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse navbar-collapse nav-left" id="navbarNavAltMarkup">
			      <div className="navbar-nav">
			      	<Link className="nav-link" onClick={toggleClass} exact to="/">Home</Link>
			      	<Link className="nav-link" onClick={toggleClass} exact to="/product">Product</Link>
			      	<Link className="nav-link" onClick={toggleClass} exact to="/about">About</Link>
			      	<Link className="nav-link" onClick={toggleClass} exact to="/contact">Contact Us</Link>
				  </div>	
		      </div>
		    </div>
		  </nav>
		  {/*<!-- end navbar -->*/}			
	  	</>
	)
}

export default Navbar;