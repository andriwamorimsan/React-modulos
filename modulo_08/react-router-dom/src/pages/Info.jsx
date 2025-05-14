import {useParams} from "react-router-dom";


const Info = () => {
    const {id} = useParams();

    return (
        <>
        <div>Mais informações sobre broduto {id}</div>
        </>
    )
}
export default Info
