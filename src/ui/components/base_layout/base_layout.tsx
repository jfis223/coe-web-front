import type { PropsWithChildren } from "react";
import Styled from "@/src/ui/components/base_layout/base_layout.styled";
import React from "react";
import {useIsMobileProvider} from "@/src/ui/providers/is_mobile.provider";
import getMenuBySlugController from "@/src/ui/controllers/get_menu_by_slug_controller";
import {Logo} from "@/src/ui/icons";

export const BaseLayout = ({ children }: PropsWithChildren<{ logged?: boolean }>) => {
  const isMobile = useIsMobileProvider((state) => state.isMobile);
  const showMobileMenu = useIsMobileProvider((state) => state.showMobileMenu);
  const setShowMobileMenu = useIsMobileProvider((state) => state.setShowMobileMenu);
  const menu = getMenuBySlugController('header');
  console.log(menu, 'menu')

  return (
    <Styled.Wrapper>
      <Styled.Nav>
          <Styled.MainHeader>
              <Styled.MainLogo>
                  <Logo />
              </Styled.MainLogo>
          </Styled.MainHeader>
      </Styled.Nav>
      <main>{children}</main>
      <Styled.Footer>cool footer</Styled.Footer>
    </Styled.Wrapper>
  );
};
