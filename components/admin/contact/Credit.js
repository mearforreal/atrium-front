import React, { useEffect } from "react";
import { useForm } from "@mantine/form";
import { Button, Group, Input, TextInput } from "@mantine/core";
import InputMask from "react-input-mask";
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
      <Input.Wrapper
        id={id}
        label="Тел."
        {...form.getInputProps("tel")}
        required
      >
        <Input
          component={InputMask}
          mask="+7 (999) 999-99-99"
          id={id}
          placeholder="Your phone"
        />
      </Input.Wrapper>
      {/* <TextInput withAsterisk required mt="md" label="Тел." placeholder="" /> */}
      <TextInput
        mt="md"
        label="Email"
        placeholder=""
        {...form.getInputProps("email")}
      />

      <TextInput
        mt="md"
        label="Адрес"
        placeholder=""
        {...form.getInputProps("address")}
      />

      <TextInput
        mt="md"
        label="Широта карты"
        placeholder=""
        {...form.getInputProps("lat")}
      />

      <TextInput
        mt="md"
        label="Долгота карты"
        placeholder=""
        {...form.getInputProps("lng")}
      />
      <Group position="right" mt="md">
        <Button type="submit">Отправить</Button>
      </Group>
    </form>
  );
};

export default Credit;
