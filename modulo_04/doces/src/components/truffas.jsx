import styles from "./truffas.module.css";

const Truffas = ({doces}) => {
    return (
        <>
            <ul className={styles.truffas_styles}>
                <li>Nome: {doces.nome}</li>
                <li>Nome: {doces.tipo}</li>
                <li>Nome: {doces.sabor}</li>
            </ul>
        </>
    )
}
export default Truffas
