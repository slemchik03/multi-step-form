import { Grid, GridItem, SlideFade, Text } from "@chakra-ui/react";
import { FC } from "react";
import StepsContentContainer from "../StepsContentContainer";
import StepTitleAndDescription from "../StepTitleAndDescription";
import PersonaInfoForm from "./PersonalInfoForm";

const YourInfos: FC = () => {
  return (
    <StepsContentContainer>
      <GridItem>
        <StepTitleAndDescription
          title="Personal Info"
          description="Please provide your name, email adress,and phone number."
        />
      </GridItem>
      <GridItem >
        <PersonaInfoForm />
      </GridItem>
    </StepsContentContainer>
  );
};
export default YourInfos;
