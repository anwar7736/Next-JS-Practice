import React, {Component} from 'react';
import Navbar from './navbar';
import Head from 'next/Head';
class Service extends React.Component{
  render(){
    return(
            <>
             <Head>
                <title>Services</title>
              </Head>
              <Navbar/>
              <div className="container">

              <h3 className="text-primary">This is Services Page</h3>
               <img src="/images/apple.jpg" height="150" width="150"/><br/>
               <button className="btn btn-success btn-sm ml-4">Buy Now</button>
               </div>
            </>
          );
  }
}
export default Service;