import { Grid, GridItem, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  step: number;
  checked?: boolean;
  describe: string;
  onClick?: () => void;
}

const FormCheckpointLink: FC<Props> = ({
  step,
  describe,
  checked,
  onClick,
}) => {
  return (
    
    <Grid
      minWidth={"full"}
      gap="20px"
      templateColumns="minmax(0, 40px) minmax(0, 1fr)"
      justifyContent="left"
      alignItems="center"
      cursor="pointer"
      onClick={(onClick)}
    >
      
      <GridItem>
        <Grid
          bgColor={checked ? "cyan.400" : ""}
          w="40px"
          h="40px"
          rounded="full"
          border={"2px"}
          borderColor={checked ? "cyan.400" : "white"}
          alignContent="center"
          justifyContent="center"
          transition="all 300ms"
        >
          <GridItem color="white" fontSize="md">
            {step}
          </GridItem>
        </Grid>

      </GridItem>
      <GridItem>
        <Text fontSize="sm" color="whiteAlpha.800" textTransform="uppercase">
          Step {step}
        </Text>
        <Text
          fontSize="sm"
          fontWeight="800"
          color="white"
          textTransform="uppercase"
        >
          {describe}
        </Text>
      </GridItem>
    </Grid>
    
  );
};

export default FormCheckpointLink;
