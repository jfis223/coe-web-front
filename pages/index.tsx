import type { GetServerSidePropsContext } from "next"
import {storeProvider} from "@/src/ui/providers/store.provider";

const Redirect = (): JSX.Element => {
  return <></>
}

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<any> {
  const store = storeProvider.getState().store;

  return {
    redirect: {
      destination: `/${store}`,
      permanent: false,
    }
  }
}

export default Redirect
