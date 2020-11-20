import React, { Component } from 'react'

export class Cart extends Component {

    constructor(props){
        super(props)
        this.state = { 
            name: "",
            email: "",
            address:"",
            showCheckout : false 
        };
    }

    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }
    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems
        }
        this.props.createOrder(order);
    }

    render() {
        const { cartItems } = this.props;

        return (
            <div>
                {
                    cartItems.length === 0 ? 
                    (<div className="card-header">Cart is Empty</div> ): 
                    (<div className="card-header">You have {cartItems.length}</div>)
                }
                <div> 
                    <ul className="list-unstyled">
                        {cartItems.map((item)=>( 
                            <li className="media row border border-left-0 border-right-0 border-top-0 py-2" key={item._id}>
                                <img src={item.image} className="mr-3 col-3 pr-0" alt={item.title}></img>
                                <div className="media-body col-9 pl-0">
                                    <h5 className="mt-0 mb-1">{item.title}</h5>
                                    <p>${item.price}x {item.count} </p>
                                    <button onClick={()=> this.props.removeFromCart(item)} className="btn btn-danger btn-sm">Remove</button>
                                 </div>
                            </li>
                        ))}
                    </ul>  
                </div>

                {
                    // cartItems.length > 0 ? 
                    //     (<div className="cartTotal">
                    //         <p> Total: ${cartItems.reduce((a,c) => a+c.price*c.count,0)}</p>
                    //         <button className="btn btn-success">Procced</button>
                    //     </div>) 
                    // : ""

                    cartItems.length !== 0 && (
                        <div className="cartTotal">
                            <p> Total: ${cartItems.reduce((a,c) => a+c.price*c.count,0)}</p>
                            <button onClick = { ()=> {
                                this.setState({showCheckout: true});
                            }} className="btn btn-success">Procced</button>
                        </div>
                    )
                       
                    

                    }

                    <div>
                        {this.state.showCheckout && (
                            <div>

                                <form onSubmit={this.createOrder}>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label>Name</label>
                                            <input type="text" name="name" className="form-control" required onChange={this.handleInput}></input>
                                        </div>  
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label>Email</label>
                                            <input type="email" name="email" className="form-control" required onChange={this.handleInput}></input>
                                        </div>  
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label>Address</label>
                                            <input type="text" name="address" className="form-control" required onChange={this.handleInput}></input>
                                        </div>  
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        )}
                    </div>
            </div>
        )
    }
}

export default Cart
