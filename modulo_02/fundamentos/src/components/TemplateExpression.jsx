const TemplateExpression = () =>{

    const name = "matheus";
    const data = {
        age: 31,
        job: "Programmer",
    };

    return (
        <div>
            <h1>olá {name}, tudo bem</h1>
            <p>Você atua como: {data.job}</p>
            <h1>soma de {data.age} + 2 = {data.age+2}</h1>
         </div>
    )
}

export default TemplateExpression;