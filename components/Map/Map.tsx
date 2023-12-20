'use client';
import React, { useRef, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, } from '@react-google-maps/api';
import { Shipment } from '../../types/Shipment';

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

interface MapProps {
  shipments: Shipment[];
}

const markerIcons = [
  {
    url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
  },
  {
    url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
  },
  {
    url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
  },
  {
    url: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
  },
  {
    url: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png',
  },
  {
    url: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png',
  },
  {
    url: 'http://maps.google.com/mapfiles/ms/icons/ltblue-dot.png',
  }
];

const defaultZoomLevel = 12;

export const Map: React.FC<MapProps> = ({ shipments }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'Maps API Key',
    googleMapsApiKey: "AIzaSyBlD1kkM-qot2wE_YjNcjVjZflhEyotksc"
  });
  const [map, setMap] = React.useState<any>(null)

  const onLoad = React.useCallback(function callback(map: any) {
    setMap(map)
  }, [])

  const markers = shipments.map((x, index) => (
    <Marker
      key={x.Id}
      icon={markerIcons[parseInt(x.Group.replace('group', ''))]}
      position={{ lat: x.Coordinate.lat, lng: x.Coordinate.long }}
    />
  ));

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
  return isLoaded && (<GoogleMap
    mapContainerStyle={containerStyle}
    options={
      {
        styles: mapOptions,
        fullscreenControl: false
      }
    }
    center={center}
    zoom={defaultZoomLevel}
    onLoad={onLoad}
    onUnmount={onUnmount}
  >
    {markers}
    <></>
  </GoogleMap>)
}
