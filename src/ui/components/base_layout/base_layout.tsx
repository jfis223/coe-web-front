import type { PropsWithChildren } from "react";
import Styled from "@/src/ui/components/base_layout/base_layout.styled";
import React, {useEffect} from "react";
import {useIsMobileProvider} from "@/src/ui/providers/is_mobile.provider";
import {Logo, Envelope, _Gradient, WhatsApp} from "@/src/ui/icons";
import Link from "next/link";
import type {CMSMenu} from "@/src/core/cms_menus/domain/models/cms_menu";
import ReactWhatsapp from 'react-whatsapp';

export const BaseLayout = ({ children, header }: PropsWithChildren<{ header: CMSMenu }>) => {
  const isMobile = useIsMobileProvider((state) => state.isMobile);
  const showMobileMenu = useIsMobileProvider((state) => state.showMobileMenu);
  const setShowMobileMenu = useIsMobileProvider((state) => state.setShowMobileMenu);

  return (
    <Styled.Wrapper>
      <Styled.Nav>
          <Styled.MainHeader>
              <Link href="/">
                  <Styled.MainLogo>
                      <Logo />
                  </Styled.MainLogo>
              </Link>
              <Styled.DesktopLinks>
                  {header?.attributes?.items.data.map((item) =>
                      <li key={item.id}>
                          <Link
                              className="underline"
                              href={item.attributes.url ?? ""}
                              target={item.attributes.target ?? ""}
                          >
                              {item.attributes.title}
                          </Link>
                      </li>
                  )}
                  <Styled.AnimatedIcon>
                      <Link
                        href={'/contacto'}
                      >
                          <Envelope />
                          <_Gradient />
                      </Link>
                  </Styled.AnimatedIcon>
                  <Styled.AnimatedIcon>
                      <ReactWhatsapp
                          number="1-212-736-5000"
                          message="Hello World!!!"
                          element={"button"}
                      >
                          <WhatsApp />
                      </ReactWhatsapp>
                  </Styled.AnimatedIcon>
              </Styled.DesktopLinks>
          </Styled.MainHeader>
      </Styled.Nav>
      <main>{children}</main>
      <Styled.Footer>cool footer</Styled.Footer>
    </Styled.Wrapper>
  );
};
