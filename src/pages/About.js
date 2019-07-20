import React from 'react'
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import  {Link} from 'react-router-dom';

export default function About() {
    return (
        <Hero hero="aboutHero">
            <Banner title="About us">
                <Link to='/' className='btn-primary'>
                    return home
                </Link>
            </Banner>
        </Hero>
    )
}
