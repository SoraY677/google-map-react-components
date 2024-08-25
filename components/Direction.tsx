import { useState, useContext, useEffect } from "react";
import { MapContext } from "./Map";
import { TransportationWay } from "@/types/TransportaionWay.type";

const getTravelMode = async (transporationWay: TransportationWay) => {
  const routesLib = (await google.maps.importLibrary("routes")) as google.maps.RoutesLibrary;
  const travelMode = routesLib.TravelMode;

  switch (transporationWay) {
    case TransportationWay.DRIVING:
      return travelMode.DRIVING;
    case TransportationWay.BICYCLING:
      return travelMode.BICYCLING;
    case TransportationWay.TRANSIT:
      return travelMode.TRANSIT;
    case TransportationWay.WALKING:
      return travelMode.WALKING;
    default:
      return travelMode.DRIVING;
  }
};

interface Props {
  origin?: google.maps.LatLngLiteral | null;
  destination?: google.maps.LatLngLiteral | null;
  transporationWay: TransportationWay;
  waypoints?: google.maps.DirectionsWaypoint[] | null;
}
/**
 * 2点間の開始終了・中間座標の指定で経路を生成
 * @param  {
 *  origin?: {lat: number, lng: number}
 *  destination?: {lat: number, lng: number}
 *  transporationWay: TransportationWay
 *  waypoints?: {lat: number, lng: number}[]
 * }
 * @returns
 */
const Direction = ({ origin, destination, transporationWay, waypoints }: Props) => {
  const map = useContext(MapContext);
  const [directionsService, setDirectionService] = useState<google.maps.DirectionsService | null>(null);
  const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer | null>(null);

  useEffect(() => {
    (async () => {
      setDirectionService(() => {
        return new google.maps.DirectionsService();
      });
      setDirectionsRenderer(() => {
        return new google.maps.DirectionsRenderer({
          suppressMarkers: true,
        });
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!directionsRenderer || !directionsService || !map) return;
      if (!origin || !destination) return;
      directionsRenderer.setMap(map);
      const travelMode = await getTravelMode(transporationWay);
      const request: google.maps.DirectionsRequest = {
        origin,
        destination,
        travelMode,
      };

      if (waypoints) request.waypoints = waypoints;

      directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        }
      });
    })();
  }, [map, directionsService, directionsRenderer, origin, destination, waypoints]);

  return <></>;
};

export default Direction;
