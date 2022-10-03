import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
  return <>
    <div class="Categories">

    <Link to="/search/copy">
      <div class="Category">
        <img class="navlog" src="uploads\navlog1.png" width="100%" height="100%" />
        <div class="Shadow"></div>
        <div class="Burgers">Copys</div>
      </div>
      </Link>

      <Link to="/search/pen">
      <div class="Category">
        <img class="navlog" src="uploads\navlog2.png" width="100%" height="100%" />
        <div class="Shadow"></div>
        <div class="Burgers">Pen </div>
      </div>
      </Link>

      <Link to="/search/cello">
      <div class="Category">
        <img class="navlog" src="uploads\CelloLogo.png" width="100%" height="100%" />
        <div class="Shadow"></div>
        <div class="Burgers">Cello</div>
      </div>
      </Link>

      <Link to="/search/dairy">
      <div class="Category">
        <img class="navlog" src="uploads\navlog4.png" width="100%" height="100%" />
        <div class="Shadow"></div>
        <div class="Burgers">Dairy</div>
      </div>
      </Link>

      <Link to="/search/classmate">
      <div class="Category">
        <img class="navlog" src="uploads\ClassmateLogo.jpg" width="100%" height="100%" />
        <div class="Shadow"></div>
        <div class="Burgers">classmate</div>
      </div>
      </Link>

      <Link to="/search/doms">
      <div class="Category">
        <img class="navlog" src="uploads\Doms.png" width="100%" height="100%" />
        <div class="Shadow"></div>
        <div class="Burgers">Doms</div>
      </div>
      </Link>

      <Link to="/search/colour">
      <div class="Category">
        <img class="navlog" src="uploads\navlog3.png" width="100%" height="100%" />
        <div class="Shadow"></div>
        <div class="Burgers">Colour's</div>
      </div>
      </Link>
      <div class="Category">
        <img class="navlog" src="uploads\navlog2.png" width="100%" height="100%" />
        <div class="Shadow"></div>
        <div class="Burgers">Pen & pencil's</div>
      </div>
      <div class="Category">
        <img class="navlog" src="uploads\navlog4.png" width="100%" height="100%" />
        <div class="Shadow"></div>
        <div class="Burgers">Pen & pencil's</div>
      </div>
      <div class="Category">
        <img class="navlog" src="uploads\navlog5.png" width="100%" height="100%" />
        <div class="Shadow"></div>
        <div class="Burgers">Pen & pencil's</div>
      </div>
    </div>

  </>;
};

export default Slider;
