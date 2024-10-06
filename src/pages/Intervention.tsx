import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const POLAND_BOUNDS = {
    latMin: 50,
    latMax: 54.4,
    lngMin: 15.1,
    lngMax: 23.2,
};

const categories = [
    "Dzieci do lat 5",
    "Diabetycy",
    "Osoby niepełnosprawne ruchowo",
    "Pozostałe",
];

const colors: number[] = [0, 120, 240, 60];

const generateCategoryMarkers = () => {
    const markers: { position: number[]; hue: number; category: string }[] = [];
    categories.forEach((category, i) => {
        const hue = colors[i];
        const categoryMarkers = Array.from({ length: 70 }, () => ({
            position: [
                Math.random() * (POLAND_BOUNDS.latMax - POLAND_BOUNDS.latMin) +
                    POLAND_BOUNDS.latMin,
                Math.random() * (POLAND_BOUNDS.lngMax - POLAND_BOUNDS.lngMin) +
                    POLAND_BOUNDS.lngMin,
            ],
            hue,
            category,
        }));
        markers.push(...categoryMarkers);
    });
    return markers;
};

const createColoredIcon = (hue: number) => {
    return new L.Icon({
        iconUrl: `data:image/svg+xml;charset=utf-8,
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="hsl(${hue}, 100%, 50%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        shadowSize: [41, 41],
    });
};

export default function InterventionPage() {
    const [markers, setMarkers] = useState<
        { position: number[]; hue: number; category: string }[]
    >([]);
    const [enabledCategories, setEnabledCategories] =
        useState<string[]>(categories);

    useEffect(() => {
        setMarkers(generateCategoryMarkers());
    }, []);

    const toggleCategory = (category: string) => {
        setEnabledCategories((prev) =>
            prev.includes(category)
                ? prev.filter((cat) => cat !== category)
                : [...prev, category]
        );
    };

    return (
        <div>
            <MapContainer
                center={[52.10650519075632, 24.301757812500004]}
                zoom={7}
                style={{ minHeight: "100vh", minWidth: "100vw", zIndex: 0 }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers
                    .filter((marker) =>
                        enabledCategories.includes(marker.category)
                    )
                    .map((marker, idx) => (
                        <Marker
                            key={idx}
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            position={marker.position as any}
                            icon={createColoredIcon(marker.hue)}
                        />
                    ))}
            </MapContainer>

            <aside className="absolute top-0 right-0 w-5/12 z-10">
                <Card className="m-3 p-2">
                    <CardHeader className="text-2xl">
                        System interwencji
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <StatusCard />
                        <FilterCard
                            categories={categories}
                            toggleCategory={toggleCategory}
                            enabledCategories={enabledCategories}
                        />
                    </CardContent>
                </Card>
            </aside>
        </div>
    );
}

function StatusCard() {
    return (
        <Card>
            <CardHeader>Stan zgłoszeń</CardHeader>
            <CardContent>
                <StatusBar
                    label="Zrealizowane"
                    value={90}
                    count={2150}
                    color="green"
                />
                <StatusBar
                    label="Oczekujące"
                    value={10}
                    count={238}
                    color="orange"
                />
            </CardContent>
        </Card>
    );
}

function FilterCard({
    categories,
    toggleCategory,
    enabledCategories,
}: {
    categories: string[];
    toggleCategory: (category: string) => void;
    enabledCategories: string[];
}) {
    return (
        <Card>
            <CardHeader>Filtrowanie incydentów</CardHeader>
            <CardContent className="flex flex-col gap-2">
                {categories.map((category, idx) => (
                    <FilterOption
                        key={idx}
                        label={category}
                        checked={enabledCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                    />
                ))}
            </CardContent>
        </Card>
    );
}

function StatusBar({
    label,
    value,
    count,
    color,
}: {
    label: string;
    value: number;
    count: number;
    color: string;
}) {
    return (
        <div>
            <CardTitle className="text-sm font-medium">{label}</CardTitle>
            <div className="flex items-center gap-2">
                <Progress
                    value={value}
                    className={`h-2 w-full bg-${color}-200`}
                />
                <p className={`text-sm font-semibold text-${color}-600`}>
                    {count}
                </p>
            </div>
        </div>
    );
}

function FilterOption({
    label,
    checked,
    onChange,
}: {
    label: string;
    checked: boolean;
    onChange: () => void;
}) {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox checked={checked} onCheckedChange={onChange} />
            <Label>{label}</Label>
        </div>
    );
}
