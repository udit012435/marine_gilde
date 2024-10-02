
import React from 'react';
import img from './assets/login_img_1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className='container-fluid mt-5 mb-5'>
    <div className="card mb-3 shadow" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title text-center">Create Account</h1>
            <p className="card-text text-center">
             Simplify your workflow and boost your productivity
             With "Tuga's App." Get started for free.
            </p>
            <form>
            {/* <div className=' align-items-center'> */}
            <div className="mb-3 mx-5">
                  <input type="text " style={{ width: '100%',borderRadius: '20px' }} className="form-control" id="name" placeholder="   Name" />
            </div>
            <div className="mb-3 mx-5">
                  <input type="text" style={{ width: '100%',borderRadius: '20px' }} className="form-control" id="email" placeholder="   Email I'd" />
            </div>
            <div className="mb-3 mx-5">
                  <input type="text" style={{ width: '100%',borderRadius: '20px' }} className="form-control" id="password" placeholder="   Password" />
            </div>
            {/* </div> */}
            <div className="mb-3 text-center">
                  <button className='btn btn-dark' style={{ width: '75%', borderRadius: '20px' }} >Sign Up</button>
            </div>
                <div className='text-center'>

                <hr />or continue with
                </div>
                <div className="mt-3 text-center">
                <a href="https://www.google.com" style={{ fontSize: '2rem', cursor: 'pointer'}} ><FontAwesomeIcon icon={faGoogle} className="me-3"/></a>
                <a href="https://www.apple.com" style={{ fontSize: '2rem', cursor: 'pointer'}} ><FontAwesomeIcon icon={faApple} className="me-3" /></a>
                <a href="http://www.facebook.com" style={{ fontSize: '2rem', cursor: 'pointer'}} ><FontAwesomeIcon icon={faFacebook} className="me-3" /></a>
                </div>
                
            </form>
            <p className='card-text mt-5 text-center' >Aleady a member?<Link to="/" className="text-decoration-none fw-bold"> Login Page</Link></p>
          </div>
        </div>
        <div className="col-md-4">
          <img src={img} style={{maxWidth:'100%' , height: '500px', }} className="img-fluid rounded-start" alt="..." />
        </div>
      </div>
    </div>
    </div>
  );
};