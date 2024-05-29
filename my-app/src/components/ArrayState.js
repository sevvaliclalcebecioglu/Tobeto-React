import { useState } from "react";

function ArrayState() {
    const [cities, setCities] = useState (["İstanbul", "Bolu", "İzmir"]);

    return(
        <div>
            <h1>Array State</h1>
            <hr />
            <ul>
                {
                    cities.map((city, i) => <li key={i}>{city}</li> )
                }
            </ul>
            <br />
            <br />
            <button onClick={() => setCities([...cities,"Ankara"])}>Add New City</button>
        </div>
    );
}

export default ArrayState;

// ...cities => önceki elemanları al sonra yeni elemanı ekle