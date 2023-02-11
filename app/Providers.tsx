"use client";

import { switchTheme } from "@/components/StepsContent/SelectPlan/TariffLenSwither";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const theme = extendTheme({
  components: { Switch: switchTheme },
});

const Providers: FC<Props> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Providers;
