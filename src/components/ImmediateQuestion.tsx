import { Card, CardContent, CardHeader } from "../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";

export const ImmediateQuestion = () => {
    return (
        <Card>
            <CardHeader>2. Czy potrzebujesz natychmiastowej pomocy:</CardHeader>
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
