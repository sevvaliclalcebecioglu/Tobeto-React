function Props({name, surname, Age, developer, info}) {
    return(
        <div>
            <ul>
               {/* <li>{props.name}</li>
                <li>{props.surname}</li>
                <li>{props.Age}</li>
                <li>{props.developer.toString()}</li>
                <li>{props.info.title}</li>
                 <li>{props.info.desc}</li> */} 

                <li>{name}</li>
                <li>{surname}</li>
                <li>{Age}</li>
                <li>{developer.toString()}</li>
                <li>{info.title}</li>
                <li>{info.desc}</li>
            </ul>
        </div>
    );
    
}

export default Props;