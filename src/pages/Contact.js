import React from 'react'
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import  {Link} from 'react-router-dom';

export default function Contact() {
    return (
        <Hero hero="contactHero">
            <Banner title="Contact us">
                <Link to='/' className='btn-primary'>
                    return home
                </Link>
            </Banner>
        </Hero>
    )
}
