import { Card, CardHeader, CardContent } from "../components/ui/card";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from "../components/ui/select";

export const ApartmentTypeQuestion = () => {
    return (
        <Card>
            <CardHeader>3. Rodzaj mieszkania:</CardHeader>
            <CardContent>
                <Select>
                    <SelectTrigger className="w-full"></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Dom</SelectItem>
                        <SelectItem value="dark">Blok</SelectItem>
                    </SelectContent>
                </Select>
            </CardContent>
        </Card>
    );
};
