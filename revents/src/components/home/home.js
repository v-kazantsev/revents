import React from 'react';

const Home = ({history}) => (
  <div>
    <div className='ui inverted vertical masthead center aligned segment'>
      <div className='ui text container'>
        <h1 className='ui inverted stackable header'>
          <img className='ui image massive' src='/assets/logo.png' alt='logo' />
          <div className='content'>Re-vents</div>
        </h1>
        <h2>Do whatever you want to</h2>
        <div onClick={() => history.push('/events')} className='ui huge inverted button white'>
          Get started
          <i className='right arrow icon' />
        </div>
      </div>
    </div>
    <div style={{ textAlign: 'center' }}>
      Icons made by {' '}
      <a href='http://www.freepik.com' title='Freepik'>
      Freepik
      </a>{' '}
    </div>
  </div>
);

export default Home;
