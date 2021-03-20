import React from 'react';

const Destination = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <div className="bg-light p-5">
                        <p>Pick From</p>
                        <input type="text" />
                        <p>Pick to</p>
                        <input className="mt-0" type="text" />
                        <br/>
                        <button className="btn btn-warning ">Search</button>
                    </div>
                </div>
                <div className="col-md-8">
                    <img src="https://i.ibb.co/zh3MC60/Map.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Destination;