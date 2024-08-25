export const TransportationWay = {
  BICYCLING: 0,
  DRIVING: 1,
  TRANSIT: 2,
  WALKING: 3,
};
export type TransportationWay =
  (typeof TransportationWay)[keyof typeof TransportationWay];
