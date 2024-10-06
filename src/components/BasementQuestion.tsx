import { Card, CardHeader, CardContent } from "../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";

export const BasementQuestion = () => {
    return (
        <Card>
            <CardHeader>5. Czy budynek posiada piwnice:</CardHeader>
            <CardContent>
                <RadioGroup
                    className="flex flex-row"
                    defaultValue="option-one"
                    orientation="horizontal"
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Tak</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Nie</Label>
                    </div>
                </RadioGroup>
            </CardContent>
        </Card>
    );
};
