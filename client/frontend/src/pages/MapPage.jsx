import { useCallback, useState } from "react";
import {GoogleMap, useJsApiLoader, Marker, InfoWindow} from '@react-google-maps/api';

const containerStyle = {
    height: "100%",
    width: "90vh"
}

const centre = {
    lat:12.987,
    lng: 77.5946
}

const MapPage = () => {
    const [selectedBusiness, setSelectedBusiness] = useState(null);

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    });


const businesses = [
    { id: 1, name: "Cafe Aroma", lat: 12.9721, lng: 77.5945, offer: "Buy 1 Get 1 Coffee" },
    { id: 2, name: "TechFix", lat: 12.9708, lng: 77.5960, offer: "15% off on repairs" },
    { id: 3, name: "BookWorld", lat: 12.9732, lng: 77.5951, offer: "20% off all books" },
    ];

const onMarkerClick = useCallback((business) => {
setSelectedBusiness(business);
}, []);

if(!isLoaded)
    return <p>Loading map...</p>


return (

    <div>
        <h1 className="text-centre text=xl font-bold my-2">Nearby Partner Business</h1>
        <GoogleMap mapContainerStyle = {containerStyle} centre = {centre} zoom={15} >
        {businesses.map((biz) => (
            <Marker
                key = {biz.id}
                position = {{lat: biz.lat, lng: biz.lng}}
                onClick ={() => onMarkerClick(biz)}
                />
        ))}
        
        { selectedBusiness && (
            <InfoWindow
            position = {
                {
                    lat: selectedBusiness.lat,
                    lng: selectedBusiness.lng
                }
            }
            onCloseClick = {() => selectedBusiness(null)}
            >
                <div>
            <h3>{selectedBusiness.name}</h3>
                <p>{selectedBusiness.offer}</p>
                <button
                onClick={() => alert(`Opening chat with ${selectedBusiness.name}`)}
                className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                Chat
                </button>
                </div>
            
            </InfoWindow>
        )}
        </GoogleMap>
    </div>
    );
    };


    export default MapPage;