import { Grid, SlideFade } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const StepsContentContainer: FC<Props> = ({ children }) => {
  return (
    <SlideFade in={true} offsetY="20px">
      <Grid
        px="50px"
        pt="30px"
        gridAutoFlow="row"
        minH="full"
      >
        {children}
      </Grid>
    </SlideFade>
  );
};

export default StepsContentContainer;