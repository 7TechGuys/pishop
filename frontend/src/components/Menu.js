import React from 'react';

const Menu = () => {
  return (
      <>
        <h2>Categories</h2>
        <div className='d-flex'>
          
          <span className='raj-menu mx-auto'>
              <img src='/uploads/menu1.gif' alt=''/>
              <h3 className='raj-text-center'>Dessert</h3>
          </span>
          <span className='raj-menu mx-auto'>
              <img src='/uploads/menu2.png' alt=''/>
              <h3 className='raj-text-center'>Dinner</h3>
          </span>
          <span className='raj-menu mx-auto'>
              <img src='/uploads/menu3.gif' alt=''/>
              <h3 className='raj-text-center'>Break Fast</h3>
          </span>
          <span className='raj-menu mx-auto'>
              <img src='/uploads/menu4.png' alt=''/>
              <h3 className='raj-text-center'>Lunch</h3>
          </span>
          <span className='raj-menu mx-auto'>
              <img src='/uploads/menu5.gif' alt=''/>
              <h3 className='raj-text-center'>Fast Food</h3>
          </span>
          <span className='raj-menu mx-auto'>
              <img src='/uploads/menu6.png' alt=''/>
              <h3 className='raj-text-center'>Menu</h3>
          </span>
          
      </div>

    </>
  );
};

export default Menu;
