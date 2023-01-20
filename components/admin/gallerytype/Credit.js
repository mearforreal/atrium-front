import React, { useEffect } from "react";
import { useForm } from "@mantine/form";
import { Button, Group, TextInput } from "@mantine/core";
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
      <TextInput
        withAsterisk
        required
        mt="md"
        label="Название RU"
        placeholder=""
        {...form.getInputProps("titleRU")}
      />
      <TextInput
        mt="md"
        label="Название KZ"
        placeholder=""
        {...form.getInputProps("titleKZ")}
      />
      <TextInput
        mt="md"
        label="Название EN"
        placeholder=""
        {...form.getInputProps("titleEN")}
      />
      <Group position="right" mt="md">
        <Button type="submit">Отправить</Button>
      </Group>
    </form>
  );
};

export default Credit;
