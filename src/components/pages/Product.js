import React, {useState} from 'react';
import product from '../../assets/img/product1.jpg';

const Product = () => {
	const [elements, setElements] = useState([1, 2, 4, 4, 4, 4]);

	return (
	  	<>
		  {/*<!-- product -->*/}
		  <div className="product">
		    <div className="container">
		      <h2 className="text-center">Product Kami</h2>

		      <hr></hr>
		      <div className="row">
		      	{elements.map(element => {
		      		return (
			      	<div className="col-lg-3 my-2">
				        <div className="card">
				          <img src={product} className="card-img-top" alt="..."></img>
				          <div className="card-body">
				            <h5 className="card-title">Card title</h5>
				            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				          </div>
				          <div className="card-footer">
				            <small className="text-muted">Last updated 3 mins ago</small>
				          </div>
				        </div>
			        </div>
			        )
			       }
			      )}
		      </div>


		    </div>
		  </div>
		  {/*<!-- end product -->*/}
	    </>
	)
}

export default Product;