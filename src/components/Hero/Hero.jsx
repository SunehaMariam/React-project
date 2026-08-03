import React from 'react'
import "../Hero/Hero.css"
import image from "../../assets/images/image.png"
const Hero = () => {
    return(
 <>
 
 <div className='Hero-section'>
    <div>
<h1>Awesome App</h1>
    <h2>App Landing Template</h2><p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, tempore nam, eveniet accusantium dolorum mollitia fuga vel nostrum eaque reiciendis nemo repellendus atque quidem. Facere earum deleniti inventore cumque animi!
        Architecto quas soluta accusamus consectetur quisquam, ratione quia voluptas impedit odio asperiores maxime error. Eos quaerat laudantium odio minus ipsam voluptates molestias labore facere? Soluta eos modi ipsa quos tenetur!
        Tempore cum perspiciatis perferendis, ratione cupiditate delectus unde accusamus illum aut at? Ducimus eos fuga fugit obcaecati, omnis esse autem odio explicabo provident doloribus reprehenderit aliquam consectetur sint sed facere.
    </p>
    <div className='hero-content'>
        <div className='hero-content2'>
      <i class="fa-solid fa-circle-arrow-right"></i>
        <h2>Amazing design</h2>
        </div>
    </div>
       <div className='hero-content'>
        <div className='hero-content2'>
      <i class="fa-solid fa-circle-arrow-right"></i>
        <h2>Amazing design</h2>
        </div>
    </div>
       <div className='hero-content'>
        <div className='hero-content2'>
      <i class="fa-solid fa-circle-arrow-right"></i>
        <h2>Amazing design</h2>
        </div>
    </div>
        <div className='hero-content'>
        <div className='hero-content2'>
      <i class="fa-solid fa-circle-arrow-right"></i>
        <h2>Amazing design</h2>
        </div>
    </div>
     <button className='hero-btn'>Explore More</button>
    </div>
    
    <div className='hero-image'>
        <img src={image} alt="" />
    </div>
   
 </div>
 
 </>
  )
}

export default Hero
