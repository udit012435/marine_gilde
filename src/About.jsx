import React from "react";
import access from './assets/Access.jpeg'
import history from './assets/history_img.jpg'
import office from './assets/Office.jpg'



export const About = () => {
  return (
    <>
      <div className='bg-light mt-4 py-3'>
      <h1 className="text-center bg-light">About</h1>
      <p className=" text-center text-muted">Marine glide</p>
      </div>
        <div id="about" className="container mt-5 mb-3">
        <div className="row">
          <div className="col-md-4">
            <div id="cardteam" className="card shadow" style={{ width: '18rem' }}>
              <img src={office} className="card-img-top" alt="Our office" />
              <div className="card-body">
                <h5 className="card-title">Our Office</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="text-end">
                  <button className="btn btn-danger px-4 py-1 mt-3 mb-2" style={{ fontSize: '0.8rem', marginLeft: '3rem' }}>Learn more...</button>
                </div>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div id="cardteam" className="card shadow" style={{ width: '18rem' }}>
              <img src={history} className="card-img-top" alt="Our History" style={{ height: '150%' }} />
              <div className="card-body">
                <h5 className="card-title">Our History</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="text-end">
                  <button className="btn btn-danger px-4 py-1 mt-3 mb-2" style={{ fontSize: '0.8rem', marginLeft: '3rem' }}>Learn more...</button>
                </div>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div id="cardteam" className="card shadow" style={{ width: '18rem' }}>
              <img src={access} className="card-img-top" alt="Access" style={{ height: '60%' }} />
              <div className="card-body">
                <h5 className="card-title">Access</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="text-end">
                  <button className="btn btn-danger px-4 py-1 mt-3 mb-2" style={{ fontSize: '0.8rem', marginLeft: '3rem' }}>Learn more...</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};