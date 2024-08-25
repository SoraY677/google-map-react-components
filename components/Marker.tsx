import { useContext, useEffect, useState } from "react";
import { MapContext } from "./Map";

interface Props {
  options: {
    title: string;
    position?: google.maps.LatLngLiteral | null;
  };
  pinOption?: {
    backgroundColor: string;
    path: string;
  };
  dragEndHandler: (e: google.maps.MapMouseEvent) => void;
}
const Marker = ({ options, pinOption, dragEndHandler }: Props) => {
  const map = useContext(MapContext);
  const [marker, setMarker] = useState<google.maps.marker.AdvancedMarkerElement | null>(null);

  useEffect(() => {
    if (!options.position) return;
    (async () => {
      if (!map) return;
      if (marker) {
        marker.map = null;
      }
      const { AdvancedMarkerElement } = (await google.maps.importLibrary("marker")) as google.maps.MarkerLibrary;
      let contentObj = {};
      if (pinOption != null) {
        const iconImg = document.createElement("img");
        iconImg.src = `${pinOption.path}`;
        iconImg.setAttribute("width", "16");
        iconImg.setAttribute("height", "16");
        const pinView = new google.maps.marker.PinElement({
          background: pinOption.backgroundColor,
          borderColor: "#000000",
          glyph: iconImg,
        });
        contentObj = {
          content: pinView.element,
        };
      }
      const markerInstance = new AdvancedMarkerElement({
        map,
        ...options,
        gmpDraggable: true,
        ...contentObj,
      });
      markerInstance.addListener("dragend", dragEndHandler);
      setMarker(markerInstance);
    })();
  }, [map, options]);

  return <></>;
};

export default Marker;
