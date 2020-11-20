import React, { Component } from 'react'

export class Cart extends Component {
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
                    cartItems.length > 0 ? 
                        (<div className="cartTotal">
                            <p> Total: ${cartItems.reduce((a,c) => a+c.price*c.count,0)}</p>
                            <button className="btn btn-success">Procced</button>
                        </div>) 
                    : ""
                }

            </div>
        )
    }
}

export default Cart
