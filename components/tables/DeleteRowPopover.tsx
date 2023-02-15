import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Button,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import type { DocumentData } from "firebase/firestore";
import { Row } from "@tanstack/react-table";
import Spinner from "../ui_components/Spinner";

type Props = {
  children?: ReactNode;
  selectedRows: Row<DocumentData>[];
  handleDelete: Function;
  isDisabled: boolean;
  isLoading: boolean;
  variant?: string;
};

function DeleteRowPopover(props: Props) {
  return (
    <Popover closeOnBlur={false}>
      <PopoverTrigger>
        <Button
          isDisabled={props.isDisabled}
          variant={props.variant ?? "outline"}
          borderColor={props.isLoading ? "red" : "gray"}
          isLoading={props.isLoading}
          spinner={<Spinner outerColor="red.200" innerColor="red.500" />}
        >
          {props.children}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          Delete selected requests
        </PopoverHeader>
        <PopoverArrow />
        <PopoverBody>
          Are you sure you want to delete the following selected requests?
        </PopoverBody>
        <PopoverFooter border="0" textAlign={"right"} pb={4}>
          <Button
            color="red"
            background="red.100"
            _hover={{ background: "red.50" }}
            onClick={() => {
              props.handleDelete(props.selectedRows);
            }}
          >
            delete
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

export default DeleteRowPopover;