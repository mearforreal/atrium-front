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

        <Checkbox mt="md" label="Зарубежный проект" />

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

        <TextInput
          mt="md"
          label="Виртуальный тур"
          placeholder=""
          {...form.getInputProps("virtualTour")}
        />

        <Textarea
          mt="md"
          placeholder="Краткое описание 1(RU)"
          label="Краткое описание 1(RU)"
          rows={5}
          withAsterisk
          {...form.getInputProps("short_desc_oneRU")}
        />

        <Textarea
          mt="md"
          placeholder="Краткое описание 1(KZ)"
          label="Краткое описание 1(KZ)"
          rows={5}
          withAsterisk
          {...form.getInputProps("short_desc_oneKZ")}
        />

        <Textarea
          mt="md"
          placeholder="Краткое описание 1(EN)"
          label="Краткое описание 1(EN)"
          rows={5}
          withAsterisk
          {...form.getInputProps("short_desc_oneEN")}
        />

        <Textarea
          mt="md"
          placeholder="Краткое описание 2(RU)"
          label="Краткое описание 2(RU)"
          rows={5}
          withAsterisk
          {...form.getInputProps("short_desc_twoRU")}
        />

        <Textarea
          mt="md"
          placeholder="Краткое описание 2(KZ)"
          label="Краткое описание 2(KZ)"
          rows={5}
          withAsterisk
          {...form.getInputProps("short_desc_twoKZ")}
        />

        <Textarea
          mt="md"
          placeholder="Краткое описание 2(EN)"
          label="Краткое описание 2(EN)"
          rows={5}
          withAsterisk
          {...form.getInputProps("short_desc_twoEN")}
        />

        <Textarea
          mt="md"
          placeholder="Преимущество расположения RU"
          label="Преимущество расположения RU"
          rows={5}
          withAsterisk
          {...form.getInputProps("advantage_addressRU")}
        />

        <Textarea
          mt="md"
          placeholder="Преимущество расположения KZ"
          label="Преимущество расположения KZ"
          rows={5}
          withAsterisk
          {...form.getInputProps("advantage_addressKZ")}
        />

        <Textarea
          mt="md"
          placeholder="Преимущество расположения EN"
          label="Преимущество расположения EN"
          rows={5}
          withAsterisk
          {...form.getInputProps("advantage_addressEN")}
        />

        <Textarea
          mt="md"
          label="Преимущество стиля RU"
          rows={5}
          withAsterisk
          {...form.getInputProps("advantage_styleRU")}
        />

        <Textarea
          mt="md"
          label="Преимущество стиля KZ"
          rows={5}
          withAsterisk
          {...form.getInputProps("advantage_styleKZ")}
        />

        <Textarea
          mt="md"
          label="Преимущество стиля EN"
          rows={5}
          withAsterisk
          {...form.getInputProps("advantage_styleEN")}
        />

        <Textarea
          mt="md"
          label="Преимущество безопасности RU"
          rows={5}
          withAsterisk
          {...form.getInputProps("advantage_securityRU")}
        />

        <Textarea
          mt="md"
          label="Преимущество безопасности KZ"
          rows={5}
          withAsterisk
          {...form.getInputProps("advantage_securityKZ")}
        />

        <Textarea
          mt="md"
          label="Преимущество безопасности EN"
          rows={5}
          withAsterisk
          {...form.getInputProps("advantage_securityEN")}
        />

        <Textarea
          mt="md"
          label="Преимущество архитектуры RU"
          rows={5}
          withAsterisk
          {...form.getInputProps("advantage_architectRU")}
        />

        <Textarea
          mt="md"
          label="Преимущество архитектуры KZ"
          rows={5}
          withAsterisk
          {...form.getInputProps("advantage_architectKZ")}
        />

        <Textarea
          mt="md"
          label="Преимущество архитектуры EN"
          rows={5}
          withAsterisk
          {...form.getInputProps("advantage_architectEN")}
        />

        <Textarea
          mt="md"
          label="Условия оплаты 1(RU)"
          rows={5}
          withAsterisk
          {...form.getInputProps("service_payment_oneRU")}
        />

        <Textarea
          mt="md"
          label="Условия оплаты 1(KZ)"
          rows={5}
          withAsterisk
          {...form.getInputProps("service_payment_oneKZ")}
        />

        <Textarea
          mt="md"
          label="Условия оплаты 1(EN)"
          rows={5}
          withAsterisk
          {...form.getInputProps("service_payment_oneEN")}
        />

        <Textarea
          mt="md"
          label="Условия оплаты 2(RU)"
          rows={5}
          withAsterisk
          {...form.getInputProps("service_payment_twoRU")}
        />

        <Textarea
          mt="md"
          label="Условия оплаты 2(KZ)"
          rows={5}
          withAsterisk
          {...form.getInputProps("service_payment_twoKZ")}
        />

        <Textarea
          mt="md"
          label="Условия оплаты 2(EN)"
          rows={5}
          withAsterisk
          {...form.getInputProps("service_payment_twoEN")}
        />

        <Textarea
          mt="md"
          label="Описание расположения RU"
          rows={5}
          withAsterisk
          {...form.getInputProps("location_descRU")}
        />

        <Textarea
          mt="md"
          label="Описание расположения KZ"
          rows={5}
          withAsterisk
          {...form.getInputProps("location_descKZ")}
        />

        <Textarea
          mt="md"
          label="Описание расположения EN"
          rows={5}
          withAsterisk
          {...form.getInputProps("location_descEN")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Отправить</Button>
        </Group>
      </form>
    </ScrollArea>
  );
};

export default Credit;
