import React from 'react';

const Destination = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <div className="bg-light p-5">
                        <label htmlFor="">Pick From</label>
                        <input className="w-100 mb-4" type="text" placeholder="Mirpor 1" />
                        <label htmlFor="">Pick to</label>
                        <input className="w-100 mb-4" type="text" placeholder="Danmondi" />
                        <label htmlFor="">Pick time</label>
                        <input className="w-100 mb-4" type="time" name="" id="" />
                        <br />
                        <button className="btn btn-warning w-100">Search</button>
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