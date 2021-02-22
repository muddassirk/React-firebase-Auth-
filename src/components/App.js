import Signup from "./signup"
import {Container} from "react-bootstrap"
// import {AuthProvider} from '../context/authContext'
import { AuthProvider } from '../context/authContext'

function App() {
  return (
    <AuthProvider>

    <Container className="d-flex align-items-center justify-content-center"
    style={{minHight: "100vh"}}>
      <div className="w-100" style={{maxWidth: '400px'}}>
      <Signup />

      </div>
    </Container>
    </AuthProvider>
  )
}

export default App;
