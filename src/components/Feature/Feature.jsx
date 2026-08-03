import React from 'react'
import FeatureCard from '../FeatureCard/FeatureCard'
import "../FeatureCard/FeatureCard.css"
const Feature = ({title,discription,icon}) => {
    
  return (
    <>
       <div className="Feature">
   <FeatureCard 
    icon={<i className="fa-solid fa-circle-arrow-right"></i>}
   title="Easy to Customize"
   
   discription="Lorem ipsum dolor sit amet consectetur"
   />
   
   <FeatureCard 
   title="Easy to Customize"
   discription="Lorem ipsum dolor sit amet consectetur"
   icon=<i class="fa-solid fa-circle-arrow-right"></i>
   />

       <FeatureCard 
   title="Easy to Customize"
   discription="Lorem ipsum dolor sit amet consectetur"
   icon=<i class="fa-solid fa-circle-arrow-right"></i>
   />
    
       <FeatureCard 
   title="Easy to Customize"
   discription="Lorem ipsum dolor sit amet consectetur"
   icon=<i class="fa-solid fa-circle-arrow-right"></i>
   />
 
   <FeatureCard 
   icon=<i class="fa-solid fa-circle-arrow-right"></i>
   title="Easy to Customize"
   
   discription="Lorem ipsum dolor sit amet consectetur"
   />
  
   <FeatureCard 
   title="Easy to Customize"
   discription="Lorem ipsum dolor sit amet consectetur"
   icon=<i class="fa-solid fa-circle-arrow-right"></i>
   />

      </div>
    </>
  )
}

export default Feature
