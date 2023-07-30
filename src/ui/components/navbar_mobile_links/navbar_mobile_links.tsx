import Styled from "./navbar_mobile_links.styled";
import Link from "next/link";
import React from "react";
import type { PropsWithChildren } from "react";
import type { CMSMenu } from "@/src/core/cms_menus/domain/models/cms_menu";
import { useIsMobileProvider } from "@/src/ui/providers/is_mobile.provider";
import { CSSTransition } from "react-transition-group";

export const NavBarMobileLinks = ({ header }: PropsWithChildren<{ header: CMSMenu }>) => {
  const showMobileMenu = useIsMobileProvider((state) => state.showMobileMenu);
  const setShowMobileMenu = useIsMobileProvider((state) => state.setShowMobileMenu);
  return (
    <CSSTransition in={showMobileMenu} timeout={500} mountOnEnter unmountOnExit>
      {(state) => (
        <Styled.MobileLinks state={state}>
          {header?.attributes?.items.data.map((item) => (
            <li key={item.id}>
              <Link onClick={setShowMobileMenu} className="underline" href={item.attributes.url ?? ""} target={item.attributes.target ?? ""}>
                {item.attributes.title}
              </Link>
            </li>
          ))}
        </Styled.MobileLinks>
      )}
    </CSSTransition>
  );
};
