import React from 'react';

import Hero from '../components/Hero';
import Services from '../components/Services';
import Tips from '../components/Tips';
import PaymentPlan from '../components/PaymentPlan';
import './Main.css';

const Main =()=> {

    return (
        <div className="main">
            <Hero />
            <Services />
            <Tips />
            <PaymentPlan />
        </div>
    )
    

}

export default Main;