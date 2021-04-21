import React, {Component} from 'react';
import Navbar from './navbar';
import Head from 'next/Head';
class About extends React.Component{
      static getInitialProps({query}){
      return {query}
    }
  render(){
    return(
            <>
             <Head>
                <title>About</title>
              </Head> 
              <Navbar/>
              <div className="container">
             
               <h3 className="text-info">This is About Page</h3>
                <img src="/images/apple.jpg" height="150" width="150"/><br/>
               <button className="btn btn-success btn-sm ml-4">Buy Now</button>
               <p>{JSON.stringify(this.props.query)}</p>
               </div>
            </>
          );
  }
}
export default About;