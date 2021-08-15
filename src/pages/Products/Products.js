import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

function Products() {
  
    const {idProduct} = useParams()

    switch(idProduct){
        case 'allProducts':
            return(
                <div>        
                    <h1>Todos os produtos</h1>
                    <Footer />
                </div>
            )
        case 'sweets':
            return (
                <div>         
                    <h1>Doces</h1>
                    <Footer />
                </div>
            )
        case 'wines':
            return (
                <div>
                    
        
        
                    <Footer />
                </div>
            )
        default:
            return(
                <>
                    <h1>404: Página não encontrada</h1>
                </>
            )
    }            

    
}

export default Products
