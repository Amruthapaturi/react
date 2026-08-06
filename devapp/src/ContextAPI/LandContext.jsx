import { createContext } from "react";

export const NameContext = createContext()

export const NameProvide =({children})=>{

const sname = "Bharath Reddy"
const greet =()=>{
    alert("Hello Good Afternoon")
}

    return(
        <NameContext.Provider value={{sname , greet}}>
          {children}
        </NameContext.Provider>
    )
}