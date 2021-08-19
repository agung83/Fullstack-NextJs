import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ title, children }) {


    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="https://ppdb.sumbarprov.go.id/sumbar.ico" />
            </Head>
            <Navbar />


            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}
