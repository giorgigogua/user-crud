
import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

    const [data, setData] = useState([])
    const [deleted, setDeleted] = useState(true)

    useEffect(() => {
        if (deleted) {
            setDeleted(false)
            axios.get('http://localhost:5000/users')
                .then((res) => {
                    setData(res.data)
                })
                .catch(err => console.log(err))
        }

    }, [deleted])

    const userDelete = (id) => {

        axios.delete(`http://localhost:5000/delete/${id}`)
            .then((res) => {
                setDeleted(true)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="container w-100 mt-5">
            <div className="d-flex justify-content-between w-100">
                <h1>Crud App</h1>
                <Link className="btn btn-success btn-lg" to={'/create'}>Create</Link>
            </div>
            <div className="table-responsive mt-5">
                <table class="table table-striped align-middle">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && Array.isArray(data) && data.map((res, i) => {
                            return (
                                <tr key={i}>
                                    <td>{res.ID}</td>
                                    <td>{res.name}</td>
                                    <td>{res.lastName}</td>
                                    <td>{res.email}</td>
                                    <td>{res.age}</td>
                                    <td className="d-flex gap-3">
                                        <Link className="btn btn-info" to={`/read/${res.ID}`}>Read</Link>
                                        <Link className="btn btn-primary" to={`/edit/${res.ID}`}>Edit</Link>
                                        <button className="btn btn-danger" onClick={() => userDelete(res.ID)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;