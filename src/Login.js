import React from "react";
import { Form, Col, Row, Card, Button } from 'react-bootstrap';
import {
    ValidationForm,
    TextInput,

} from "react-bootstrap4-form-validation";
import axios from "axios";
import jwt from "jsonwebtoken";
import {Link} from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            email: "",
            password: ""
        };

    }

    componentDidMount() {
        // this.props.getUsecaseDetails();

    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };


    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        const formData = {
            email: this.state.email,
            password: this.state.password,
        };
        const requestOptions = {
            headers: {
                'content-type': 'application/json',
            },

        }
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, formData, requestOptions).then(

            (result) => {
                const { history } = this.props;
                if (result.status == 200) {
                        localStorage.setItem("user-auth", JSON.stringify({ token: result.data.accessToken, auth: true }))
                        history.push('/home');    
                }
                else {
                    history.push('/login');
                }
            }
        )
    };

    render() {
const {history } = this.props;
const user = JSON.parse(localStorage.getItem('user-auth'));
if(user && user.token){
history.push('/home');
jwt.verify(user.token,'hello',(error,decode)=>{
if(error){
localStorage.clear();
}
console.log(decode)
})
}

        return (
            
                <Card className="container mt-5" style={{margin:'auto',width:'500px'}}>
                    <Card.Header>
                        <Card.Title as="h5">
                            Login Page
                      </Card.Title>
                        {/* <p className="text-success">{this.props.location && this.props.location.state}</p> */}
                    </Card.Header>
                    <Card.Body>
                        <ValidationForm
                            onSubmit={this.handleSubmit}
                            onErrorSubmit={this.handleErrorSubmit}
                        >
                            <Form.Row >


                                <Form.Group as={Col} md="8" style={{ margin: 'auto' }}>
                                    <TextInput
                                        name="email"
                                        id="email"
                                        placeholder="Email "
                                        required
                                        value={this.state.email}
                                        errorMessage="Please Enter Email"
                                        onChange={this.handleChange}
                                        autoComplete="off"
                                    />
                                </Form.Group>

                                <br />
                                <Form.Group as={Col} md="8" style={{ margin: 'auto' }}>
                                    <TextInput
                                        name="password"
                                        id="password"
                                        type="Password"
                                        placeholder="Password"
                                        required
                                        value={this.state.password}
                                        errorMessage="Please Enter Password"
                                        onChange={this.handleChange}
                                        autoComplete="off"
                                    />
                                </Form.Group>


                                <Form.Group as={Col} className="mt-3 text-center">
                                    {" "}
                                    <Button variant="success" type="submit" >
                                        Login
                            </Button>{" "}
                                </Form.Group>{" "}
                                <Form.Group as={Col} className="mt-3 text-center">
                                    {" "}
                                    Sign Up <Link to='/signup' style={{textDecoration:'none'}}>click here</Link>{" "}
                                </Form.Group>{" "}
                                <br />

                                <Form.Group as={Col} md="12">
                                    {alert.message && (
                                        <div className={`alert ${alert.type}`}>
                                            {alert.message + " Please Click Reload Button."}
                                        </div>
                                    )}
                                </Form.Group>
                            </Form.Row>
                        </ValidationForm>
                    </Card.Body>
                </Card>
            
        );
    }
}


export default Login;
