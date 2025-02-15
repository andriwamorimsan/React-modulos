
const CarDetails = ({brand,km,color, newCar}) => {
    return (
        <div>
            <h1>detalhes do carro</h1>
            <ul>
                <li>Marca: {brand}</li>
                <li>KM: {km}</li>
                <li>Cor: {color}</li>
            </ul>
            {newCar && <p>Este carro é novo</p>}
        </div>
    )
}
export default CarDetails
