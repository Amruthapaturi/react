import { createContext } from "react";


export const LandContext = createContext()

export const LandProvide = ({children})=>{

const land = "10 Acres"
const hello =()=>{
    alert("Hello")
}

return(
        <LandContext.Provider value={{land,hello}}>
{children}
    </LandContext.Provider>
)
}