import { useState , useEffect } from "react";

function UsingUseEfect() {

    const [number, setNumber] = useState(10);
    const [text, setText] = useState("Lorem");

    useEffect(() => {
        console.log("Use Efect Çalıştı.");
    });


    return(
        <div>
            <h1>Using Use Efect</h1>
            <hr />

            <div>
                <h2> {number} </h2>
                <button onClick={() => setNumber(number +1)}>Arttır</button>
            </div>
            <br />
            <br />
            <br />
            <div>
                <h2> {text} </h2>
                <button onClick={() => setText("İpsum")}>Yazı Değiştir</button>
            </div>

        </div>
    );
    
}

export default UsingUseEfect;