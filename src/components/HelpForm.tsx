import { ScrollArea } from "../components/ui/scroll-area";
import { Card } from "../components/ui/card";
import { LocationQuestion } from "./LocationQuestion";
import { ImmediateQuestion } from "./ImmediateQuestion";
import { ApartmentTypeQuestion } from "./ApartmentTypeQuestion";
import { FloorsQuestion } from "./FloorsQuestion";
import { BasementQuestion } from "./BasementQuestion";
import { Button } from "../components/ui/button";

export const HelpForm = () => {
    return (
        <div className="absolute top-0 right-0 w-4/12 z-[1]">
            <ScrollArea>
                <Card className="m-3 flex flex-col gap-2 p-2">
                    <LocationQuestion />
                    <ImmediateQuestion />
                    <ApartmentTypeQuestion />
                    <FloorsQuestion />
                    <BasementQuestion />
                    <Button className="bg-blue-500 mt-6">Analizuj</Button>
                </Card>
            </ScrollArea>
        </div>
    );
};
