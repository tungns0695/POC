'use client';
import React from 'react';
import { Shipment } from '../../types/Shipment';
import L from 'leaflet';
import { MapContainer, Marker, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

const center = {
  lat: 15.736717,
  lng: 99.8342
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
const defaultZoomLevel = 7;

export const Map: React.FC<MapProps> = ({ shipments }) => {
  const markers = shipments.map((x, index) => {
    let icon = icons[parseInt(x.Group.replace('group', ''))] ?? icons[0];
    return <Marker
      key={index}
      icon={icon}
      position={{ lat: x.Coordinate.lat, lng: x.Coordinate.long }}
    >
    </Marker>
  });

  return <MapContainer style={{ width: '100%', height: '100vh' }} center={center} zoom={defaultZoomLevel} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {markers}
  </MapContainer>
}
