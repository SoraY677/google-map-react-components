import { CSSProperties, useContext, useEffect, useRef, useState } from "react";
import { MapContext } from "./Map";
import { CustomControlPosition } from "@/types/CustomControlPosition.type";
import { convertControlPosition } from "@/util/converter/ControllPosition";

const handleLocationError = (
  browserHasGeolocation: boolean,
  infoWindow: google.maps.InfoWindow,
  map: google.maps.Map
) => {
  infoWindow.setPosition(map.getCenter());
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
};

interface Props {
  text: string;
  style: CSSProperties;
  position: CustomControlPosition;
}

const CurrentPositionBtn = ({ text, style, position }: Props) => {
  const map = useContext(MapContext);
  const ref = useRef(null);
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(
    null
  );

  const clickHandler = () => {
    if (!map || !infoWindow) return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map);
        }
      );
    } else {
      handleLocationError(false, infoWindow, map);
    }
  };

  useEffect(() => {
    if (!map || !ref.current) return;
    const controlPosition = convertControlPosition(position);
    if (!controlPosition) return;

    setInfoWindow(new google.maps.InfoWindow());
    const locationButton = ref.current;
    map.controls[controlPosition].push(locationButton);
  }, [map]);

  return (
    <button
      className="flex items-center gap-2 text-lg p-2 rounded-md shadow-md bg-white text-primary font-medium		"
      ref={ref}
      onClick={clickHandler}
      style={style}
    >
      <img src="/current.svg" width="20" height="20" />
      {text}
    </button>
  );
};

export default CurrentPositionBtn;
