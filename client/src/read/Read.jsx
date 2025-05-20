import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const Read = () => {

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
    return (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center flex-column py-5">
            <div className="border border-1 border-card p-3 shadow">
                {data.map((res) => {
                    return <div key={res.ID}>
                        <div className="d-flex gap-2 align-items-center">
                            <h4>ID:</h4>
                            <h4>{res.ID}</h4>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <h4>Name:</h4>
                            <h4>{res.name}</h4>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <h4>Last Name:</h4>
                            <h4>{res.lastName}</h4>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <h4>Email:</h4>
                            <h4>{res.email}</h4>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <h4>Age:</h4>
                            <h4>{res.age}</h4>
                        </div>
                        <div>
                            <button className="btn btn-md btn-dark w-100" onClick={() => navigate('/')}>Back</button>
                        </div>
                    </div>

                })}
            </div>
        </div>
    );
}

export default Read;