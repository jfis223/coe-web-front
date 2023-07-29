import LoaderStyled from "@/src/ui/components/loader/loader.styled";
import Styled from "@/src/ui/components/main_loader/main_loader.styled";
// import { useUiProvider } from "@/src/ui/providers/ui.provider";

export const MainLoader = () => {
  // const showLoader = useUiProvider((state) => state.showLoader);

  return (
        <Styled.Wrapper>
          <LoaderStyled />
        </Styled.Wrapper>
  )
};
