import React from "react"
// import './App.css';
import data from '../src/data.json';
import Products from '../src/Component/Products';
import Filter from "./Component/Filter";
 class App extends React.Component {


    constructor(){
        super();
        this.state = {
            products : data.products,
            size : "",
            sort : "",
        };
    }

    filterProducts = (event) => {
        console.log(event.target.value);
        if (event.target.value === ""){
            this.setState ({size: event, product: data.products});
        }else {
            this.setState ({
                size : event.target.value,
                products: data.products.filter(
                    (product) => product.availableSize.indexOf(event.target.value) >= 0
                  ),
            });
        }
    }
    sortProducts = (event) => {
        console.log(event.target.value);
        const sort = event.target.event;
        this.setState((state) => ({
            sort: sort,
            products : this.state.products.slice().sort((a,b) => (
                sort === "lowest" ? ((a.price < b.price) ? 1:-1):
                sort === "highest" ? ((a.price > b.price) ? 1:-1):
                ((a._id > b._id)) ? 1: -1
            ))
        }));
    
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
                            <div className="filter">
                                <Filter 
                                    count={this.state.products.length}
                                    size = {this.state.size}
                                    sort = {this.state.sort}
                                    filterProducts = {this.filterProducts}
                                    sortProducts   = {this.sortProducts}
                                > 
                                </Filter>
                            </div>
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