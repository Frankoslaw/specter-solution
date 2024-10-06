import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const App = () => {
  const [position, setPosition] = useState([50.56203, 22.05076]);
  const markerRef = useRef(null);

  const handleMarkerDragEnd = () => {
    const marker = markerRef.current;
    if (marker != null) {
      const newPosition = (marker as any).getLatLng();
      setPosition([newPosition.lat, newPosition.lng]);
      console.log("Marker new position:", newPosition);
    }
  };

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ minHeight: "100vh", minWidth: "100vw" }}
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
  );
};

export default App;
