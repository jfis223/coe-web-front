import Styled from "./navbar_desktop_links.styled";
import Link from "next/link";
import { _Gradient, Envelope, WhatsApp } from "@/src/ui/icons";
import ReactWhatsapp from "react-whatsapp";
import React from "react";
import type { PropsWithChildren } from "react";
import type { CMSMenu } from "@/src/core/cms_menus/domain/models/cms_menu";
import { useIsMobileProvider } from "@/src/ui/providers/is_mobile.provider";
import { useSettingsProvider } from "@/src/ui/providers/settings.provider";
import { useTranslation } from "next-i18next";

export const NavBarDesktopLinks = ({ header }: PropsWithChildren<{ header: CMSMenu }>) => {
  const isMobile = useIsMobileProvider((state) => state.isMobile);
  const showMobileMenu = useIsMobileProvider((state) => state.showMobileMenu);
  const setShowMobileMenu = useIsMobileProvider((state) => state.setShowMobileMenu);
  const settings = useSettingsProvider((state) => state.settings);
  const { t } = useTranslation();
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
          {t("email")}
          <Envelope />
          <_Gradient />
        </Link>
      </Styled.AnimatedIcon>
      <Styled.AnimatedIcon>
        <ReactWhatsapp number={settings?.whatsappNumber.replace(" ", "") ?? ""} message={t("whatsAppMessage")} element={"button"}>
          WhatsApp
          <WhatsApp />
        </ReactWhatsapp>
      </Styled.AnimatedIcon>
    </Styled.DesktopLinks>
  );
};
