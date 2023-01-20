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
        withAsterisk
        required
        mt="md"
        label="Расстояние"
        placeholder=""
        {...form.getInputProps("distance")}
      />
      <Select
        label="Метрика"
        data={[
          { value: "1", label: "km" },
          { value: "2", label: "m" },
        ]}
        {...form.getInputProps("metric")}
      />
      <TextInput
        mt="md"
        label="Адрес RU"
        placeholder=""
        {...form.getInputProps("addressRU")}
      />

      <TextInput
        mt="md"
        label="Адрес KZ"
        placeholder=""
        {...form.getInputProps("addressKZ")}
      />

      <TextInput
        mt="md"
        label="Адрес EN"
        placeholder=""
        {...form.getInputProps("addressEN")}
      />

      <TextInput
        mt="md"
        label="Адрес EN"
        placeholder=""
        {...form.getInputProps("addressEN")}
      />
      <Checkbox label={"Пешком"} {...form.getInputProps("onFoot")} mt="md" />

      <NumberInput
        mt="md"
        label="Минуты"
        placeholder=""
        {...form.getInputProps("minutes")}
      />
      <Group position="right" mt="md">
        <Button type="submit">Отправить</Button>
      </Group>
    </form>
  );
};

export default Credit;
