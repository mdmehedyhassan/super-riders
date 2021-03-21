import React, { useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/fakeData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';

const Destination = () => {
    const [ridersBook, setRidersBook] = useState(true);
    let { name } = useParams();
    const rider = fakeData.find(rides => rides.name === name)

    return (
        <div>
            <div className="row bg-light pt-2 border-top">
                <div className="col-md-6">
                    {ridersBook ? <div className="bg-light p-5">
                        <label htmlFor="">Pick From</label>
                        <input className="w-100 border-info shadow-lg mb-4" type="text" placeholder="Mirpor 1" />
                        <label htmlFor="">Pick to</label>
                        <input className="w-100 border-info shadow-lg mb-4" type="text" placeholder="Danmondi" />
                        <label htmlFor="">Pick time</label>
                        <input className="w-100 border-info shadow-lg mb-4" type="time" name="" id="" />
                        <br />
                        <button onClick={() => setRidersBook(!ridersBook)} className="btn btn-warning w-100">Search</button>
                    </div> : <div className="d-flex flex-column bd-highlight mb-3 bg-light p-5">
                        <div className="mb-2 justify-content-between w-100 d-flex flex-column bg-warning text-light  border border-info bd-highlight rounded-3">
                            <ul>
                                <li>Mirpor 1</li>
                                <li>Danmondi</li>
                            </ul>
                        </div>
                        <div className="p-2 mb-2 justify-content-between w-100 d-flex flex-row shadow-lg  border border-info bd-highlight rounded-pill">
                            <img style={{ width: '30px' }} src={rider.image} alt="" />
                            <p>{rider.name}</p>
                            <p><FontAwesomeIcon icon={faTicketAlt} /> {rider.ticket}</p>
                            <p>${rider.price}</p>
                        </div>
                        <div className="p-2 mb-2 justify-content-between w-100 d-flex flex-row shadow-lg border border-info bd-highlight rounded-pill">
                            <img style={{ width: '30px' }} src={rider.image} alt="" />
                            <p>{rider.name}</p>
                            <p><FontAwesomeIcon icon={faTicketAlt} /> {rider.ticket}</p>
                            <p>${rider.price}</p>
                        </div>
                        <div className="p-2 mb-2 justify-content-between w-100 d-flex flex-row shadow-lg border border-info bd-highlight rounded-pill">
                            <img style={{ width: '30px' }} src={rider.image} alt="" />
                            <p>{rider.name}</p>
                            <p><FontAwesomeIcon icon={faTicketAlt} /> {rider.ticket}</p>
                            <p>${rider.price}</p>
                        </div>
                        <button onClick={() => setRidersBook(!ridersBook)} className="btn btn-secondary w-100">Return Search</button>
                    </div>}

                </div>
                <div className="col-md-6">
                    <img src="https://i.ibb.co/zh3MC60/Map.png" className="w-100" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Destination;