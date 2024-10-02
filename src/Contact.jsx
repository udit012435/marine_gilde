import React from 'react';
import contact from './assets/contact_us.webp'
// import techteam from './assets/tech-team.jpg'

export const Contact = () => {
  return (
    <>
      <div className='bg-light mt-4 py-3  '>
        <h1 className="  bg-light text-center">Contact Us</h1>
        <p className=" text-center text-muted">Marine glide</p>
      </div>
      <div className="card mb-3 shadow m-3" style={{ maxWidth: '100%', height: 'auto' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={contact} className="img-fluid rounded-start" alt="Contact Us" style={{ height: 'auto' }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card">
                <h5 className="card-title mb-3 mt-3 mx-3">Contact Us</h5>
                <form>
                  <div className="mb-3 mx-3">
                    <input type="text" className="form-control" id="name" placeholder="Name" style={{ width: '80%' }} />
                  </div>
                  <div className="mb-3 mx-3">
                    <input type="text" className="form-control" id="phone" placeholder="Phone no." style={{ width: '80%' }} />
                  </div>
                  <div className="mb-3 mx-3">
                    <input type="email" className="form-control" id="email" placeholder="Email" style={{ width: '80%' }} />
                  </div>
                  <div className="mb-3 mx-3">
                    <textarea className="form-control" id="message" placeholder="Message" style={{ width: '80%', height: '100px' }}></textarea>
                  </div>
                  <div className="mb-3 mx-3">
                    <button className="btn btn-dark" style={{ width: '15%', height: '35px' }}>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};