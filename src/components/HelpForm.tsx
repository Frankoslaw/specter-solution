import { useState } from "react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

export const LocationQuestion = ({
    position,
    setPosition,
}: {
    position: number[];
    setPosition: (pos: number[]) => void;
}) => {
    const handleInputChange = (field: "lon" | "lat", value: string) => {
        const updatedPosition = [...position];
        updatedPosition[field === "lon" ? 1 : 0] = parseFloat(value);
        setPosition(updatedPosition);
    };

    return (
        <Card className="p-0">
            <CardHeader>1. Podaj dane geolokalizacyjne:</CardHeader>
            <CardContent className="flex flex-col gap-2">
                {["Lon", "Lat"].map((label, index) => (
                    <div
                        key={label}
                        className="flex flex-row items-center gap-2"
                    >
                        <Label className="w-12">{label}: </Label>
                        <Input
                            value={position[index === 0 ? 1 : 0]} // Longitude is at index 1, Latitude at index 0
                            onChange={(e) =>
                                handleInputChange(
                                    label.toLowerCase() as "lon" | "lat",
                                    e.target.value
                                )
                            }
                        />
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export const ImmediateQuestion = () => (
    <RadioQuestion
        title="2. Czy potrzebujesz natychmiastowej pomocy:"
        options={[
            { value: "yes", label: "Tak" },
            { value: "no", label: "Nie" },
        ]}
    />
);

export const ApartmentTypeQuestion = () => {
    const [selectedType, setSelectedType] = useState<string | undefined>(
        undefined
    );

    return (
        <Card>
            <CardHeader>3. Rodzaj mieszkania:</CardHeader>
            <CardContent>
                <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Wybierz rodzaj mieszkania" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="house">Dom</SelectItem>
                        <SelectItem value="apartment">Blok</SelectItem>
                    </SelectContent>
                </Select>
            </CardContent>
        </Card>
    );
};

export const FloorsQuestion = () => (
    <Card>
        <CardHeader>4. Liczba kondygnacji:</CardHeader>
        <CardContent>
            <Input />
        </CardContent>
    </Card>
);

export const BasementQuestion = () => (
    <RadioQuestion
        title="5. Czy budynek posiada piwnice:"
        options={[
            { value: "yes", label: "Tak" },
            { value: "no", label: "Nie" },
        ]}
    />
);

interface RadioOption {
    value: string;
    label: string;
}

interface RadioQuestionProps {
    title: string;
    options: RadioOption[];
}

const RadioQuestion = ({ title, options }: RadioQuestionProps) => (
    <Card>
        <CardHeader>{title}</CardHeader>
        <CardContent>
            <RadioGroup
                className="flex flex-row"
                defaultValue={options[0].value}
                orientation="horizontal"
            >
                {options.map(({ value, label }) => (
                    <div className="flex items-center space-x-2" key={value}>
                        <RadioGroupItem value={value} id={value} />
                        <Label htmlFor={value}>{label}</Label>
                    </div>
                ))}
            </RadioGroup>
        </CardContent>
    </Card>
);
