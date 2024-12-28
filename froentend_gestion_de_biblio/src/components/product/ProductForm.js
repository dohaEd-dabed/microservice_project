import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import FormField from '../common/FormField'
import { productFormFields } from './FormFields'

class ProductForm extends Component {

    renderFields(productFormFields) {
        return productFormFields.map(({label, name, type, required}, i) => {
            return (
                <Field key={i} label={label} name={name} type={type} required={required} component={FormField} />
            )
        })
    }

    render() {
        const {onProductSubmit} = this.props
        // console.log(onProductSubmit)
        return (
            <form onSubmit={this.props.handleSubmit(onProductSubmit)} >
                {this.renderFields(productFormFields)}
                <button className='btn btn-block btn-info title' type='submit'>Enregistrer</button>
            </form>
        )
    }
}

function validate(values) {
    console.log(values)
    const errors = {}
    productFormFields.forEach(({ name, required }) => {
        if(!values[name] && required) {
            errors[name] = 'Veuillez remplir des informations nécessaires'
        }
    })
    return errors
}

function mapStateToProps({ products }){
    if(products && products.id){
        return { initialValues : products }
    }else{
        return {}
    }
}

ProductForm = reduxForm({ validate, form : 'productForm'})(ProductForm)

export default connect(mapStateToProps)(ProductForm)