import {Container} from "react-bootstrap"
import error_api from "../../images/error_api.png"
const CreateInvoice = () => {
  return (
    <Container>
      <section className="section">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <img src={error_api} alt="" className="w-100"/>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default CreateInvoice