import { useState } from "react";
import { MyMap } from "@/components/MyMap";
import { Card } from "@/components/ui/card";
import {
    ApartmentTypeQuestion,
    BasementQuestion,
    FloorsQuestion,
    ImmediateQuestion,
    LocationQuestion,
} from "@/components/HelpForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FormPage = () => {
    const [position, setPosition] = useState([50.56203, 22.05076]);

    return (
        <div>
            <MyMap position={position} setPosition={setPosition} />
            <div className="absolute top-0 right-0 w-4/12 z-[1]">
                <Card className="m-3 flex flex-col gap-2 p-2">
                    <LocationQuestion
                        position={position}
                        setPosition={setPosition}
                    />
                    <ImmediateQuestion />
                    <ApartmentTypeQuestion />
                    <FloorsQuestion />
                    <BasementQuestion />
                    <Link to="/results">
                        <Button className="w-full mt-6">Analizuj</Button>
                    </Link>
                </Card>
            </div>
        </div>
    );
};

export default FormPage;
