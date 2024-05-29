import { useState } from "react";

function StateInput() {
    
    const [name, setname] = useState("iclal");
    const [surname, setSurname] = useState("Cebecioğlu");
    const [age, setAge] = useState(21);

    return(
        <div>
            <h1>State Input</h1>
            <hr />
             <div>
                {name} {surname} ({age})
             </div>
            <br />
            <div>
                <input type="text" placeholder="name" value={name} onChange={(e) => setname(e.target.value)}/>
                <input type="text" placeholder="surname" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                <input type="number" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)}/>
            </div>
            <br />
            
        </div>
    );
}

export default StateInput;

