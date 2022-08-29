import React, { Component } from 'react';
import family from '../images/famillly 1.png'


export default class Demo extends Component {
  render() {
    return (
        <>
         <section  className = "outer-container">
            <div className = "inner-container">
                  <div>
                    <p className="customer-text">Customer</p>
                  </div>
                  <div>
                    <img className="family-img" src={family} alt ="main"/>
                  </div>
            </div>
         </section>
        
        </>
    )
  }
}
