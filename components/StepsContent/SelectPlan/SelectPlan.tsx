import { Grid, GridItem } from "@chakra-ui/react";
import { FC } from "react";
import useStore from "src/store";
import StepChangeButtons from "../StepChangeButtons";
import StepsContentContainer from "../StepsContentContainer";
import StepTitleAndDescription from "../StepTitleAndDescription";
import PlanCard from "./PlanCard";
import TariffLenSwither from "./TariffLenSwither";

export const planDataList = [
  {
    id: 0,
    title: "Arcade",
    price: 10,
    img: "/icon-pro.svg",
  },

  {
    id: 1,
    title: "Premium",
    price: 20,
    img: "/icon-arcade.svg",
  },
  {
    id: 2,
    title: "Brilliante",
    price: 35,
    img: "icon-advanced.svg",
  },
];

const SelectPlan: FC = () => {
  const { currentPlanId, currentStep, changeCurrentStep } = useStore(
    (state) => state
  );

  return (
    <StepsContentContainer>
      <StepTitleAndDescription
        title="Select your plan"
        description="You have the option for monthly or yearly billing."
      />
      <Grid gridAutoFlow={"column"} gap="10px" pt="40px">
        {planDataList.map((plan) => (
          <PlanCard
            key={plan.id}
            {...plan}
            isActive={currentPlanId === plan.id}
          />
        ))}
      </Grid>
      <TariffLenSwither />
      <GridItem mt="40px">
        <StepChangeButtons setStep={changeCurrentStep} step={currentStep} />
      </GridItem>
    </StepsContentContainer>
  );
};

export default SelectPlan;
