/* eslint-disable react/prop-types */
import { Map, Marker } from "pigeon-maps";

export default function MyMap({ lat, lng }) {
  return (
    <Map height={600} width="50%" defaultCenter={[lat, lng]} defaultZoom={11}>
      <Marker width={50} anchor={[lat, lng]} />
    </Map>
  );
}
