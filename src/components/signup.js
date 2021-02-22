import { Alert } from 'bootstrap'
import React, {useRef , useState} from 'react'
import {Card, Form, Button, Alert} from "react-bootstrap"
import {useAuth} from '../context//authContext'

export default function Signup(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfrimRef = useRef()
    // const {signup , currentUser} = useAuth()
    const {signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

   async  function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfrimRef.current.value){
            return setError('Password do not matched')
        }
        try{
            setError('')
            setLoading(true)
           await signup(emailRef.current.value, passwordRef.current.value)
        }catch{
            setError('Failed to creat an account')
        }
        setLoading(false)
    }

    
    return(
        <>
         <Card>
             <Card.Body>
                 <h2 className="text-center mb-4">
                    Sign Up
                 </h2>
                 {/* {currentUser && currentUser.email} */}
                 {/* {currentUser.email} */}
                 {error &&  <Alert variant="danger">{error}</Alert>}
                 <Form onSubmit={handleSubmit}>
                     <Form.Group id ="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required /> 
                     </Form.Group>
                     <Form.Group id ="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required /> 
                     </Form.Group>
                     <Form.Group id ="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfrimRef} required /> 
                     </Form.Group>
                     <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                 </Form>
             </Card.Body>
             </Card> 
         <div className="w-100 text-center mt-2">
             Already have a account? Log In
             </div>  
        </>
    )
}






// import React from 'react'


// export default function Signup(){
//     return(
//         <div>

//         </div>
//     )
// }