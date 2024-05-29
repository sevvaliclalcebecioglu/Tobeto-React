import { useState } from "react";

function UsingState() {
   // const name = "İclal";
   // const surname = "Cebecioğlu";

   // State tarafından kontrol etmek için;
    const [name, setName] = useState("İclal");
    const [surname, setSurname] = useState("Cebeci");

    return(
        <div>
            <h1>Using State</h1>
            <hr />
            <div>
                {name} {surname}
            </div>
            <br />
            <br />
            <br />
            <button onClick={() => setName("Şevval İclal")}>Change Name</button>
            <br />
            <br />
            <button onClick={() => setSurname("Cebecioğlu")}>Change Surname</button>
        </div>
    );
}

export default UsingState;