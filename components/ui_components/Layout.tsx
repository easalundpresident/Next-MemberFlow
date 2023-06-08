import React, { ReactNode } from "react";
import Head from "next/head";
import Sidebar from "../navbar/Sidebar";
import { Box, Flex, Grid } from "@chakra-ui/react";
import { component_color } from "../../styles/colors";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({
  children,
  title = "This is the default title",
}: Props) => (
  <Flex padding="1rem" columnGap="1rem" h="100%">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Sidebar />
    <Box
      boxShadow="0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)"
      borderRadius="30px"
      backgroundColor={component_color}
      w="full"
      maxH="full"
      overflow="auto"
      padding="2rem"
    >
      {children}
    </Box>
  </Flex>
);

export default Layout;