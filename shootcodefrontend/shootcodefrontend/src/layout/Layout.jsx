import { BrowserRouter } from 'react-router-dom';

export default function Layout({ children }) {

    return (
      <>
        <div className="nav-container">
        <div className="nav-wrapper">
        <div className="nav">
            <div><a href="/" >Home</a></div>
            <div><a href="/about" >About</a></div>
            <div><a href="/scoreboard" >Scoreboard</a></div>
        </div>
        </div>
        </div>

        <div className='dropcontainer'>

        <div className='drop1 opacity-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150" width="20" height="20">
          <path d="M50,10 C70,40 70,70 50,90 C30,70 30,40 50,10 Z" fill="#5083e7" />
        </svg>
        </div>

        <div className='drop2 opacity-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150" width="20" height="20">
          <path d="M50,10 C70,40 70,70 50,90 C30,70 30,40 50,10 Z" fill="#5083e7" />
        </svg>
        </div>

        <div className='drop3 opacity-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150" width="20" height="20">
          <path d="M50,10 C70,40 70,70 50,90 C30,70 30,40 50,10 Z" fill="#5083e7" />
        </svg>
        </div>

        <div className='drop4 opacity-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150" width="20" height="20">
          <path d="M50,10 C70,40 70,70 50,90 C30,70 30,40 50,10 Z" fill="#5083e7" />
        </svg>
        </div>

        <div className='drop5 opacity-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150" width="20" height="20">
          <path d="M50,10 C70,40 70,70 50,90 C30,70 30,40 50,10 Z" fill="#5083e7" />
        </svg>
        </div>

        <div className='drop6 opacity-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150" width="20" height="20">
          <path d="M50,10 C70,40 70,70 50,90 C30,70 30,40 50,10 Z" fill="#5083e7" />
        </svg>
        </div>

        <div className='drop7 opacity-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150" width="20" height="20">
          <path d="M50,10 C70,40 70,70 50,90 C30,70 30,40 50,10 Z" fill="#5083e7" />
        </svg>
        </div>

        </div>
  
        <main>
          <div>
            {children}
          </div>
        </main>
      </>
    );
  }
  