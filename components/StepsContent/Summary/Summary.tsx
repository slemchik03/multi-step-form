
import { Divider, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import useStore from "src/store";
import { planDataList } from "../SelectPlan/SelectPlan";
import StepChangeButtons from "../StepChangeButtons";
import StepsContentContainer from "../StepsContentContainer";
import StepTitleAndDescription from "../StepTitleAndDescription";
import ThankYou from "./ThankYou";

const Summary: FC = () => {
  const {
    currentAdditions,
    currentPlanId,
    planLength,
    setIsFormConfirmed,
    isFormConfirmed,
    currentStep,
    changeCurrentStep
  } = useStore((state) => state);
  const currentPlan = useMemo(
    () => planDataList.filter(({ id }) => id === currentPlanId)[0],
    [currentPlanId]
  );

  const isMonthPlan = planLength === "month";
  const sum = currentAdditions.reduce((acc, { price }) => {
    return acc + price;
  }, currentPlan.price * (isMonthPlan ? 1 : 12));

  if (isFormConfirmed) {
    return (
      <StepsContentContainer>
        <ThankYou />
      </StepsContentContainer>
    )
  }

  return (
    <StepsContentContainer>
      <Grid justifyContent="" gridTemplateRows="1fr 4.7fr 1fr">
        <GridItem>
          <StepTitleAndDescription
            title="Finishing up"
            description="Double-check everything is ok before confirming."
          />
        </GridItem>
        <GridItem>
          <Grid
            mt="50px"
            bgColor="gray.100"
            gridAutoFlow="row"
            maxW="400px"
            rounded="md"
            p="20px"
          >
            <GridItem pb="10px">
              <Grid gridAutoFlow="column" justifyContent="space-between">
                <GridItem>
                  <Text>{currentPlan.title}</Text>
                  <Link onClick={() => changeCurrentStep(2)} color="teal.500" href="#">
                    Change
                  </Link>
                </GridItem>
                <GridItem>
                  <Text>
                    ${currentPlan.price * (isMonthPlan ? 1 : 12)}/{planLength}
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>
            <Divider />
            <GridItem pt="10px">
              <Grid gap="15px">
                {currentAdditions.map(({ title, price }) => (
                  <GridItem key={title}>
                    <Grid gridAutoFlow="column" justifyContent="space-between">
                      <Text color="gray.500">{title}</Text>
                      <Text>+{price}$/mo</Text>
                    </Grid>
                  </GridItem>
                ))}
              </Grid>
            </GridItem>
          </Grid>
          <Grid mt="30px" gridAutoFlow="column" justifyContent="space-between">
            <Text>Total [per/month]</Text>
            <Text color="purple.400" fontSize="md">
              ${sum}
            </Text>
          </Grid>
        </GridItem>
        <GridItem>
          <StepChangeButtons
            last
            step={currentStep}
            setStep={changeCurrentStep}
            confirmLastStepHandler={() => setIsFormConfirmed(true)}
          />
        </GridItem>
      </Grid>
    </StepsContentContainer>
  );
};

export default Summary;
