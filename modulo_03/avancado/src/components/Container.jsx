

const Container = ({children, myValue}) => {
    return (
        <div>
          <h2>  Esse é o titulo do container</h2>
            {children}
            <p>esse é meu valor: {myValue}</p>
        </div>
    )
}
export default Container
