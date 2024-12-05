import React from "react";
import {
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Select,
  SelectItem,
  DatePicker,
  DropdownItem
} from "@nextui-org/react";
import {now, getLocalTimeZone} from "@internationalized/date";

export default function Update() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState<string>("opaque");
  const [booksPerStudent, setBooksPerStudent] = React.useState<number>(1);
  const onBooksPerStudent = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setBooksPerStudent(Number(e.target.value));
    },
    []
  );
  
  const handleOpen = () => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <>
      <DropdownItem
        onPress={() => handleOpen()}
      >
        Edit
      </DropdownItem>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} size="lg">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                Update Student
              </ModalHeader>
              <ModalBody className="text-black grid grid-cols-1 sm:grid-cols-2">
                <Input
                  type="text"
                  label="Name"
                  variant="bordered"
                  description="Format (First Name, Last Name)"
                />
                <Input
                  type="text"
                  variant="bordered"
                  label="Year level"
                  description="(e.g. 1st year)"
                />
                <Select
                  label="How many books?"
                  className="max-w-xs "
                  variant="bordered"
                  onChange={onBooksPerStudent}
                >
                  {[1, 2, 3].map((item) => (
                    <SelectItem key={item} value={item} className="text-black">
                      {item}
                    </SelectItem>
                  ))}
                </Select>
                {[...Array(booksPerStudent).keys()].map((key) => (
                  <Input
                    key={key}
                    type="text"
                    variant="bordered"
                    label={`Book Name ${key + 1}`}
                  />
                ))}
                <div className="col-span-2" >
                  <DatePicker 
                    label="Due Date" 
                    variant="bordered" 
                    showMonthAndYearPickers
                    defaultValue={now(getLocalTimeZone())}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
