import {useEffect, useLayoutEffect, useRef, useState} from "react";

export const useTransition = (toggle: boolean) => {
    const didMountRef = useRef(false);
    const componentRef: any = useRef(null);
    const [safeShowHide, setSafeShowHide] = useState(false);

    useLayoutEffect(() => {
        if (didMountRef.current) {
            setSafeShowHide(true);
        } else {
            didMountRef.current = true;
        }
    }, [toggle]);

    useEffect(() => {
        componentRef.current.addEventListener("transitionend", () => {
            setSafeShowHide(false);
        });
    }, [componentRef, setSafeShowHide]);

    return [componentRef, safeShowHide];
};
