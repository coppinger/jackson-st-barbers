import React from "react";
import { useRef, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function Map() {
  const googlemap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyDHCKMXU_VpkXE8ZkB3lZZvKBZWMx9CatE",
      version: "weekly",
    });
    let map;
    loader.load().then(() => {
      const JacksonStBarbers = {
        lat: -41.224789528241885,
        lng: 174.87637967164855,
      };
      map = new google.maps.Map(googlemap.current, {
        center: JacksonStBarbers,
        zoom: 16,
        fullscreenControl: false, // remove the top-right button
        mapTypeControl: false, // remove the top-left buttons
        streetViewControl: false, // remove the pegman
        zoomControl: false, // remove the bottom-right buttons
      });
      const marker = new google.maps.Marker({
        position: JacksonStBarbers,
        map: map,
      });
    });
  });
  return <div id="map" className="w-full h-full" ref={googlemap} />;
}
