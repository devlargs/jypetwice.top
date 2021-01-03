import { Box, Text } from "@chakra-ui/react";

type Props = {
  w: string | number;
  h: string | number;
  m: string | number;
  p: string | number;
  text: string;
};

const ListBox = ({ w, h, m, p, text }: Props) => {
  return (
    <Box
      cursor="pointer"
      w={w}
      h={h}
      bg="primary.500"
      color="color.light"
      m={m}
      p={p}
    >
      <Text fontSize="20px">{text}</Text>
    </Box>
  );
};

export default ListBox;
