import React, { Component } from 'react'

class Calculator extends Component {

    showOrder (orders) {
        if(!orders || orders.length === 0) {
            return <li className="text-right text-muted title">Aucun produit n'a encore été sélectionné</li>
        } else {
            return orders.map( (order, index) => {
                return (
                    <li className="text-right text-success tile" key={index}>
                        {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                        <button 
                            className="btn btn-light btn-sm text-success ml-2" 
                            onClick={ () => this.props.delOrder(order.product)} 
                        >
                            X
                        </button>
                    </li>
                )
            })
        }
    }

    render() {
        const {totalPrice, orders} = this.props
        return (
            <div>
                <h2 className="text-right">{totalPrice}</h2>
                <hr />
                <ul className="list-unstyled">
                    {this.showOrder(orders)}
                </ul>
                <hr />
                <button className="btn btn-block btn-danger tile"  onClick={ () => this.props.confirmOrder() }>Confirmer</button>
                <button className="btn btn-block btn-secondary tile" onClick={ () => this.props.cancelOrder() }>Annuler</button>
            </div>
        )
    }
}

export default Calculator