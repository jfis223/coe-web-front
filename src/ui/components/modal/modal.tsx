import type { PropsWithChildren, ReactElement } from "react";
import { cloneElement, forwardRef, useEffect, useRef, useState } from "react";
import Styled from "@/src/ui/components/modal/modal.styled";
import { Close as CloseIcon } from "@/src/ui/icons";
import { useUiProvider } from "@/src/ui/providers/ui.provider";
import { useClickOutside } from "@front_web_mrmilu/hooks";

export const Modal = () => {
  const modalShowing = useUiProvider((state) => state.modal.show);
  const modalContent = useUiProvider((state) => state.modal.content);
  const hideModal = useUiProvider((state) => state.hideModal);

  const [showContent, setShowContent] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalShowing) {
      setTimeout(() => {
        setShowContent(true);
      }, 80);
    } else {
      setShowContent(false);
    }
  }, [modalShowing]);

  useClickOutside(modalContentRef, () => hideModal());

  const escapeKeyUpListener = (e: KeyboardEvent) => {
    if (modalShowing && (e.key === "Escape" || e.keyCode === 27)) {
      hideModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", escapeKeyUpListener);

    return () => {
      document.removeEventListener("keyup", escapeKeyUpListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalShowing]);

      if (modalShowing) return (
        <Styled.Wrapper ref={modalRef}>
                <div>{modalContent && cloneElement(modalContent as ReactElement, { ref: modalContentRef })}</div>
        </Styled.Wrapper>
      )
  return null
};

export const ModalContent = forwardRef<HTMLDivElement, PropsWithChildren<{ className?: string }>>(({ children, className }, ref) => {
  const hideModal = useUiProvider((state) => state.hideModal);

  return (
    <Styled.Content ref={ref} className={className}>
      <Styled.CloseBtn icon={<CloseIcon />} onClick={() => hideModal()} />
      {children}
    </Styled.Content>
  );
});
