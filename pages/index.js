import React, {Component} from 'react';
import Navbar from './navbar';
import Head from 'next/Head';

export async function getStaticProps(){
    return {
      props: {
        API_KEY : 'XXXXXYYXXX'
      }
    }
  }
class First extends React.Component{

  render(){
    return(
            <>
         
              <Head>
                <title>Home</title>
                <link rel="icon" href="images/apple.jpg" type="image/x-icon"/>
                <meta name="description" content="Laravel tutorial bangla | Rabbil Hasan is an Expert Web Developer in Bangladesh. He is highly talented, experienced, professional and cooperative software engineer, working in programming and web world for more than 4 years. Moreover Rabbil Hasan has a skilled team for achieving his goal named “Team Rabbil”.Team Rabbil assure you a wide range of quality IT services. "/>
                <meta name="keywords" content="Laravel  tutorial bangla, Expert Web Developer in Bangladesh, Expert Mobile App Developer in Bangladesh, Android App Developer in Bangladesh"/>
                <meta name="author" content="Rabbil Hasan"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              </Head>  
              <Navbar/>
              <div className="container">
                <h3 className="text-success">This is Home page</h3>
              <img src="/images/apple.jpg" height="150" width="150"/><br/>
               <button className="btn btn-success btn-sm ml-4">Buy Now</button>
               <p> Database Name : {this.props.API_KEY}</p>
              </div>
            
            </>
          );
  }
  
}  
export default First;

