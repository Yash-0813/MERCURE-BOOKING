import React from 'react'
import "./Home.css";
import Navbar from '../../Components/navbar/navbar';
import Header from '../../Components/header/Header';
import Featured from '../../Components/Featured/Featured';
import PropertyList from '../../Components/PropertyList/PropertyList';
import FeaturedProperties from '../../Components/featuredProperties/FeaturedProperties';
import MailList from '../../Components/mailList/MailList';
import Footer from '../../Components/footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className='homeContainer'>
                <Featured />
                <h1 className='homeTitle'>Browse by property type</h1>
                <PropertyList />
                <h1>Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Home