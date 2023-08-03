import type { CMSClinics } from "@/src/core/cms_blocks/domain/models/blocks/cms_clinics";
import Styled from "./clinics_block.styled";
import { useSettingsProvider } from "@/src/ui/providers/settings.provider";
import { ClinicCard } from "@/src/ui/components/clinic_card/clinic_card";

export const ClinicsBlock = ({ showMap }: CMSClinics) => {
  const clinics = useSettingsProvider((state) => state.clinics);

  return (
    <Styled.Wrapper>
      {clinics?.map((clinic, index) => {
        return <ClinicCard clinic={clinic} even={index % 2 == 0} showMap={showMap} key={index} />;
      })}
    </Styled.Wrapper>
  );
};
