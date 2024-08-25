import { useContext, useEffect } from "react";
import { MapContext } from "./Map";

interface Props {
  clickHandler: (event: google.maps.MapMouseEvent) => void;
}

const TouchPanel = ({ clickHandler }: Props) => {
  const map = useContext(MapContext);
  useEffect(() => {
    if (!map) return;
    map.addListener("click", clickHandler);
  }, [map]);
  return <></>;
};
export default TouchPanel;
