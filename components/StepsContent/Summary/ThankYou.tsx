import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import StepTitleAndDescription from "../StepTitleAndDescription";

const ThankYou: FC = () => {
  return (
    <Grid justifyContent="center" alignItems="center" gridTemplateRows="1fr">
      <GridItem>
        <Center gap="30px" textAlign="center" flexDirection="column" maxW="350px">
          <Image width={80} height={80} src="/icon-thank-you.svg" alt="img" />
            <Box>
            <StepTitleAndDescription
            title="Thank you!"
            description="Thank you for your subscription.We hope you were fun using your platform"
          />
            </Box>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default ThankYou;
