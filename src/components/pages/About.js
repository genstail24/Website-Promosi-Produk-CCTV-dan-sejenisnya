import React from 'react';
					// <h1 className="text-center"> KONTAK KAMI </h1>
					// <p>Head Office</p>
					// <p>(Alamat)</p>
					// <br></br>
					// <br></br>
					// <p>Hubungi Kami</p>
					// <p>Telephone : 08981355511</p>
					// <p>FAK : 08981355511</p>
					// <p>Email : syarif@email.com</p>

const About = () => {
	return (
	  	<>
		  {/*<!-- about -->*/}
			<div className="jumbotron jumbotron-fluid about">
		    	<div className="container bg-light text-dark ">
		    		<div className="row text-center">
		    			<div className="col-lg">
		    				<h1>Alamat</h1>
		    			</div>
		    		</div>
		    		<div className="row">
		    			<div className="col-lg">
		    				<div className="d-block">
		    					<small><i className="fas fa-home"></i>Address</small>
		    					<a href="#">
		    						<p>Jalan yang baik dan benar no 69 dunia ilahi </p>
		    					</a>
		    				</div>
		    				<div className="d-block">
		    					<small><i className="fab fa-whatsapp"></i>Whatsapp</small>
		    					<a href="https://whatsapp.me/343">
		    						<p>+62-838-845-xxx</p>
		    					</a>
		    				</div>
		    				<div className="d-block">
		    					<small><i className="fas fa-envelope"></i>Gmail</small>
		    					<a href="https://gmail.com/343">
		    						<p>iniEmail@gmail.com</p>
		    					</a>
		    				</div>
		    			</div>
		    			<div className="col-lg">
							<div className="embed-reponsive embed-responsive-16by9">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.591216340103!2d107.6548297143173!3d-6.939360269857318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8109c2647c7%3A0xe47eec0775b8d648!2sVocational%20High%20School%2013%20Bandung!5e0!3m2!1sen!2sid!4v1597826112826!5m2!1sen!2sid" width="500" height="380" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
							</div>
		    			</div>
		    		</div>


		    	</div>
			</div>
		  {/*<!-- end about -->*/}
	    </>
	)
}

export default About;