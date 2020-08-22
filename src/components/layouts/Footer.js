import React from 'react';



const Footer = () => {
	return (
		<>
		{/*<!-- footer -->*/}
		  	<section className="contact" id="contact">
			     <div className="container">     
			      <div className="row text-center">
			        <div className="col-sm-4">
			          <h3>Head Office</h3>
			          <p>(Alamat)</p>
			        </div>
			        <div className="col-sm-4">
			          <h3>Hubungi Kami</h3>
			          <p>
			          	<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			            	<path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
			          	</svg> 08981355511
			          </p>
			          <p><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			            <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
			          </svg> syarif@gmail.com</p>
			          <p></p>
			        </div>
			        <div className="col-sm-4 social-media">
			          <h3>Social Media</h3>
			          <a href="#"><i className="fab fa-facebook"></i></a>

			          <a href="#"><i className="fab fa-instagram ig"></i></a>
			        </div>
			        </div>
			    </div>
		    </section>

		    <footer>
		      <div className="container text-center">
		        <div className="row">
		          <div className="col-sm-12">
		            <p>
		            	&copy; copyright 2020  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		            	<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
		            </svg> <a href="https://instagram.com/syarif_jr_01">Syarif Maulana</a> & curlyBrackets all right reserved
		            </p>
		          </div>		          
		        </div>		    
		      </div>
		    </footer>
		{/*<!-- footer -->*/}
		</>
	)
}

export default Footer;