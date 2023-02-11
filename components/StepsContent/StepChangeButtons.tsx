import { Button, Grid, GridItem } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  step: number;
  last?: boolean;
  confirmLastStepHandler?: () => void;
  setStep: (step: number) => void;
}

const StepChangeButtons: FC<Props> = ({
  step,
  setStep,
  last,
  confirmLastStepHandler,
}) => {
  return (
    <Grid justifyContent="space-between" gridAutoFlow="column">
      <GridItem>
        {step - 1 ? (
          <Button onClick={() => setStep(step - 1)} variant="ghost">
            Go back
          </Button>
        ) : (
          ""
        )}
      </GridItem>
      <GridItem>
        {!last ? (
          <Button onClick={() => setStep(step + 1)} variant="solid">
            Next step
          </Button>
        ) : (
          <Button onClick={confirmLastStepHandler}>Confirm</Button>
        )}
      </GridItem>
    </Grid>
  );
};
export default StepChangeButtons;
