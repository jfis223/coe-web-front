import type { CMSAccordionItem } from "@/src/core/cms_blocks/domain/models/items/cms_accordion_item";
import { useTranslation } from "next-i18next";
import Styled from "./accordion_item.styled";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { CldImage } from "next-cloudinary";
import { Button } from "@/src/ui/components/button/button";
import { useUiProvider } from "@/src/ui/providers/ui.provider";
import type { CMSVideo } from "@/src/core/cms_blocks/domain/models/items/cms_video";
import { VideoModal } from "@/src/ui/components/video_modal/video_modal";

export const AccordionItem = ({ content, uniqueInUruguay, title, linkList, image }: CMSAccordionItem) => {
  const showModal = useUiProvider((state) => state.showModal);
  const [isOpened, setIsOpened] = useState(false);
  const { t } = useTranslation();
  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  const showVideoModal = (video: CMSVideo) => {
    showModal(<VideoModal video={video} />);
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
            <div>
              {content && <Styled.Content dangerouslySetInnerHTML={{ __html: content }} />}
              {linkList &&
                linkList?.map((link, index) => {
                  return (
                    <Button key={index} onClick={() => showVideoModal(link.video)} isMain={link.isMain}>
                      <div dangerouslySetInnerHTML={{ __html: link.title }} />
                    </Button>
                  );
                })}
            </div>
            <div>{image && <CldImage alt={image.altText} src={image.image.data.attributes.url} width={350} height={350} />}</div>
          </Styled.AccordionBody>
        )}
      </CSSTransition>
    </>
  );
};
