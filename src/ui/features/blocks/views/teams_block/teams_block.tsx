import type { CMSTeam } from "@/src/core/cms_blocks/domain/models/blocks/cms_team";
import Styled from "./teams_block.styled";
import { CldImage } from "next-cloudinary";
import { useTranslation } from "next-i18next";

export const TeamsBlock = ({ teamMembers }: CMSTeam) => {
  const { t } = useTranslation();
  return (
    <Styled.Wrapper>
      <Styled.MainTitle>{t("team")}</Styled.MainTitle>
      {teamMembers.data.map((member, index) => {
        return (
          <Styled.Card key={index}>
            <CldImage alt={member.attributes.name} src={member.attributes.image.data[0].attributes.url} width={350} height={350} />
            <Styled.Caption>
              <Styled.Title>{member.attributes.name}</Styled.Title>
              <Styled.Subtitle>{member.attributes.position}</Styled.Subtitle>
              <Styled.GlassBackground />
            </Styled.Caption>
          </Styled.Card>
        );
      })}
    </Styled.Wrapper>
  );
};
