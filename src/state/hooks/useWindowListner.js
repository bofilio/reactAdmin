import React,{useEffect} from 'react'
import { useAction } from './useAction';
const useWindowListner = () => {
    const sidebare_breakpoint = 700;
    const {setWindowWidth } = useAction();
    const handleResize = () => {
        setWindowWidth(Math.floor(window.innerWidth)<sidebare_breakpoint);  
    }
    useEffect(() => {
        if (window.innerWidth>sidebare_breakpoint) setWindowWidth(false);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
}

export default useWindowListner


