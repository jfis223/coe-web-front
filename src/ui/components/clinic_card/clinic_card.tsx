import type { CMSClinic } from "@/src/core/cms_clinics/domain/models/cms_clinic";
import Styled from "./clinic_card.styled";
import GoogleMap from "@/src/ui/components/google_map/google_map";
import { Envelope, Location, Phone } from "@/src/ui/icons";

interface Props {
  clinic: CMSClinic;
  even?: boolean;
  showMap: boolean;
}
export const ClinicCard = ({ clinic, even, showMap }: Props) => {
  return (
    <Styled.Wrapper even={even}>
      {showMap && <GoogleMap center={{ lat: clinic.attributes.location.lat, lng: clinic.attributes.location.lng }} zoom={16} />}
      <section>
        <h2>{clinic.attributes.name}</h2>
        <a href={`https://www.google.com/maps/place/?q=place_id:${clinic.attributes.location.place_id}`} target="_blank">
          <span>
            <Location />
          </span>
          {clinic.attributes.address}
        </a>
        <a href={`mailto:${clinic.attributes.email}`} target="_blank">
          <span>
            <Envelope />
          </span>
          {clinic.attributes.email}
        </a>
        <div>
          <span>
            <Phone />
          </span>
          {clinic.attributes.phones.map((phone, index) => {
            return (
              <>
                <span key={index}>
                  <a href={`tel:${phone.phone}`} target="_blank">
                    {phone.phone}
                  </a>
                </span>
                {index + 1 !== clinic.attributes.phones.length && <span> / </span>}
              </>
            );
          })}
        </div>
      </section>
    </Styled.Wrapper>
  );
};
