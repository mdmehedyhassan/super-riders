import React, { useEffect, useState } from 'react';
import ridersData from '../../fakeData/fakeData.json'
import HomeDetail from '../HomeDetail/HomeDetail';
import './Home.css'

const Home = () => {
    const [riders, setRiders] = useState([])
    useEffect(() => {
        setRiders(ridersData)
    },[])
    return (
        <div className="home-main-div">

            {
                <div className='justify-content-center'>
                    <div className="d-flex flex-wrap p-5 justify-content-around">
                        {riders.map(rider => <HomeDetail key={rider.ridersId} rider={rider} ></HomeDetail>)}
                    </div>
                </div>
            }
        </div>
    );
};

export default Home;