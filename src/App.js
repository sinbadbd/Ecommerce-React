import React from "react"
// import './App.css';
import data from '../src/data.json';
import Products from '../src/Component/Products';
 class App extends React.Component {


    constructor(){
        super();
        this.state = {
            products : data.products,
            size : "",
            sort : "",
        };
    }

     render() {
        return ( 
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                        </li> 
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <h4>Product List</h4>
                            <Products products={this.state.products}></Products>
                        </div>
                        <div className="col-lg-3">
        
                        </div>
                    </div>
                </div>
            </div>
         );
     }

 }

 export default App;