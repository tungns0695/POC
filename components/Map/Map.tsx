'use client';
import React, { useRef, useEffect, useState } from 'react';
// import { GoogleMap, useJsApiLoader, Marker, } from '@react-google-maps/api';
import { Shipment } from '../../types/Shipment';
// import { APIProvider, Map as GoogleMap, Marker } from '@vis.gl/react-google-maps';
import L from 'leaflet';
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '100vh',
  position: 'fixed',
  top: '0',
  left: '0'
};

const center = {
  lat: 21.0278,
  lng: 105.8342
};

export interface MapProps {
  shipments: Shipment[];
}

const markerIcons = [
  {
    iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
  },
  {
    iconUrl: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
  },
  {
    iconUrl: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
  },
  {
    iconUrl: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
  },
  {
    iconUrl: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png',
  },
  {
    iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png',
  },
  {
    iconUrl: 'http://maps.google.com/mapfiles/ms/icons/ltblue-dot.png',
  }
];
const icons = markerIcons.map(x => new L.Icon({
  iconUrl: x.iconUrl,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
}));
const defaultZoomLevel = 12;

export const Map: React.FC<MapProps> = ({ shipments }) => {
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: "AIzaSyDH1Qz4BJ5NhoTHv4OyuSj_NuybB2vd600"
  // });
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(function mount() {
    setIsloaded(true);
  }, [])

  const [map, setMap] = React.useState<any>(null)

  const onLoad = React.useCallback(function callback(map: any) {
    setMap(map)
  }, [])

  const markers = shipments.map((x, index) => {
    let icon = icons[parseInt(x.Group.replace('group', ''))] ?? icons[0];
    return <Marker
      key={index}
      icon={icon}
      position={{ lat: x.Coordinate.lat, lng: x.Coordinate.long }}
    >
    </Marker>
  });

  const mapOptions = [
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.station.bus",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.station.rail",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ]

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])
  return isLoaded && <MapContainer style={{ width: '100%', height: '100vh' }} center={center} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {markers}
  </MapContainer>
  // return <APIProvider apiKey={'AIzaSyDH1Qz4BJ5NhoTHv4OyuSj_NuybB2vd600'}>
  //   <GoogleMap center={center} zoom={10} style={{ width: '100%', height: '100vh' }}>
  //     {/* <Marker position={position} /> */}
  //   </GoogleMap>
  // </APIProvider>
  //   options={
  //     {
  //       styles: mapOptions,
  //       fullscreenControl: false
  //     }
  //   }
  //   center={center}
  //   zoom={defaultZoomLevel}
  //   onLoad={onLoad}
  //   onUnmount={onUnmount}
  // >
  //   {markers}
  //   <></>
  // </GoogleMap>)
}
