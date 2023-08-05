import LoaderStyled from "@/src/ui/components/loader/loader.styled";
import Styled from "@/src/ui/components/main_loader/main_loader.styled";
import { useUiProvider } from "@/src/ui/providers/ui.provider";
import { LogoShapeOnly } from "@/src/ui/icons";

export const MainLoader = () => {
  const showLoader = useUiProvider((state) => state.showLoader);

  if (!showLoader)
    return (
      <Styled.Wrapper>
        <LoaderStyled>
          <LogoShapeOnly />
        </LoaderStyled>
      </Styled.Wrapper>
    );
  return <></>;
};
