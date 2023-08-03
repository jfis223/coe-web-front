import type { CMSClinic } from "@/src/core/cms_clinics/domain/models/cms_clinic";
import Styled from "./clinic_card.styled";
import { ClinicItem } from "@/src/ui/components/clinic_item/clinic_item";

interface Props {
  clinic: CMSClinic;
  even?: boolean;
  showMap: boolean;
}

const { NEXT_PUBLIC_GOOGLE_MAPS_API_KEY } = process.env;

export const ClinicCard = ({ clinic, even, showMap }: Props) => {
  return (
    <Styled.Wrapper even={even}>
      {NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && showMap && (
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=${NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=place_id:${clinic.attributes.location.place_id}`}
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
      <ClinicItem clinic={clinic} />
    </Styled.Wrapper>
  );
};
