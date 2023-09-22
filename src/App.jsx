import { useState, useContext } from 'react'

import './App.scss'
import { ThemeContext } from './context/ThemeContext'
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { splashScreen } from './profile';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  const { isDark } = useContext(ThemeContext);
  const [isShowingSplashAnimation, setIsShowSplashAnimation] = useState(true);

  useEffect(() => {
    if(splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowSplashAnimation(false),
        splashScreen.duration
      )

      return () => {
        clearTimeout(splashTimer);
      }
    }
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )
}

export default App
