import React from 'react'
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import  {Link} from 'react-router-dom';

export default function Services() {
    return (
        <Hero hero="serviceHero">
            <Banner title="Our Services">
                <Link to='/' className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
    )
}
