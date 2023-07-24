import type { PropsWithChildren } from "react";
import Styled from "@/src/ui/components/base_layout/base_layout.styled";
import { useUserProvider } from "@/src/ui/providers/user.provider";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { LoggingModal } from "@/src/ui/components/logging_modal/logging_modal";
import { CookieUtils } from "@front_web_mrmilu/utils";
import { useUiProvider } from "@/src/ui/providers/ui.provider";
import {useIsMobileProvider} from "@/src/ui/providers/is_mobile.provider";
import {Menu, Close, Logo} from "@/src/ui/icons";

export const BaseLayout = ({ children }: PropsWithChildren<{ logged?: boolean }>) => {
  const isMobile = useIsMobileProvider((state) => state.isMobile);
  const showMobileMenu = useIsMobileProvider((state) => state.showMobileMenu);
  const setShowMobileMenu = useIsMobileProvider((state) => state.setShowMobileMenu);

  const setLogged = useUserProvider((state) => state.setLogged);
  const login = useUserProvider((state) => state.login);
  const logout = useUserProvider((state) => state.logout);
  const isUserLogged = useUserProvider((state) => state.logged);
  const showModal = useUiProvider((state) => state.showModal);
  const router = useRouter();

  useEffect(() => {
    if (router.query.protectedRouteAccessAttempt) {
      showModal(<LoggingModal />);
    }
  }, [router.query, showModal]);

  useEffect(() => {
    const logged = CookieUtils.getCookie("logged");
    setLogged(logged === "true");
  }, [setLogged]);

  return (
    <Styled.Wrapper>
      <Styled.Nav>
        <Styled.MainHeaderWrapper>
          {isMobile && <Styled.MainHeaderMobileMenu onClick={setShowMobileMenu}> {showMobileMenu ? <Close /> : <Menu />} </Styled.MainHeaderMobileMenu>}
          {!isMobile && <Styled.MainHeaderCategories>TODO</Styled.MainHeaderCategories>}
          <Styled.MainLogo>
            <Logo />
          </Styled.MainLogo>
          <Styled.MainHeaderRightWrapper>TODO</Styled.MainHeaderRightWrapper>
        </Styled.MainHeaderWrapper>
      </Styled.Nav>
      <main>{children}</main>
      <Styled.Footer>cool footer</Styled.Footer>
    </Styled.Wrapper>
  );
};
