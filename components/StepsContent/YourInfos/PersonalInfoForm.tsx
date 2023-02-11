
import { Box, FormControl, FormLabel, Grid, Input } from "@chakra-ui/react";
import { FC, useContext } from "react";
import useStore from "src/store";
import StepChangeButtons from "../StepChangeButtons";

const PersonaInfoForm: FC = () => {
  const { changeCurrentStep, currentStep } = useStore((state) => state);
  return (
    <FormControl isRequired>
      <Grid gridAutoFlow="row" gap="10px">
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name" />
        <FormLabel>Email adress</FormLabel>
        <Input placeholder="Email" />
        <FormLabel>Phone number</FormLabel>
        <Input placeholder="Phone" />
      </Grid>
        <Box mt="55px">
        <StepChangeButtons setStep={changeCurrentStep} step={currentStep} />
        </Box>
    </FormControl>
  );
};

export default PersonaInfoForm;
