import { Grid, GridItem, Switch, Text } from "@chakra-ui/react";
import { FC } from "react";
import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import useStore from "src/store";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const boxy = definePartsStyle({
  track: {
    bg: "black",
  },
});

export const switchTheme = defineMultiStyleConfig({ variants: { boxy } });

const TariffLenSwither: FC = () => {
  const { planLength, changePlanLength } = useStore((state) => state);
  const isSwitchTurnOn = !(planLength === "month")
  const onSwitchChange = () => {
    if (isSwitchTurnOn) return changePlanLength("month");
    changePlanLength("year");
  };

  return (
    <Grid
      bgColor="gray.200"
      rounded="md"
      px="10px"
      py="5px"
      mt="30px"
      justifyContent="center"
      alignItems="center"
      gridAutoFlow="column"
      color="blackAlpha.600"
      gap="10px"
      transition="all 300ms"
    >
      <GridItem>
        <Text
          onClick={() => changePlanLength("month")}
          color={!isSwitchTurnOn ? "blackAlpha.900" : ""}
          fontSize="md"
          fontWeight="600"
          cursor="pointer"
        >
          Monthly
        </Text>
      </GridItem>
      <GridItem>
        <Switch
          isChecked={planLength === "year"}
          onChange={onSwitchChange}
          variant="boxy"
        />
      </GridItem>
      <GridItem>
        <Text
          onClick={() => changePlanLength("year")}
          color={isSwitchTurnOn ? "blackAlpha.900" : ""}
          fontSize="md"
          fontWeight="600"
          cursor="pointer"
        >
          Years
        </Text>
      </GridItem>
    </Grid>
  );
};

export default TariffLenSwither;
