import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const NotFound = () => {
    return (
        <div className="container-fluid">
            <Header />
            <div className="container text-center">
                <h1>404 Not Found</h1>
                <p className="title my-4">ขออภัยไม่พบหน้าที่คุณค้นหา</p>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound