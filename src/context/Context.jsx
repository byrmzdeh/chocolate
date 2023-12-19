import { useState , createContext , useEffect } from "react";
import axios from "axios";

export const Context=createContext()
export const Provider =(props)=>{
    const [value, setValue] = useState([])
    useEffect(() => {
        axios.get('https://mocki.io/v1/8fa1ba1b-e2d7-46b9-9435-726ea8e2bca7')
        .then(res=> setValue(res.data))

    }, [])
    

    return <Context.Provider value={[value, setValue]}>
        {props.children}
    </Context.Provider>
}