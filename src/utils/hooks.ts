import { useEffect } from "react";

export function onMounted(callback: Function){
    useEffect(() => {
        callback()
    }, [])
}