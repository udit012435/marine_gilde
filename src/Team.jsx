import React from 'react';
import person from './assets/person-man.webp'

export const Team = () => {
    return (
    <>
        <div className='bg-light mt-4 py-3'>
            <h1 className="text-center bg-light">Our Team</h1>
            <p className=" text-center text-muted">Marine glide</p>
        </div>
     <div className="container mt-5 mb-3" id="team">
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4">
          <div id="cardteam" className="card p-3 mb-2 shadow">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  <img id="team" src={person} alt="" style={{ borderRadius: '10px' }} />
                </div>
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Siddhant</h6>
                  <span>1 day ago</span>
                </div>
              </div>
              <div className="badge">
                <span>Design</span>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                Senior Product
                <br />
                Designer-Singapore
              </h3>
              <div className="mt-5">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '50%' }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="mt-3">
                  <span className="text1">
                    32 Applied <span className="text2">of 50 capacity</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div id="cardteam" className="card shadow p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  <img id='team' src={person} alt="" style={{ borderRadius: '10px' }} />
                </div>
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Udit</h6>
                  <span>4 days ago</span>
                </div>
              </div>
              <div className="badge">
                <span>Product</span>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                Junior Product
                <br />
                Designer-Singapore
              </h3>
              <div className="mt-5">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '50%' }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="mt-3">
                  <span className="text1">
                    42 Applied <span className="text2">of 70 capacity</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div id="cardteam" className="card shadow p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  <img id='team' src={person} alt="" style={{ borderRadius: '10px' }} />
                </div>
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Ankita</h6>
                  <span>2 days ago</span>
                </div>
              </div>
              <div className="badge">
                <span>Design</span>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                Software Architect
                <br />
                Java - USA
              </h3>
              <div className="mt-5">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '50%' }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="mt-3">
                  <span className="text1">
                    52 Applied <span className="text2">of 100 capacity</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div className="container mt-5 mb-3" id="team">
      {/* <h1 className="text-center mb-3">Our Team</h1> */}
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4">
          <div id="cardteam" className="card p-3 mb-2 shadow">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  <img id="team" src={person} alt="" style={{ borderRadius: '10px' }} />
                </div>
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Siddhant</h6>
                  <span>1 day ago</span>
                </div>
              </div>
              <div className="badge">
                <span>Design</span>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                Senior Product
                <br />
                Designer-Singapore
              </h3>
              <div className="mt-5">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '50%' }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="mt-3">
                  <span className="text1">
                    32 Applied <span className="text2">of 50 capacity</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div id="cardteam" className="card shadow p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  <img id='team' src={person} alt="" style={{ borderRadius: '10px' }} />
                </div>
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Udit</h6>
                  <span>4 days ago</span>
                </div>
              </div>
              <div className="badge">
                <span>Product</span>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                Junior Product
                <br />
                Designer-Singapore
              </h3>
              <div className="mt-5">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '50%' }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="mt-3">
                  <span className="text1">
                    42 Applied <span className="text2">of 70 capacity</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div id="cardteam" className="card shadow p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  <img id='team' src={person} alt="" style={{ borderRadius: '10px' }} />
                </div>
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Ankita</h6>
                  <span>2 days ago</span>
                </div>
              </div>
              <div className="badge">
                <span>Design</span>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                Software Architect
                <br />
                Java - USA
              </h3>
              <div className="mt-5">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '50%' }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="mt-3">
                  <span className="text1">
                    52 Applied <span className="text2">of 100 capacity</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div className="container mt-5 mb-3" id="team">
      {/* <h1 className="text-center mb-3">Our Team</h1> */}
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4">
          <div id="cardteam" className="card p-3 mb-2 shadow">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  <img id="team" src={person} alt="" style={{ borderRadius: '10px' }} />
                </div>
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Siddhant</h6>
                  <span>1 day ago</span>
                </div>
              </div>
              <div className="badge">
                <span>Design</span>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                Senior Product
                <br />
                Designer-Singapore
              </h3>
              <div className="mt-5">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '50%' }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="mt-3">
                  <span className="text1">
                    32 Applied <span className="text2">of 50 capacity</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div id="cardteam" className="card shadow p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  <img id='team' src={person} alt="" style={{ borderRadius: '10px' }} />
                </div>
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Udit</h6>
                  <span>4 days ago</span>
                </div>
              </div>
              <div className="badge">
                <span>Product</span>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                Junior Product
                <br />
                Designer-Singapore
              </h3>
              <div className="mt-5">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '50%' }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="mt-3">
                  <span className="text1">
                    42 Applied <span className="text2">of 70 capacity</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div id="cardteam" className="card shadow p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  <img id='team' src={person} alt="" style={{ borderRadius: '10px' }} />
                </div>
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Ankita</h6>
                  <span>2 days ago</span>
                </div>
              </div>
              <div className="badge">
                <span>Design</span>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                Software Architect
                <br />
                Java - USA
              </h3>
              <div className="mt-5">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '50%' }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="mt-3">
                  <span className="text1">
                    52 Applied <span className="text2">of 100 capacity</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div className="container mt-5 mb-3" id="team">
      {/* <h1 className="text-center mb-3">Our Team</h1> */}
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4">
          <div id="cardteam" className="card p-3 mb-2 shadow">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  <img id="team" src={person} alt="" style={{ borderRadius: '10px' }} />
                </div>
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Siddhant</h6>
                  <span>1 day ago</span>
                </div>
              </div>
              <div className="badge">
                <span>Design</span>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                Senior Product
                <br />
                Designer-Singapore
              </h3>
              <div className="mt-5">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '50%' }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="mt-3">
                  <span className="text1">
                    32 Applied <span className="text2">of 50 capacity</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div id="cardteam" className="card shadow p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  <img id='team' src={person} alt="" style={{ borderRadius: '10px' }} />
                </div>
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Udit</h6>
                  <span>4 days ago</span>
                </div>
              </div>
              <div className="badge">
                <span>Product</span>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                Junior Product
                <br />
                Designer-Singapore
              </h3>
              <div className="mt-5">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '50%' }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="mt-3">
                  <span className="text1">
                    42 Applied <span className="text2">of 70 capacity</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div id="cardteam" className="card shadow p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  <img id='team' src={person} alt="" style={{ borderRadius: '10px' }} />
                </div>
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Ankita</h6>
                  <span>2 days ago</span>
                </div>
              </div>
              <div className="badge">
                <span>Design</span>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                Software Architect
                <br />
                Java - USA
              </h3>
              <div className="mt-5">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '50%' }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="mt-3">
                  <span className="text1">
                    52 Applied <span className="text2">of 100 capacity</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    );
};