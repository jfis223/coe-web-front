import type { PropsWithChildren } from "react";
import Styled from "@/src/ui/components/base_layout/base_layout.styled";
import React from "react";
import { useIsMobileProvider } from "@/src/ui/providers/is_mobile.provider";
import { Logo, Menu, Close, WhatsApp } from "@/src/ui/icons";
import Link from "next/link";
import type { CMSMenu } from "@/src/core/cms_menus/domain/models/cms_menu";
import { NavBarDesktopLinks } from "@/src/ui/components/navbar_desktop_links/navbar_desktop_links";
import { NavBarMobileLinks } from "@/src/ui/components/navbar_mobile_links/navbar_mobile_links";
import { Orbs } from "@/src/ui/components/orbs/components/orbs";
import { useTranslation } from "next-i18next";
import { useSettingsProvider } from "@/src/ui/providers/settings.provider";
import ReactWhatsapp from "react-whatsapp";
import { ClinicItem } from "@/src/ui/components/clinic_item/clinic_item";

export const BaseLayout = ({ children, header }: PropsWithChildren<{ header: CMSMenu }>) => {
  const isMobile = useIsMobileProvider((state) => state.isMobile);
  const settings = useSettingsProvider((state) => state.settings);
  const showMobileMenu = useIsMobileProvider((state) => state.showMobileMenu);
  const setShowMobileMenu = useIsMobileProvider((state) => state.setShowMobileMenu);
  const clinics = useSettingsProvider((state) => state.clinics);
  const { t } = useTranslation();
  console.log(clinics);
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
      <Styled.Footer>
        <Styled.FooterContent>
          <Styled.FooterHalfWidthContent>
            {clinics?.map((clinic, index) => {
              return <ClinicItem clinic={clinic} key={index} />;
            })}
          </Styled.FooterHalfWidthContent>
          <Styled.FooterHalfWidthContent>
            <div>
              <Styled.AnimatedIcon>
                <ReactWhatsapp number={settings?.whatsappNumber.replace(" ", "") ?? ""} message={t("whatsAppMessage")} element={"button"}>
                  {t("whatsAppTitle")}
                  <WhatsApp />
                </ReactWhatsapp>
              </Styled.AnimatedIcon>
              {t("whatsAppTime", {
                from: new Date(`August 19, 1975 ${settings?.whatsappFrom}`).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false
                }),
                to: new Date(`August 19, 1975 ${settings?.whatsappTo}`).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
              })}
            </div>
          </Styled.FooterHalfWidthContent>
          <Styled.FooterFullWidth>{t("copyright", { year: new Date().getFullYear() })}</Styled.FooterFullWidth>
        </Styled.FooterContent>
      </Styled.Footer>
      <Orbs />
    </Styled.Wrapper>
  );
};
