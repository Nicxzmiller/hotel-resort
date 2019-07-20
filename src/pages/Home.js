import React from 'react'
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

export default function Home() {
    return (
        <Hero>
            <Banner title="Luxurious rooms" subtitle="delux rooms started at $399">
                <Link to='/rooms' className="btn-primary">
                    Our rooms
                </Link>
            </Banner>
        </Hero>
    )
}
