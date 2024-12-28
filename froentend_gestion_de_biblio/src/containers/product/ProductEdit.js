import React, { Component } from 'react'
import { connect } from 'react-redux'
import { productCreate, productUpdate, productFetch } from '../../actions'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductForm from '../../components/product/ProductForm'

class ProductEdit extends Component {

    componentDidMount() {
        if(this.props.match.params.id) {
            this.props.productFetch(this.props.match.params.id)
        }
    }


    render() {
        const { formValues, match, products, productCreate, productUpdate } = this.props
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="col-md-5">
                    {match.path.indexOf('add') > 0 && (
                        <div>
                            <h2>Ajouter</h2>
                            {products.saved && 
                                <div className="alert alert-secondary title" role="alert">
                                    {products.msg}
                                </div>
                            }
                            <ProductForm onProductSubmit={ () => productCreate(formValues) } />
                        </div>
                        
                    )}
                    {match.path.indexOf('edit') > 0 && (
                        <div>
                            <h2>Modifier</h2>
                            {products.saved && 
                                <div className="alert alert-secondary title" role="alert">
                                    {products.msg}
                                </div>
                            }
                            <ProductForm onProductSubmit={ () => productUpdate(products.id, formValues) } />
                        </div>
                    )}
                    </div>
                </div>
                
                <Footer />
            </div>
        )
    }
}

function mapStateToProps({form, products}){
    return { 
        formValues: form.ProductForm 
        ? form.ProductForm.valuse 
        : null, 
        products
    }
}

export default connect(mapStateToProps, { productCreate, productUpdate, productFetch })(ProductEdit)
