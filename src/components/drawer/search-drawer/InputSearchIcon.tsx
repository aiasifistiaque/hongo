import { HeaderIcon } from "@/components";
import useCustomStyle from "@/hooks/useCustomStyle";
import { Box } from "@chakra-ui/react";

const InputSearchIcon = () => {
  const { colors } = useCustomStyle();
  return (
    <Box
      position="absolute"
      top="14px"
      right="15px"
      cursor="pointer"
      fontSize="1.3rem"
      color={colors.textColor}
    >
      <HeaderIcon name="search" />
    </Box>
  );
};

export default InputSearchIcon;
