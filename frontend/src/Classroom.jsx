import { useParams } from "react-router-dom"

export function Classroom(){
    const { id } = useParams()
    return <h1>Classroom {id}</h1>
}
