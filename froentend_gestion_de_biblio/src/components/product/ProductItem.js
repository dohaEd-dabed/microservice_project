import React, { Component } from 'react'

class ProductItem extends Component {

    render() {
        const {productName, unitPrice, thumbnail} = this.props.product
        return (
            <div className="col-12 col-sm-6 col-md-3">
                <img className="img-fluid img-thumbnail" src={thumbnail} alt="thumbnail" />
                <h5 className="mt-2">{productName}</h5>
                <p className="title text-right">{unitPrice} DH</p>
                
                {
                    this.props.addOrder &&
                    <button 
                        className="btn btn-block btn-secondary title" 
                        value={unitPrice} 
                        onClick={ () => this.props.addOrder(this.props.product) }
                    >
                        Acheter
                    </button>
                }

                {
                    this.props.editProduct &&
                    <button 
                        className="btn btn-info title col-5" 
                        value={unitPrice}
                        onClick={ () => this.props.editProduct(this.props.product) }
                    >
                        Modifier
                    </button>
                    }

                {
                    this.props.delProduct &&
                    <button 
                        className="btn btn-danger title col-5 float-right" 
                        value={unitPrice} 
                        onClick={ () => this.props.delProduct(this.props.product) }
                    >
                       Supprimer
                    </button>
                }

                <hr/>
            </div>
        )
    }
}

export default ProductItem