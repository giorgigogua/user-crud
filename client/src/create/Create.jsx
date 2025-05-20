import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Create = () => {

    const [values, setValues] = useState({
        name: "",
        lastName: "",
        email: "",
        age: ""
    })

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (values.name && values.lastName && values.age && values.email) {
            axios.post('http://localhost:5000/user', values)
                .then(res => {
                    console.log(res)
                    navigate('/')
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <div className="w-100 d-flex flex-column justify-content-center align-items-center py-5">
            <div className="shadow p-3">
                <div>
                    <h1>Add New</h1>
                </div>
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                    <div>
                        <input placeholder="Enter name"
                            onChange={e => setValues({ ...values, name: e.target.value })} className="form-control form-control-lg" type="text" name="name" />
                    </div>

                    <div>
                        <input placeholder="Enter last name"
                            onChange={e => setValues({ ...values, lastName: e.target.value })} className="form-control form-control-lg" type="text" name="lastName" />
                    </div>

                    <div>
                        <input placeholder="Enter email"
                            onChange={e => setValues({ ...values, email: e.target.value })} className="form-control form-control-lg" type="text" name="phone" />
                    </div>
                    <div>
                        <input placeholder="Enter your age"
                            onChange={e => setValues({ ...values, age: e.target.value })} className="form-control form-control-lg" type="number" name="phone" />
                    </div>

                    <div className="d-flex flex-column gap-2">
                        <button type="submit" className="btn btn-success w-100">Add</button>
                        <button type="submit" className="btn btn-dark w-100" onClick={() => navigate('/')}>Back</button>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Create;