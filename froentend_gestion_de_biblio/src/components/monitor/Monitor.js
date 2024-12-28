import React, { Component } from 'react'
import Calculator from './Calculator'
import ProductList from '../product/ProductList'
import axios from 'axios'

class Monitor extends Component {
    state = {
        totalPrice : 0,
        orders: [],
        confirm: false,
        msg: ''
    }
    constructor() {
        super()
        this.addOrder = this.addOrder.bind(this)
        this.delOrder = this.delOrder.bind(this)
        this.cancelOrder = this.cancelOrder.bind(this)
        this.confirmOrder = this.confirmOrder.bind(this)
    }

    addOrder(product) {
        let findOrder = this.state.orders.find( 
            order => order.product.id === product.id
        )

        if(!findOrder) {
            this.state.orders.push({
                product: product,
                quantity: 1
            })
        } else {
            findOrder.quantity++
        }

        let totalPrice = this.state.totalPrice + parseInt(product.unitPrice, 10)
        this.setState({
            totalPrice : totalPrice,
            orders: this.state.orders,
            confirm: false
        })
    }

    delOrder(product) {
        let findOrder = this.state.orders.find( 
            order => order.product.id === product.id
        )
        let rsOrder = this.state.orders.filter(
            order => order.product.id !== product.id
        )
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice, 10))
        this.setState({
            totalPrice: totalPrice,
            orders: rsOrder,
            confirm: false
        })
    }

    confirmOrder() {
        const {totalPrice, orders} = this.state
        if(orders && orders.length > 0) {
            axios.post('http://localhost:3001/orders', {
                orderedDate: new Date(),
                totalPrice,
                orders
            })
            .then( res => {
                this.setState({
                    totalPrice: 0,
                    orders: [],
                    confirm: true,
                    msg: 'La commande a été enregistrée avec succès'
                })
            })
        } else {
            this.setState({
                totalPrice: 0,
                orders: [],
                confirm: true,
                msg: 'Veuillez sélectionner un produit'
            })
        }
    }

    cancelOrder() {
        this.setState({
            totalPrice: 0,
            orders: [],
            confirm: false
        })
    }

    render() {
        return (
            <div className="container-fluid">
            {this.state.confirm &&
                <div className="row">
                    <div className="col-12">
                        <div className="alert alert-secondary tile text-right" role='alert'>
                            {this.state.msg}
                        </div>
                    </div>
                </div>
            }
                <div className="row">
                    <div className="col-md-9">
                        <ProductList products={this.props.products} addOrder={this.addOrder} />
                    </div>
                    <div className="col-md-3">
                        <Calculator 
                            totalPrice={this.state.totalPrice} 
                            orders={this.state.orders} 
                            delOrder={this.delOrder} 
                            cancelOrder={this.cancelOrder}
                            confirmOrder={this.confirmOrder}
                        />
                    </div>
                </div>
            </div>

        )
    }
}

export default Monitor