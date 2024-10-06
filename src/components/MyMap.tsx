import { useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MyMap = ({ position, setPosition }: any) => {
    const markerRef = useRef(null);

    const handleMarkerDragEnd = () => {
        const marker = markerRef.current;
        if (marker != null) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const newPosition = (marker as any).getLatLng();
            setPosition([newPosition.lat, newPosition.lng]);
            console.log("Marker new position:", newPosition);
        }
    };

    return (
        <div style={{ position: "relative" }}>
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={true}
                style={{ minHeight: "100vh", minWidth: "100vw", zIndex: 0 }} // neutral z-index
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={position}
                    draggable={true}
                    eventHandlers={{
                        dragend: handleMarkerDragEnd,
                    }}
                    ref={markerRef}
                />
            </MapContainer>
        </div>
    );
};
