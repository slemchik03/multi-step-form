import { Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  title: string;
  description: string;
}

const StepTitleAndDescription: FC<Props> = ({ title, description }) => {
  return (
    <>
      <Text fontSize="3xl" fontWeight="700">
        {title}
      </Text>
      <Text pt="5px" color="gray" fontSize="md" fontWeight="600">
        {description}
      </Text>
    </>
  );
};
export default StepTitleAndDescription;