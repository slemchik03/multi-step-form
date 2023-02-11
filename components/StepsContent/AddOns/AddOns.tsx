import { Grid, GridItem } from "@chakra-ui/react";
import { FC } from "react";
import useStore from "src/store";
import StepChangeButtons from "../StepChangeButtons";
import StepsContentContainer from "../StepsContentContainer";
import StepTitleAndDescription from "../StepTitleAndDescription";
import PickableAddon from "./PickableAddon";

const addonsList = [
  {
    id: 1,
    price: 1,
    title: "Online service",
    describe: "Access to multiplayer games",
  },
  {
    id: 2,
    price: 2,
    title: "Large storage",
    describe: "Extra 1TB of cloud safe",
  },
  {
    id: 3,
    price: 3,
    title: "Customizable profile",
    describe: "Customize theme on your profile",
  },
];

const AddOns: FC = () => {
  const { currentAdditions, currentStep, changeCurrentStep } = useStore(
    (state) => state
  );

  return (
    <StepsContentContainer>
      <StepTitleAndDescription
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <Grid pt="25px" gap="15px">
        {addonsList.map((addon) => {
          const isSelected = currentAdditions.filter(
            ({ id }) => id === addon.id
          )[0];

          return (
            <PickableAddon
              isSelected={!!isSelected}
              key={addon.title}
              {...addon}
            />
          );
        })}
      </Grid>
      <GridItem mt="45px">
        <StepChangeButtons setStep={changeCurrentStep} step={currentStep} />
      </GridItem>
    </StepsContentContainer>
  );
};
export default AddOns;
