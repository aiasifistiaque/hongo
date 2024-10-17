"use client";
import { FlexBox, HeaderIcon, NavLink, TextSemiBold } from "@/components";
import useCustomStyles from "@/hooks/useCustomStyle";
import { data } from "@/lib/config/data";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { FC, useRef } from "react";

type MenuDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MenuDrawer: FC<MenuDrawerProps> = ({ isOpen, onClose }) => {
  const { colors } = useCustomStyles();
  const btnRef = useRef<HTMLButtonElement>(null);
  const header = data.header;

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        {/* <DrawerCloseButton /> */}
        <DrawerHeader m={0} bg={colors.dark}>
          <FlexBox>
            <TextSemiBold>Menu</TextSemiBold>
            <Box onClick={onClose}>
              <HeaderIcon name="menu-bar" />
            </Box>
          </FlexBox>
        </DrawerHeader>
        <DrawerBody p={0}>
          <UnorderedList m={0}>
            {header?.navLinks?.map((item, i) => (
              <ListItem
                px="1.5rem"
                borderBottom="1px solid black"
                py="12px"
                key={i}
              >
                <NavLink href={item?.link || ""}>{item?.label}</NavLink>
              </ListItem>
            ))}
          </UnorderedList>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
