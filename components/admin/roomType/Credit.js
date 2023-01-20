import React, { useEffect } from "react";
import { useForm } from "@mantine/form";
import {
  Button,
  Checkbox,
  Group,
  NumberInput,
  Select,
  TextInput,
} from "@mantine/core";
const Credit = ({ id }) => {
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
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <NumberInput
        mt="md"
        label="Качество комнаты"
        placeholder=""
        {...form.getInputProps("number")}
      />
      <Group position="right" mt="md">
        <Button type="submit">Отправить</Button>
      </Group>
    </form>
  );
};

export default Credit;
