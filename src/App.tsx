import React, { useEffect } from 'react';
import Navbar from './Navbar'
import Landing from './Landing'
import ProductDisplay from './components/ProductDisplay';
import BottomBar from './components/BottomBar';
import CodeDisplay from './components/CodeDisplay';

function App() {
  const [scrollY, setScrollY] = React.useState(0)
  const [showNav, setShowNav] = React.useState(true)

  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(prev => {
        if(prev < window.pageYOffset) setShowNav(false)
        else setShowNav(true)
        return window.pageYOffset
      })
    }
    window.addEventListener('scroll', handleScroll, {
      capture: true,
      passive: true
    })
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div className="relative bg-white" style={{fontFamily: 'Work Sans !important'}}>
      <Navbar showNav={showNav} />
      <Landing scrollY={scrollY} />
      <BottomBar />
      <ProductDisplay scrollY={scrollY}/>
      <CodeDisplay scrollY={scrollY} />
      <div className="w-full h-screen bg-white">

      </div>
    </div>
  );
}

export default App;
