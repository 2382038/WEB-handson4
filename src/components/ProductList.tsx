import React from 'react'
import Product from './Product'

const ProductList = () => {
    const products: Product[] = [
        {
            name: 'Laptop',
            description: 'High-performance laptop for work and play',
            price: '$999',
            imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Keyboard',
            description: 'Ergonomic mechanical keyboard for comfortable typing',
            price: '$150',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Printer',
            description: 'High-quality wireless printer for home and office use',
            price: '$200',
            imageUrl: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Camera',
            description: 'Professional camera for stunning photography',
            price: '$800',
            imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Phone',
            description: 'Latest smartphone with advanced features and sleek design',
            price: '$1000',
            imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ]
    return (
        <>
        <h1>Product List</h1>
        {
            products.map ((product, index) => {
                return (
                    <Product key={index} {...product} />
                )
            })
        }
        </>
    )
}

export default ProductList