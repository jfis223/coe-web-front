import type { CMSClinic } from "@/src/core/cms_clinics/domain/models/cms_clinic";
import Styled from "./clinic_item.styled";
import { Envelope, Location, Phone } from "@/src/ui/icons";

interface Props {
  clinic: CMSClinic;
}

export const ClinicItem = ({ clinic }: Props) => {
  console.log(clinic.attributes.location);
  return (
    <Styled.Wrapper>
      <Styled.Text>
        <b>{clinic.attributes.name}</b>
      </Styled.Text>
      <Styled.Text>
        <a href={`https://www.google.com/maps/place/?q=place_id:${clinic.attributes.location.place_id}`} target="_blank">
          <span>
            <Location />
          </span>
          {clinic.attributes.address}
        </a>
      </Styled.Text>
      <Styled.Text>
        <a href={`mailto:${clinic.attributes.email}`} target="_blank">
          <span>
            <Envelope />
          </span>
          {clinic.attributes.email}
        </a>
      </Styled.Text>
      <Styled.Text>
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
      </Styled.Text>
    </Styled.Wrapper>
  );
};
