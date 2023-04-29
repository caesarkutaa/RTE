import React from 'react';
import Sidebar from './partials/Sidebar';
import Searchbar from './partials/Searchbar';
import Footer from './partials/Footer';
const Home = () => {
  return (
    <>
    
    <div className='bg-slate-900'>
    <Sidebar />
    <Searchbar />
    </div>
    <div>
    <h4>Latest Song</h4>
    <div>

    </div>
    </div>
    <div>
    <h4>Latest Albums</h4>
    <div>
      
    </div>
    </div>
    <div>
    <h4>Latest News</h4>
    <div>
      
    </div>
    </div>
    <Footer /> 
</>


  )
}

export default Home