import Styled from "./navbar_desktop_links.styled";
import Link from "next/link";
import { _Gradient, Envelope, WhatsApp } from "@/src/ui/icons";
import ReactWhatsapp from "react-whatsapp";
import React from "react";
import type { PropsWithChildren } from "react";
import type { CMSMenu } from "@/src/core/cms_menus/domain/models/cms_menu";
import { useIsMobileProvider } from "@/src/ui/providers/is_mobile.provider";

export const NavBarDesktopLinks = ({ header }: PropsWithChildren<{ header: CMSMenu }>) => {
  const isMobile = useIsMobileProvider((state) => state.isMobile);
  const showMobileMenu = useIsMobileProvider((state) => state.showMobileMenu);
  const setShowMobileMenu = useIsMobileProvider((state) => state.setShowMobileMenu);
  return (
    <Styled.DesktopLinks>
      {!isMobile &&
        header?.attributes?.items.data.map((item) => (
          <li key={item.id}>
            <Link className="underline" href={item.attributes.url ?? ""} target={item.attributes.target ?? ""}>
              {item.attributes.title}
            </Link>
          </li>
        ))}
      <Styled.AnimatedIcon>
        <Link href={"/contacto"} onClick={() => isMobile && showMobileMenu && setShowMobileMenu()}>
          Email
          <Envelope />
          <_Gradient />
        </Link>
      </Styled.AnimatedIcon>
      <Styled.AnimatedIcon>
        <ReactWhatsapp number="1-212-736-5000" message="Hello World!!!" element={"button"}>
          WhatsApp
          <WhatsApp />
        </ReactWhatsapp>
      </Styled.AnimatedIcon>
    </Styled.DesktopLinks>
  );
};
