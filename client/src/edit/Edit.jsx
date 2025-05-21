import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const Edit = () => {

    const [data, setData] = useState([])

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:5000/get_users/${id}`)
            .then((res) => {
                setData(res.data)
                console.log(res)
            })
            .catch(err => console.log(err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:5000/edit_user/${id}`, data[0])
            .then(res => {
                navigate('/')
                try {
                    alert(res.data.success)
                } catch (err) {
                    console.log(err)
                }
            })
            .catch(err => console.log(err))

    }
    return (

        <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center py-5">
            <div className="p-3 shadow">
                <div>
                    <h1>Update</h1>
                </div>
                {data && Array.isArray(data) && data.map((res) => {
                    return (
                        <div key={res.ID}>
                            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                                <div>
                                    <input onChange={e => setData([{ ...data[0], name: e.target.value }])} value={res.name} className="form-control form-control-lg" type="text" name="name" />
                                </div>

                                <div>
                                    <input onChange={e => setData([{ ...data[0], lastName: e.target.value }])} value={res.lastName} className="form-control form-control-lg" type="text" name="lastName" />
                                </div>

                                <div>
                                    <input onChange={e => setData([{ ...data[0], email: e.target.value }])} value={res.email} className="form-control form-control-lg" type="text" name="email" />
                                </div>

                                <div>
                                    <input onChange={e => setData([{ ...data[0], age: e.target.value }])} value={res.age} className="form-control form-control-lg" type="number" name="phone" />
                                </div>

                                <div className="d-flex flex-column gap-2">
                                    <button className="btn btn-success w-100">Update</button>
                                    <button className="btn btn-md btn-dark w-100" onClick={() => navigate('/')}>Back</button>
                                </div>
                            </form>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Edit;