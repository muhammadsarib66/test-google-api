import { useState, useMemo, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  DrawingManagerF,
} from "@react-google-maps/api";
import logo from "../assets/logo11.png";
import { Resizable } from "re-resizable";

const GoogleMapApi = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);
  const GOOGLE_API_KEY = "AIzaSyD_Q_4oINoF9y41aNa-Rp2E8BzGuMSfE0I"; // This is My APi key wich is for testing and its not paid
  const libraries = ["drawing"];
  const VeriorLocation = { lat: 25.374512, lng: 68.360909 };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries: libraries,
  });

  const center = useMemo(() => userLocation || VeriorLocation, []);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
          },
          (error) => {
            setError(error.message);
          }
        );
      } else {
        setError("Geolocation is not supported by your browser.");
      }
    };
    getLocation();
  }, []);
  console.log(userLocation);
  if (loadError) {
    return <div>Error loading Google Maps API</div>;
  }

  return (
    <>
      <div className="flex flex-col py-10 text-center  items-center h-[100vh] w-screen bg-gradient-to-r from-teal-400 to-yellow-200">
        <h1 className="py-14 text-4xl font-mono font-bold text-white">
          Google APi Integrate
        </h1>
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <Resizable
            className=" border-2 border-black my-2"
            defaultSize={{
              width: 400,
              // height: 1000
            }}
            minHeight={300}
            maxHeight={500}
          >
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={13}
              onClick={(e) => {
                console.log("Map clicked", e);
              }}
            >
              <DrawingManagerF
                options={{
                  drawingControl: true,
                  drawingControlOptions: {
                    drawingModes: [
                      "marker",
                      "circle",
                      "polygon",
                      "polyline",
                      "rectangle",
                    ],
                  },
                }}
              />
              <Marker position={VeriorLocation} icon={logo} />
            </GoogleMap>
          </Resizable>
        )}
      </div>
    </>
  );
};

export default GoogleMapApi;
