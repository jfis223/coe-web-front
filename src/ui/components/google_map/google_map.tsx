import GoogleMapReact from "google-map-react";
import { LogoLocation } from "@/src/ui/icons";
import Styled from "./google_map.styled";

const Marker = ({}: { lat: number; lng: number }) => (
  <Styled.Marker>
    <LogoLocation />
  </Styled.Marker>
);

interface Props {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const GoogleMap = ({ center, zoom }: Props) => {
  return (
    <Styled.Wrapper style={{ height: "450px", width: "100%" }}>
      {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
        <GoogleMapReact bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }} defaultCenter={center} defaultZoom={zoom}>
          <Marker lat={center.lat} lng={center.lng} />
        </GoogleMapReact>
      )}
    </Styled.Wrapper>
  );
};

export default GoogleMap;
