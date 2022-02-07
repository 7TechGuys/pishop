import React from 'react';

const Slider = () => {
  return <>
    

  
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
       <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
       <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="uploads\welcome to kamdhenu restaurant.png" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Welcome To</h5>
        <p>kamdhenu</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="uploads\welcome to kamdhenu restaurant (1).png" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Welcome To</h5>
        <p>kamdhenu</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="uploads\welcome to kamdhenu restaurant (2).png" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Welcome To</h5>
        <p>kamdhenu</p>
      </div>
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
 



  </>;
};

export default Slider;
