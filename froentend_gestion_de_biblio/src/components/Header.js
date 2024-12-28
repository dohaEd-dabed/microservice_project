import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    state = {
        date : new Date()
    }
    componentDidMount() {
       this.timerId = setInterval( () => this.setTimeToState(), 1000 )
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }
    setTimeToState() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div className="row mt-3">
                <div className="col-12 col-md-4">
                    <h1 className="text-info"><img style={ {height: '50px'} } src="/images/logo.png" alt="Logo"/> swika</h1>
                </div>
                <div className="col-12 col-12 col-md-4 col-lg-7 text-right">
                    <ul className="list-inline pt-3">
                        <li className="list-inline-item title"><Link className="text-info" to="/">Page d'accueil</Link></li>
                        <li className="list-inline-item title">|</li>
                        <li className="list-inline-item title"><Link className="text-info" to="/order">Passer une commande</Link></li>
                        <li className="list-inline-item title">|</li>
                        <li className="list-inline-item title"><Link className="text-info" to="/product">Produit</Link></li>
                        <li className="list-inline-item title">|</li>
                        <li className="list-inline-item title"><Link className="text-info" to="/about">À propos de nous</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 col-lg-1 text-right">
                    <h5 className="text-muted pt-3">{this.state.date.toLocaleTimeString()}</h5>
                </div>
                <div className="col-12">
                    <hr />
                </div>
            </div> 
        )
    }
}

export default Header