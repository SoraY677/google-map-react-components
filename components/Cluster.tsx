import { useContext, useEffect } from "react";
import { MapContext } from "./Map";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

interface Props {
  locations: google.maps.LatLngLiteral[];
}

const Cluster = ({ locations }: Props) => {
  const map = useContext(MapContext);

  useEffect(() => {
    (async () => {
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;
      const markers = locations.map((position) => {
        const marker = new AdvancedMarkerElement({
          map,
          ...{
            position,
          },
        });
        return marker;
      });

      new MarkerClusterer({ markers, map });
    })();
  }, [map]);

  return <></>;
};

export default Cluster;
