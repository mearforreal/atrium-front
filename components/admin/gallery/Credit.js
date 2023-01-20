import { FileButton, Button, Group, Text, List } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";

const Credit = ({ id }) => {
  const [files, setFiles] = useState([]);
  const form = useForm({
    initialValues: {
      titleRU: "",
      titleKZ: "",
      titleEN: "",
    },
  });
  useEffect(() => {
    if (!!id && id !== "") {
      form.setValues({
        titleRU: "",
        titleKZ: "",
        titleEN: "",
      });
    }

    // return () => {
    //   second
    // }
  }, [id]);
  return (
    <div>
      <Group position="center">
        <FileButton onChange={setFiles} accept="image/png,image/jpeg" multiple>
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
      </Group>

      {files.length > 0 && (
        <Text size="sm" mt="sm">
          Picked files:
        </Text>
      )}

      <List size="sm" mt={5} withPadding>
        {files?.map((file, index) => (
          <List.Item key={index}>{file.name}</List.Item>
        ))}
      </List>
    </div>
  );
};

export default Credit;
