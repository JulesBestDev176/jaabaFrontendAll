import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Container = ({ categories, utilisateurs, roles, paniers, produits }) => {

    return (
        <>
            <Header categories={categories} utilisateurs={utilisateurs} roles={roles} paniers={paniers} produits={produits} />
            <div style={{ marginTop: '200px' }}> {/* Ajuste la valeur selon la hauteur de ton header */}
                <Outlet />
            </div>
            <Footer />

        </>
    )
}

export default Container
