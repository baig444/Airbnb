// Import necessary dependencies
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

const MapComponent = () => {
  return (
    <div style={{ height: "400px", width: "100%" }}> {/* Container for the map */}
      {/* MapContainer is like a div for the Leaflet map */}
      <MapContainer
        center={[51.505, -0.09]} // Set the initial coordinates
        zoom={13} // Set the initial zoom level
        style={{ height: "100%", width: "100%" }} // Set the map size to fill the container
      >
        {/* TileLayer is the actual map layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // OpenStreetMap tiles
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // Map attribution
        />
        {/* Marker for a specific location */}
        <Marker position={[51.505, -0.09]}>
          {/* Popup to display info when marker is clicked */}
          <Popup>
            A simple popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

// Export the map component for use in other parts of the app
export default MapComponent;
