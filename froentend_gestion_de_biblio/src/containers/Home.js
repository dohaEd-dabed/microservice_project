import React, { Component } from 'react'
import Header from '../components/Header'
import Monitor from '../components/monitor/Monitor'
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import { productsFetch } from '../actions/index'


class Home extends Component {

    componentDidMount() {
        this.props.productsFetch()
    }

    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Monitor products={this.props.products} />
                <Footer />
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         products: state.products
//     }
// }

function mapStateToProps({products}) {
    return {
        products
    }
}


export default connect(mapStateToProps, {productsFetch})(Home)
