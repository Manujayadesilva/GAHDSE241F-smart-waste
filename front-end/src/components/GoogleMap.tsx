"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { fetchBinsData } from "../firebase/db";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 6.9271, // Default latitude (Colombo)
  lng: 79.8612, // Default longitude (Colombo)
};

const GoogleMapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [bins, setBins] = useState<any>(null);

  useEffect(() => {
    fetchBinsData(setBins);
  }, []);

  if (!isLoaded) return <p>Loading Map...</p>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      {bins &&
        Object.values(bins).map((bin: any, index) => (
          <Marker
            key={index}
            position={{ lat: bin.lat, lng: bin.lng }}
            label={bin.status === "Full" ? "🔴" : "🟢"}
          />
        ))}
    </GoogleMap>
  );
};

export default GoogleMapComponent;
