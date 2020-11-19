import React, {Component} from "react"
import {Row, Col} from 'react-bootstrap'
class Filter extends Component {
    render(){
        return (

            <Row>
                <Col md={2}>
                <div className="col-2 filter-result">
                    Total: {this.props.count}
                </div>
                </Col>
                <Col md={5}>
                <select className="custom-select" value={this.props.sort} onChange={this.props.sortProducts}>
                        <option className >Open this select menu</option>
                        <option value="lowest">Lowest Price</option>
                        <option value="highest">Highest Price</option>
                    </select>
                </Col>
                <Col md={5}>
                <select className="custom-select"  value={this.props.size} onChange={this.props.filterProducts}>
                            <option className>Filter size</option>
                            <option value="L">L</option>
                            <option value="M">M</option>
                            <option value="XL">XL</option>
                        </select>
                </Col>
            </Row>
              
        )
    }
}

export default  Filter;