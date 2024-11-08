'use client'

// Imports React
import { useState, useEffect, useCallback } from 'react'

// Imports Components
import {Button} from '@/app/components/Button'
import { HiArrowNarrowUp } from 'react-icons/hi'

// Component
export const BackToTop = () => {
	
  // Components Functions
  const [visible, setVisible] = useState(false);

  // Show Button After Scrolling Down More than 500px
  const toggleVisible = useCallback(() => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  },[visible]);

  useEffect(() => {
    // Listen for Scrolling Event
    window.addEventListener("scroll", toggleVisible, false);
    return () => {
      window.removeEventListener("scroll", toggleVisible, false);
    }
  }, [toggleVisible]);

  // Get Back Top when Clicked
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior:'smooth'
    });
  }

	// JSX Component
  return (
    <Button className={!visible?`opacity-0 duration-500 transition-all`:`fixed bottom-6 right-6 p-2 opacity-100 duration-300 transition-all shadow-button`} onClick={handleScroll}>
      <HiArrowNarrowUp size={20}/>
    </Button>
  )
}
