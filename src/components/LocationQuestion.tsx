import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

export const LocationQuestion = () => {
    return (
        <Card className="p-0">
            <CardHeader>1. Podaj dane geolokalizacyjne:</CardHeader>
            <CardContent className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                    <Label className="w-12">Lon: </Label>
                    <Input />
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Label className="w-12">Alt: </Label>
                    <Input />
                </div>
            </CardContent>
        </Card>
    );
};
