import {
  Button,
  Checkbox,
  Group,
  TextInput,
  Textarea,
  ScrollArea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useEffect } from "react";

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
    <ScrollArea
      style={{ height: "100vh", paddingBottom: 100 }}
      offsetScrollbars
    >
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

        <Textarea
          mt="md"
          placeholder="Описание RU"
          label="Описание"
          rows={5}
          withAsterisk
          {...form.getInputProps("descriptionRU")}
        />

        <Textarea
          mt="md"
          placeholder="Описание KZ"
          label="Описание"
          rows={5}
          withAsterisk
          {...form.getInputProps("descriptionKZ")}
        />

        <Textarea
          mt="md"
          placeholder="Описание EN"
          label="Описание"
          rows={5}
          withAsterisk
          {...form.getInputProps("descriptionEN")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Отправить</Button>
        </Group>
      </form>
    </ScrollArea>
  );
};

export default Credit;
