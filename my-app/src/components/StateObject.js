import { useState } from "react";

function StateObject() {
    
    const [user, setUser] = useState({ name: "İclal", surname: "Cebecioğlu", age: 21});

    return(
        <div>
            <h1>State Object</h1>
            <hr />
             <div>
                {user.name} {user.surname} ({user.age})
             </div>

            <br />
            <br />
            <button onClick={() => setUser({name: "Şevval İclal", surname:"CEBECİOĞLU", age:20})}>Save</button>
        </div>
    );
}

export default StateObject;

// ...user => user değişkeninin önceki halini koru demektir.