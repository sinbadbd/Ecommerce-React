import React, {Component} from "react"
// import formateCurrent from "../Utils";
import ProductDetails from '../Component/ProductDetails'
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product : null
        }
    }

    openModal = (product) => {
        this.setState({product});
    };
    colseModal = (product) => {
        this.setState({ product: null })
    }
    render(){
        const { product } = this.state;

        return (
          <div> 
        
        <Fade>
                <div className="products row"> 
                   {this.props.products.map(product => (
                    //    console.log(product) 
                        
                        <div className="col-lg-4 pb-4" key={product._id}>
                            <a href={"#" + product._id} className="border d-block" onClick={ ()=> this.openModal(product)}> 
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
                </Fade>

                {product && (
                    <Modal isOpen={true} onRequestClose={this.colseModal}>
                            <button className="btn btn-primary float-right" onClick={this.colseModal}>X</button>
                            
                            <div className="row">
                                <div className="col-4"> 
                                    <img className="img-fluid" src={product.image}></img>
                                </div>
                                <div className="col-8">
                                    <p>Title:{product.title}</p>
                                    <p>Descrption: {product.description}</p>
                                    
                                    {/* {product.availableSize && (
                                        <button className="btn btn-success">{product.availableSize}</button>
                                    )} */}
                                   
                                    {product.availableSize.map((item)=> (
                                        
                                        <button className="btn btn-success mx-2 col-1">
                                            {item}
                                        </button>
                                    ))}
                                    <p><button className="btn btn-primary mt-4" onClick={()=>  this.props.addToCart(product)}>Add to Cart</button></p>                    
                                </div>
                            </div>
                           <p></p>
                    </Modal>
                )}
          </div>   
        );
        
    }
}

export default Products;