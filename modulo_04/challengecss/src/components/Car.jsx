import styles from './Car.module.css'

function Car({car}) {
    return (
        <div className={styles.card}>
            <h1> {car.name}</h1>
            <p>KM: {car.km}</p>
            <p>Cor: {car.color}</p>
        </div>
    )
}

export default Car
