/* eslint-disable react/prop-types */
import { Map, Marker } from "pigeon-maps";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 600px;
  height: 400px;

  @media (max-width: 1200px) {
    width: 400px;
  }
  @media (max-width: 855px) {
    width: 100%;
  }
`;

const StyledMap = styled(Map)`
  width: 100% !important;
  height: 100% !important;
`;

export default function MyMap({ lat, lng }) {
  return (
    <MapContainer>
      <StyledMap defaultCenter={[lat, lng]} defaultZoom={11}>
        <Marker width={50} anchor={[lat, lng]} />
      </StyledMap>
    </MapContainer>
  );
}
