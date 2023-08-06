import type { CMSContactLinks } from "@/src/core/cms_blocks/domain/models/blocks/cms_contact_links";
import { Button } from "@/src/ui/components/button/button";
import Styled from "./contact_links_block.styled";

export const ContactLinksBlock = ({ groups }: CMSContactLinks) => {
  return (
    <Styled.Wrapper>
      {groups.map((group, index) => {
        return (
          <div key={index}>
            {group.title && <Styled.Title>{group.title}</Styled.Title>}
            <Styled.Group>
              {group.contactItems.map((item, index) => {
                return (
                  <Button key={index}>
                    <a href={`mailto:${item.email}`}>
                      {item.name && item.name}
                      {!item.name && group.title && group.title}
                      {!item.name && !group.title && item.email}
                    </a>
                  </Button>
                );
              })}
            </Styled.Group>
          </div>
        );
      })}
    </Styled.Wrapper>
  );
};
