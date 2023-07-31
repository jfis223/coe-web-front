import type { CMSAccordionItem } from "@/src/core/cms_blocks/domain/models/items/cms_accordion_item";
import { useTranslation } from "next-i18next";
import Styled from "./accordion_item.styled";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { CldImage } from "next-cloudinary";

export const AccordionItem = ({ content, uniqueInUruguay, title, linkList, image }: CMSAccordionItem) => {
  const [isOpened, setIsOpened] = useState(false);
  const { t } = useTranslation();
  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <Styled.AccordionHead isOpened={isOpened} onClick={handleClick}>
        <div>
          <span>
            <b>{title}</b>
          </span>
          {uniqueInUruguay && <Styled.Label>{t("uniqueInUruguay")}</Styled.Label>}
        </div>
        <Styled.Icon isOpened={isOpened} />
      </Styled.AccordionHead>
      <CSSTransition in={isOpened} timeout={500} mountOnEnter unmountOnExit>
        {(state) => (
          <Styled.AccordionBody state={state}>
            <div>{content && <Styled.Content dangerouslySetInnerHTML={{ __html: content }} />}</div>
            <div>{image && <CldImage alt={image.altText} src={image.image.data.attributes.url} width={350} height={350} />}</div>
          </Styled.AccordionBody>
        )}
      </CSSTransition>
    </>
  );
};
