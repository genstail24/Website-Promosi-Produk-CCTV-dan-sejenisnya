import React from 'react';
import imageOne from '../../assets/img/p1.jpg';
import imageTwo from '../../assets/img/p2.jpg';
import imageThree from '../../assets/img/p3.jpg';

const Home = () => {
	return (
	  	<>
		  {/*<!-- carousel -->*/}
		  <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
		    <ol className="carousel-indicators">
		      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
		      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
		      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
		    </ol>
		    <div className="carousel-inner">
		      <div className="carousel-item active">
		        <img src={imageOne} className="d-block w-100" height="550px" alt="..."></img>
		        <div className="carousel-caption d-none d-md-block">
		          <h5>First</h5>
		          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		        </div>
		      </div>
		      <div className="carousel-item">
		        <img src={imageTwo} className="d-block w-100" height="550px" alt="..."></img>
		        <div className="carousel-caption d-none d-md-block">
		          <h5>Second</h5>
		          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		        </div>
		      </div>
		      <div className="carousel-item">
		        <img src={imageThree} className="d-block w-100" height="550px" alt="..."></img>
		        <div className="carousel-caption d-none d-md-block">
		          <h5>Third</h5>
		          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
		        </div>
		      </div>
		    </div>
		    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
		      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		      <span className="sr-only">Previous</span>
		    </a>
		    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
		      <span className="carousel-control-next-icon" aria-hidden="true"></span>
		      <span className="sr-only">Next</span>
		    </a>
		  </div>
		  {/*<!-- end carousel -->*/}

		  {/*<!-- batas -->*/}
		  <div className="batas">
		    <div className="container">
		      <marquee><p>Kami Menyediakan Beberapa Jasa Dan Layanan</p></marquee>
		    </div>
		  </div>
		  {/*<!-- akhir batas -->*/}

		  {/*<!-- konten -->*/}
		  <section className="konten" id="konten">
		    <div className="container">
		      <div className="row">
		        <div className="col-sm-12">
		          <h2 className="text-center ">Layanan</h2>
		          <hr></hr>
		        </div>
		      </div>
		      <div className="row text-center">
		        <div className="col-sm-4">
		          <h3>Instalasi</h3>
		          <a href="jasa.html"><svg width="100px" viewBox="0 0 16 16" className="bi bi-sliders" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		            <path fill-rule="evenodd" d="M14 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM11.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM7 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM4.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9.5 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM11.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
		            <path fill-rule="evenodd" d="M9.5 4H0V3h9.5v1zM16 4h-2.5V3H16v1zM9.5 14H0v-1h9.5v1zm6.5 0h-2.5v-1H16v1zM6.5 9H16V8H6.5v1zM0 9h2.5V8H0v1z"/>
		          </svg></a>
		        </div>
		        <div className="col-sm-4">
		          <h3>Maintenance</h3>
		          <a href="jasa.html"><svg width="100px" viewBox="0 0 16 16" className="bi bi-gear" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		            <path fill-rule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"/>
		            <path fill-rule="evenodd" d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"/>
		          </svg></a>
		        </div>
		        <div className="col-sm-4">
		          <h3>Network</h3>
		          <a href="jasa.html"><svg width="100px" viewBox="0 0 16 16" className="bi bi-hdd-network" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		            <path fill-rule="evenodd" d="M14 3H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
		            <path d="M5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
		            <path fill-rule="evenodd" d="M7.5 10V7h1v3a1.5 1.5 0 0 1 1.5 1.5h5.5a.5.5 0 0 1 0 1H10A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5H.5a.5.5 0 0 1 0-1H6A1.5 1.5 0 0 1 7.5 10zm0 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
		          </svg></a>
		        </div>
		      </div>

		    </div>
		  </section>
		  {/*<!-- akhir konten -->*/}

		  {/*<!-- about -->*/}
		  <section className="tentang">
		    <div className="container text-center"> 
		      <div className="img-caption">
		        <div className="row">
		          <div className="col-sm-12 text-center">
		            <h3>ABOUT</h3>
		            <hr></hr>
		            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		          </div>
		        </div>
		        <div className="row">
		          <div className="col-sm-6">
		            <h3>VISION</h3>
		            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		          </div>
		          <div className="col-sm-6">
		            <h3>MISION</h3>
		            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		          </div>
		        </div>
		      </div>
		    </div>

		    
		    
		  </section>
		  {/*<!-- akhir about -->*/}
	    </>
	)
}

export default Home;