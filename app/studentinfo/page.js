'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, FormGroup, Label, Col, Input, FormText, Button, Table } from 'reactstrap'

function StudentInfo() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [studentinfo, setStudentInfo] = useState([]);
    const [apiData, setApiData] = useState([]);

    // https://jsonplaceholder.typicode.com/posts

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            console.log("response", response?.data)
            setApiData(response?.data)
        })
    }, []);

    const handleButoon = () => {
        if (!email) {
            alert("Enter Email!");
        }
        else if (!userName) {
            alert("Enter Username");
        }
        else {
            setStudentInfo([...studentinfo, { Email: email, UserName: userName }]);
            setUserName("");
            setEmail("");
        }
    }

    const handleDelete = (index) => {
        studentinfo.splice(index, 1);
        setStudentInfo([...studentinfo]);
    }

    // const [obj, setObj] = useState({
    //     email: "",
    //     userName: ""
    // });

    return (
        <div>
            <Form>
                <FormGroup row>
                    <Label
                        for="exampleEmail"
                        sm={2}
                    >
                        Email
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="examplePassword"
                        sm={2}
                    >
                        Username
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Enter your username"
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </Col>
                </FormGroup>
            </Form>
            <Button onClick={() => handleButoon()}>Add</Button>
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Email</th>
                            <th>user Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentinfo?.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.UserName}</td>
                                    <td>
                                        <Button onClick={() => handleDelete(index)}>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </div>

            <div>
            <Table>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Body</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apiData?.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.body}</td>
                                    <td>{item.title}</td>
                                   
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default StudentInfo
