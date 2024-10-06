import { useState } from "react";
import { MyMap } from "./components/MyMap";
import { HelpForm } from "./components/HelpForm";

const App = () => {
    const [position, setPosition] = useState([50.56203, 22.05076]);

    return (
        <div>
            <MyMap position={position} setPosition={setPosition} />
            <HelpForm />
        </div>
    );
};

export default App;
