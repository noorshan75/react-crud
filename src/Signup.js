import React from "react";
import { Form, Col, Row, Card, Button } from 'react-bootstrap';
import {
    ValidationForm,
    TextInput,
    SelectGroup
} from "react-bootstrap4-form-validation";
import axios from "axios";
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            name: "",
            email: "",
            password: "",
            gender: ""
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
            name: this.state.name,
            gender: this.state.gender,
            email: this.state.email,
            password: this.state.password,
        };
        const requestOptions = {
            headers: {
                'content-type': 'application/json',
            },

        }
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/addUser`, formData, requestOptions).then(
            (result) => {
                const { history } = this.props;
                if (result.status == 200) {
                    history.push('/login')
                }
                else {
                    history.push('/signup')
                }
            }
        )
    };

    render() {
        const { } = this.props;
        return (

            <Card className="container mt-5" style={{ margin: 'auto', width: '500px' }}>
                <Card.Header>
                    <Card.Title as="h5">
                        Signup Page
                      </Card.Title>
                    <p className="text-primary">{this.state.message}</p>
                </Card.Header>
                <Card.Body>
                    <ValidationForm
                        onSubmit={this.handleSubmit}
                        onErrorSubmit={this.handleErrorSubmit}
                    >
                        <Form.Row >
                            <Form.Group as={Col} md="8" style={{ margin: 'auto' }}>
                                <TextInput
                                    name="name"
                                    id="name"
                                    placeholder="Name "
                                    required
                                    value={this.state.name}
                                    errorMessage="Please Enter Name"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>

                            <br />

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
                            <br />
                            <Form.Group as={Col} md="8" style={{ margin: 'auto' }}>
                                <SelectGroup
                                    name="gender"
                                    id="gender"
                                    type="Password"
                                    required
                                    value={this.state.gender}
                                    errorMessage="Please Select Gender"
                                    onChange={this.handleChange}

                                >
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </SelectGroup>
                            </Form.Group>
                            <Form.Group as={Col} className="mt-3 text-center">
                                {" "}
                                <Button variant="success" type="submit" >
                                    Sign Up
                            </Button>{" "}
                            </Form.Group>{" "}
                            <Form.Group as={Col} className="mt-3 text-center">
                                {" "}
                                    Log In <Link to='/login' style={{textDecoration:'none'}}>click here</Link>{" "}
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


export default Signup;
