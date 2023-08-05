import type { CMSTeam } from "@/src/core/cms_blocks/domain/models/blocks/cms_team";
import Styled from "./teams_block.styled";
import CardStyled from "@/src/ui/components/clinic_card/clinic_card.styled";
import { CldImage } from "next-cloudinary";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

export const TeamsBlock = ({ teamMembers, showBiography }: CMSTeam) => {
  const { t } = useTranslation();
  const [emblaRef] = useEmblaCarousel();

  if (showBiography)
    return (
      <Styled.WithBioWrapper>
        {teamMembers.data.map((member, index) => {
          return (
            <CardStyled.Wrapper key={index} even={index % 2 === 0} isFounder={member.attributes.isFounder}>
              <Styled.Card isFounder={member.attributes.isFounder}>
                <CldImage alt={member.attributes.name} src={member.attributes.image.data[0].attributes.url} width={350} height={350} />
                <Styled.Caption>
                  <Styled.Title>{member.attributes.name}</Styled.Title>
                  <Styled.Subtitle>
                    {member.attributes.position} {member.attributes.isFounder && `/ ${t("founder")}`}
                  </Styled.Subtitle>
                  <Styled.GlassBackground />
                </Styled.Caption>
              </Styled.Card>
              <Styled.Biography even={index % 2 === 0}>
                <div dangerouslySetInnerHTML={{ __html: member.attributes.biography }} />
              </Styled.Biography>
            </CardStyled.Wrapper>
          );
        })}
      </Styled.WithBioWrapper>
    );

  if (!showBiography)
    return (
      <Styled.Wrapper>
        <Styled.MainTitle>{t("team")}</Styled.MainTitle>
        <Link href={"/quienes-somos"}>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {teamMembers.data.map((member, index) => {
                return (
                  <Styled.Card className="embla__slide" key={index} isFounder={member.attributes.isFounder}>
                    <CldImage alt={member.attributes.name} src={member.attributes.image.data[0].attributes.url} width={350} height={350} />
                    <Styled.Caption>
                      <Styled.Title>{member.attributes.name}</Styled.Title>
                      <Styled.Subtitle>
                        {member.attributes.position} {member.attributes.isFounder && `/ ${t("founder")}`}
                      </Styled.Subtitle>
                      <Styled.GlassBackground />
                    </Styled.Caption>
                  </Styled.Card>
                );
              })}
            </div>
          </div>
        </Link>
      </Styled.Wrapper>
    );
  return <></>;
};
