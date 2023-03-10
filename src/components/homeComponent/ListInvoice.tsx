import {Container} from "react-bootstrap"
import error from "../../images/error.png"
const ListInvoice = () => {
  return (
   <Container>
     <section className="section">
       <div className="row justify-content-center">
         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
           <img src={error} alt="" className="w-100"/>
         </div>
       </div>
     </section>
   </Container>
  )
}

export default ListInvoice