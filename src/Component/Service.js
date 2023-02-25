import React, { Suspense } from 'react'
import { Link,Outlet } from 'react-router-dom'
import { Triangle } from  'react-loader-spinner'
import './Ser.css';
const OtherComponent = React.lazy(() => import('./Splin'));

function Service() {
  return (
<>
<Suspense fallback={<div><Triangle
  height="380"
  width="380"
  color="#ff612f"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/></div>}>
        <OtherComponent />
      </Suspense>
<section className="services-section mt-5">
  <div className="container-full">
    <div className="row">
      <div className="col">
       
      </div>
    </div>
    <div className="services-row">
      <div
        className="service-col"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80")'
        }}
      >
         <Link to="/Service/Web">
          <div className="service-container">
            <div className="service-content">
              <h3 className="style-h5">Website Development</h3>
           
            </div>
            <div className="link-container">
              <div className="link-text">View Service</div>
              <div className="link-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div
        className="service-col"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://themes.envytheme.com/cyarb/wp-content/uploads/2021/07/resources2.jpg")'
        }}
      >
       <Link to="/Service/Cyber"> 
          <div className="service-container">
            <div className="service-content">
              <h3 className="style-h5">Cyber Security</h3>
            
            </div>
            <div className="link-container">
              <div className="link-text">View Service</div>
              <div className="link-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div
        className="service-col"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://media.istockphoto.com/photos/global-connection-picture-id1335295270?s=612x612")'
        }}
      >
        <Link to="/Service/Cloud">
          <div className="service-container">
            <div className="service-content">
              <h3 className="style-h5">Cloud Computing</h3>
           
            </div>
            <div className="link-container">
              <div className="link-text">View Service</div>
              <div className="link-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div
        className="service-col"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://templates.envytheme.com/bahama/default/assets/img/blog-img4.jpg")'
        }}
      >
        <Link to='/Service/Networking'>
          <div className="service-container">
            <div className="service-content">
              <h3 className="style-h5">Networking</h3>
            
            </div>
            <div className="link-container">
              <div className="link-text">View Service</div>
              <div className="link-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
</section>



<div className='ser'>

     
<hr  style={{
color:'#080a3c',
    backgroundColor: '#13c4a1',
    height: 6,
    borderColor : '#000000'
}}/>
       
     <Outlet/>
    </div>
</>
  )
}

export default Service







