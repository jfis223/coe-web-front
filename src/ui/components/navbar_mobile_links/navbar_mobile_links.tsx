import Styled from "./navbar_mobile_links.styled";
import Link from "next/link";
import React from "react";
import type {PropsWithChildren} from "react";
import type {CMSMenu} from "@/src/core/cms_menus/domain/models/cms_menu";
import {useTransition} from "@/src/ui/hooks/use_transition";
import {useIsMobileProvider} from "@/src/ui/providers/is_mobile.provider";

export const NavBarMobileLinks = ({ header} : PropsWithChildren<{ header: CMSMenu }>) => {
    const showMobileMenu = useIsMobileProvider((state) => state.showMobileMenu);
    const [ref, safeShowHide] = useTransition(showMobileMenu)
    return (
        <Styled.MobileLinks ref={ref} safeShowHide={safeShowHide}>
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
        </Styled.MobileLinks>
    )
}

