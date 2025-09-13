import { useState } from 'react';
import HomeTitle from '../../components/HomeTitle/HomeTitle'
import EntityFilter from '../../features/entities/EntityFilter'
import ComplaintList from '../../features/complaints/ComplaintList'
import './HomePage.css'

export default function HomePage() {
    const [filter, setFilter] = useState("Todas");
    return (
        <div className='home-page'>
            <div className='filter-bar'>
                <EntityFilter onChange={setFilter} />
            </div>
            <div className="main-content">
                <HomeTitle className='home-title'/>
                <ComplaintList className='complaints-container' entity={filter} />
            </div>
        </div>
    );
}
