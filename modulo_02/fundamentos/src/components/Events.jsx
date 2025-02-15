const Events =()=>{

    const handleMyEvent =(e) =>{
        console.log(e);
        console.log("ativou o evento");
    }

    const renderSomething = (x) =>{
        if(x) {
            return <h1>renderizando isso</h1>
        }else  {
            return <h2>renderizando aquilo</h2>
        }
    }

    return(
        <>
        <div>
            <button onClick={handleMyEvent}> clique aqui</button>
            <button onClick={() => console.log("segundo btn")}> segundo botao</button>

        {/*    o formato errado*/}
            <button onClick={() =>{
                if (true){
                    console.log("nao deveria acontecer")
                }
            }}>
                bottao errado
            </button>
        </div>
            {renderSomething(1)}
            {renderSomething(0)}
        </>
    )
}
export default Events;