import React, {Component} from "react"

class Filter extends Component {
    render(){
        return (
             <div className="row py-4">
                 <div className="col-2 filter-result">
                    Total: {this.props.count}
                </div>
                 <div className="col-5 filter-sort">
                    <select className="custom-select" value={this.props.sort} onChange={this.props.sortProducts}>
                        <option className >Open this select menu</option>
                        <option value="1">Lowest Price</option>
                        <option value="2">Highest Price</option>
                    </select>
                 </div>
                 <div className="col-5 filter-size">
                    <select className="custom-select"  value={this.props.size} onChange={this.props.filterProducts}>
                            <option className>Open this select menu</option>
                            <option value="L">L</option>
                            <option value="M">M</option>
                            <option value="XL">XL</option>
                        </select>
                 </div>
             </div>
        )
    }
}

export default  Filter;