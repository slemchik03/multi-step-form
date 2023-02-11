import { Center, Checkbox, Grid, GridItem, Text } from "@chakra-ui/react";
import { FC, useCallback } from "react";
import useStore from "src/store";

interface Props {
  id: number;
  title: string;
  describe: string;
  price: number;
  isSelected?: boolean;
}

const PickableAddon: FC<Props> = ({
  title,
  describe,
  price,
  id,
  isSelected,
}) => {
  const { addCurrentAddition, removeCurrentAddition } = useStore(
    (state) => state
  );

  const onCheckboxChange = useCallback(() => {
    if (isSelected) {      
      return removeCurrentAddition(id);
    }
    addCurrentAddition({ title, describe, price, id });
  }, [isSelected]);

  return (
    <Grid
      border="2px"
      borderColor="purple.400"
      bgColor={isSelected ? "purple.100" : ""}
      rounded="md"
      gridTemplateColumns="1fr 4fr 1fr"
      alignItems="center"
      justifyContent="center"
      minH="70px"
      pr="20px"
      py="5px"
      cursor="pointer"
      transition="all 150ms"
      onClick={onCheckboxChange}
    >
      <GridItem>
        <Center>
          <Checkbox
            onChange={onCheckboxChange}
            isChecked={isSelected}
            colorScheme="purple"
            defaultChecked
          />
        </Center>
      </GridItem>
      <GridItem>
        <Text color="blackAlpha.800" fontWeight="700" fontSize="md" pb="5px">
          {title}
        </Text>
        <Text color="gray.500" fontSize="md">
          {describe}
        </Text>
      </GridItem>
      <GridItem>
        <Text color="gray.700" fontSize="md">
          +{price}$/mo
        </Text>
      </GridItem>
    </Grid>
  );
};

export default PickableAddon;
