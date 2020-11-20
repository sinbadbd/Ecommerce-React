import React, {Component} from "react"
// import formateCurrent from "../Utils";
import ProductDetails from '../Component/ProductDetails'
class Products extends Component {
    render(){
        return (
        //    <div> 
                <div className="products row"> 
                   {this.props.products.map(product => (
                    //    console.log(product) 
                        
                        <div className="col-lg-4 pb-4" key={product._id}>
                            <a href={"#" + product._id} className="border d-block"> 
                                <img src={product.image} className="card-img-top" alt="..."></img>
                                <div className="card-body p-3">
                                    <h5 className="card-title mb-1">{product.title}</h5>
                                    <p className="card-text mb-1">{product.description}</p>
                                    <p className="card-text mb-1">${product.price}</p>
                                    <button onClick={()=>  this.props.addToCart(product)} type="button" className="btn btn-primary">Add to Cart</button>
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