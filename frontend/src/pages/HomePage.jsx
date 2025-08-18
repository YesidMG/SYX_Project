import { useState } from 'react';
import HomeTitle from '../components/HomeTitle'
import EntityFilter from '../components/EntityFilter'
import ComplaintList from '../components/ComplaintList'
import './HomePage.css'

export default function HomePage() {
    const [filter, setFilter] = useState("Todas");
    return (
        <div className='home-page'>
            <header className='title'><HomeTitle /></header>
            <main className="main-content">
                <div className='filter-bar'><EntityFilter onChange={setFilter} /></div>
                <div className='content'><ComplaintList entity={filter} /></div>
            </main>
            <footer className='footer'><h3>Footer</h3><h3>Footer</h3></footer>
        </div>
    );
}
