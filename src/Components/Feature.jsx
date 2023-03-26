import React from 'react';
import Featurebox from '../Components/Featurebox';
import figme1 from '../images/1.svg';
import figme2 from '../images/2.svg';
import figme3 from '../images/3.svg';
import figme4 from '../images/4.svg';

function Feature() {
  return (
    <div id='features'>
      <h1>FEATURES</h1>
      <div className="a-container">
         <Featurebox  image={figme1} title='Weightlifting'/>
         <Featurebox  image={figme2} title='Specific Muscle'/>
         <Featurebox  image={figme3} title='Flex Your Muscle'/>
         <Featurebox  image={figme4} title='Cardio Exercise'/>
      </div>
      
    </div>
  )
}

export default Feature
