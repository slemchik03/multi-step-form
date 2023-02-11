"use client";

import { Center, Grid, GridItem } from "@chakra-ui/react";
import { FC } from "react";
import FormCheckpointLink from "./FormCheckpointLink";
import localFont from "@next/font/local";
import stepsList from "../utils/formStepsData";
import useStore from "src/store";

const ubuntuBold = localFont({ src: "../public/fonts/Ubuntu-Bold.ttf" });

const FormCard: FC = () => {
  const {currentStep, changeCurrentStep} = useStore((state) => state)
  const CurrentFormContentComponent = stepsList[currentStep - 1].component
  return (
    <Center
      className={ubuntuBold.className}
      shadow={"xl"}
      bg="white"
      w="800px"
      h="600px"
      borderRadius="lg"
    >
      <Grid
        w="full"
        minH="inherit"
        templateColumns="minmax(0, 274px) minmax(0, 1fr)"
        templateRows="493px"
        px="4"
        py="4"
      >
        <GridItem
          rounded="xl"
          bgImg="url('./bg-sidebar-desktop.svg')"
          bgPos="center -70px"
          bgSize="fill"
          minW="full"
          bgRepeat={"no-repeat"}
        >
          <Grid gap="20px" py="40px" px="20px" minW="full" gridAutoFlow="row">
            {stepsList.map(({ step, describe }) => (
              <FormCheckpointLink
                key={step}
                onClick={() => changeCurrentStep(step)}
                checked={step <= currentStep}
                step={step}
                describe={describe}
              />
            ))}
          </Grid>
        </GridItem>
        {/* Current step content */}
        <CurrentFormContentComponent />
      </Grid>
    </Center>
  );
};

export default FormCard;
