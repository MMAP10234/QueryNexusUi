
import { BrowserRouter,Routes,Route} from "react-router-dom" 
import Auth from "./Components/Auth"
const  App :React.FC= () => {
 
  return (<BrowserRouter>
<Routes>
  <Route path='/' element={<Auth/>}></Route>
</Routes>
  </BrowserRouter>
  
   
    
      
   
  )
}

export default App
