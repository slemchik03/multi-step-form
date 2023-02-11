import { Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import useStore from "src/store";

interface Props {
  id: number;
  img: string;
  price: number;
  title: string;
  isActive: boolean,
}

const PlanCard: FC<Props> = ({id, img, price, title, isActive }) => {
  const {changeCurrentPlanId} = useStore((state) => state)
  return (
    <Grid
      h={"170px"}
      maxW={"160px"}
      templateRows="4fr 1fr"
      justifyContent={"space-between"}
      rounded="md"
      border="2px"
      borderColor={isActive ? "orange.400" : "gray.400"}
      p="10px"
      cursor="pointer"
      transition="all 300ms"
      onClick={() => changeCurrentPlanId(id)}
    >
      <GridItem
        position="relative"
        rounded="full"
        w={"40px"}
        h={"40px"}
        pt="10px"
      >
        <Image fill src={img} alt="plan img" />
      </GridItem>
      <Grid justifyContent="start">
        <Text fontSize="md" fontWeight={700}>
          {title}
        </Text>
        <Text color="blackAlpha.400">${price}/month</Text>
      </Grid>
    </Grid>
  );
};

export default PlanCard;
