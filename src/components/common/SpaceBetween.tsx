import { Flex, FlexProps } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type SpaceBetweenProps = FlexProps & {
  children?: ReactNode;
};

const SpaceBetween: FC<SpaceBetweenProps> = ({ children, ...props }) => {
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default SpaceBetween;
