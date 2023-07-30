import type { PropsWithChildren } from "react";
import Styled from "@/src/ui/components/base_layout/base_layout.styled";
import React from "react";
import { useIsMobileProvider } from "@/src/ui/providers/is_mobile.provider";
import { Logo, Menu, Close } from "@/src/ui/icons";
import Link from "next/link";
import type { CMSMenu } from "@/src/core/cms_menus/domain/models/cms_menu";
import { NavBarDesktopLinks } from "@/src/ui/components/navbar_desktop_links/navbar_desktop_links";
import { NavBarMobileLinks } from "@/src/ui/components/navbar_mobile_links/navbar_mobile_links";
import { Orbs } from "@/src/ui/components/orbs/components/orbs";

export const BaseLayout = ({ children, header }: PropsWithChildren<{ header: CMSMenu }>) => {
  const isMobile = useIsMobileProvider((state) => state.isMobile);
  const showMobileMenu = useIsMobileProvider((state) => state.showMobileMenu);
  const setShowMobileMenu = useIsMobileProvider((state) => state.setShowMobileMenu);

  return (
    <Styled.Wrapper>
      <Styled.Nav>
        <Styled.MainHeader>
          {isMobile && <Styled.MenuIcon onClick={setShowMobileMenu}>{showMobileMenu ? <Close /> : <Menu />}</Styled.MenuIcon>}
          <Link href="/" onClick={() => isMobile && showMobileMenu && setShowMobileMenu()}>
            <Styled.MainLogo>
              Logo
              <Logo />
            </Styled.MainLogo>
          </Link>
          <NavBarDesktopLinks header={header} />
        </Styled.MainHeader>
      </Styled.Nav>
      {isMobile && <NavBarMobileLinks header={header} />}
      <main>{children}</main>
      <Styled.Footer>cool footer</Styled.Footer>
      <Orbs />
    </Styled.Wrapper>
  );
};
