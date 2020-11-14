import React, {Component} from "react"
// import formateCurrent from "../Utils";

class Products extends Component {
    render(){
        return (
        //    <div> 
                <div className="products row"> 
                   {this.props.products.map(product => (
                    //    console.log(product) 
                        
                        <div className="col-lg-4 pb-4" key={product._id}>
                            <a href={"#" + product._id} className="border d-block"> 
                                <img src="..." className="card-img-top" alt="..."></img>
                                <div className="card-body p-3">
                                    <h5 className="card-title mb-1">{product.title}</h5>
                                    <p className="card-text mb-1">{product.description}</p>
                                    <p className="card-text mb-1">${product.price}</p>
                                    <a href="" className="btn btn-primary">Add to Cart</a>
                                </div> 
                            </a>  
                        </div> 
                       
                   ))} 
                </div>
        //    </div>
        );
    }
}

export default Products;