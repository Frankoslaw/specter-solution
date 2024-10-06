import { Card } from "@/components/ui/card";
import { CircleHelp, Headset } from "lucide-react";
import StalowaMap from "../assets/copernicus.jpg";

const DESC1 = `Na dzień 30/09/2024 wzrasta ryzyko powodzi o 24%. 
Zachowaj ostrożność i śledź lokalne komunikaty. 
Przygotuj plan na wypadek ewakuacji lub zagrożenia dla mienia.`;

const DESC2 = `Numery do służb ratowniczych:
997 - Policja,
998 - Państwowa Straż Pożarna,
999 - Pogotowie Ratunkowe,

LINK DO PROCEDURY POSTĘPOWANIA`;

const ResultsPage = () => {
    return (
        <div>
            {/* <MyMap position={position} setPosition={setPosition} /> */}
            <img src={StalowaMap} className="w-screen h-screen object-cover " />
            <div className="absolute top-0 right-0 w-4/12 z-[1]">
                <Card className="m-3 flex flex-col gap-4 p-4">
                    <NotifyCard
                        icon={<CircleHelp size={32} />}
                        title={"Objaśnienie problemu."}
                        desc={DESC1}
                        color1={"bg-orange-200"}
                        color2={"bg-orange-300"}
                    />
                    <NotifyCard
                        icon={<Headset size={32} />}
                        title={"Co możesz zrobić."}
                        desc={DESC2}
                        color1={"bg-blue-200"}
                        color2={"bg-blue-300"}
                    />
                </Card>
            </div>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NotifyCard({ title, desc, color1, color2, icon }: any) {
    return (
        <Card className={`flex flex-col gap-2 p-2 ${color1}`}>
            <div className="flex flex-row gap-2 items-center">
                {icon}
                <Card className={`p-2 w-full ${color2}`}>{title}</Card>
            </div>
            <Card
                className={`p-2 w-full ${color2} py-4`}
                style={{ whiteSpace: "pre-line" }}
            >
                {desc}
            </Card>
        </Card>
    );
}

export default ResultsPage;
