import React,{createContext , useState} from 'react';


//createContext
export const SidebarContext = createContext()


const SidebarProvider = ({children}) => {
    //sidebar
    const [isOpen ,setIsOpen] = useState(false)
       const handleClose =()=>{
        setIsOpen(false)
       }
    return (
        <SidebarContext.Provider value={{isOpen , setIsOpen , handleClose} }>
             {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;