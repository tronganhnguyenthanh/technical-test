import {Route, Routes} from "react-router-dom"
import CreateInvoice from "../components/createInvoice/createInvoice"
import ListInvoice from "../components/homeComponent/ListInvoice"
import Login from "../components/login/Login"
const App = () => {
  return (
   <div className="App">
     <Routes>
       <Route path="/" element={<ListInvoice/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/invoice/create" element={<CreateInvoice/>}/>
     </Routes>
   </div>
  )
}
export default App
