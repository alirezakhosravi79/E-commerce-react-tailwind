//14-
import { useState , createContext } from "react"

//create context
export const SidebarContext = createContext()

function SidebarProvider({children}) {
  //15- sidebar state
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider