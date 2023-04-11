import { useEffect } from "react";

export function useOnMounted(callback: Function){
    useEffect(() => {
        callback()
    }, [])
}

export const useInterval =  (callback: Function , time: number) => {useEffect(() => {
    const interval = setInterval(() => {
        callback()
    }, time);
    return () => clearInterval(interval);
  }, [])}

export function useDebug(state: any) {
  useEffect( () => {
    console.log(state);
    
  }, [state])
}