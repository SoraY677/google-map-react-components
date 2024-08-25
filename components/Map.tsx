import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";

export const MapContext = createContext<google.maps.Map | null>(null);

interface Props {
  options: google.maps.MapOptions;
  children?: ReactElement | ReactElement[];
}

/**
 * 地図のラッパー要素
 * 子要素にマップ関連のReactElementをとる
 * ```
 * // 例
 * <Map>
 *  <Marker position={...}/>
 * </Map>
 * ```
 * 子要素内にて `const map = useContext(MapContext);` とすることで`google.maps.Map`変数を取得可能
 * @param {options: google.maps.MapOptions, children: ReactElement}
 * @returns
 */
const Map = ({ options, children }: Props) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setMap(new window.google.maps.Map(ref.current, options));
    }
  }, []);

  useEffect(() => {
    map?.setOptions(options);
  }, [map]);

  return (
    <MapContext.Provider value={map}>
      <div ref={ref} style={{ width: "100%", height: "100%" }}>
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            // @ts-ignore
            return cloneElement(child, { map });
          }
        })}
      </div>
    </MapContext.Provider>
  );
};

export default Map;
