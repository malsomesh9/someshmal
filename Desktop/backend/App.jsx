import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [apiData, setApiData] = useState([]);

    async function api() {
        try {
            const res = await axios.get("http://localhost:5174/");
            
            console.log(res.data);
            setApiData(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        api();
    }, []);

    return (
        <div>
            {apiData.map((val, index) => (
                <div key={index}>
                   
                </div>
            ))}
        </div>
    );
};

export default App;