// import Signup from "./signup"
import Signup from "./signup"
import { Container } from "react-bootstrap"
// import {AuthProvider} from '../context/authContext'
import AuthProvider from '../context/authContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Dashboard from './dashboard'
import Login from './login'

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>

        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />

            </Switch>
          </AuthProvider>

        </Router>
        {/* <Signup /> */}

      </div>
    </Container>
  )
}

export default App;
