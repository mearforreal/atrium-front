import { Burger, createStyles, Group, Menu } from "@mantine/core";
import ContentContainer from "./content-container";
import { NextLink } from "@mantine/next";
import Image from "next/image";
import { IconInfoCircle, IconTicket, IconUsers } from "@tabler/icons";
import { useState } from "react";

const useStyles = createStyles(() => ({
  header: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    height: "96px",

    "@media (max-width: 800px)": {
      paddingTop: "32px",
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "transparent",

    "@media (max-width: 800px)": {
      display: "none",
    },
  },
  searchInput: {
    minWidth: "248px",
    borderRadius: "8px",
  },
  menu: {
    display: "none",

    "@media (max-width: 800px)": {
      display: "block",
    },
  },
}));

const LINKS_ARRAY = [
  {
    href: "/about-us",
    label: "О нас",
    icon: <IconInfoCircle size={14} />,
  },
  {
    href: "/",
    label: "Купить",
    icon: <IconTicket size={14} />,
  },
  {
    href: "/passengers",
    label: "hellp",
    icon: <IconUsers size={14} />,
  },
];

export default function Header() {
  const { classes } = useStyles();

  const [opened, setOpened] = useState(false);

  return (
    <header className={classes.header}>
      <ContentContainer className={classes.menu}>
        <Menu shadow="md" width={200} opened={opened} position="bottom-end">
          <Menu.Target>
            <Burger
              color="white"
              opened={opened}
              onClick={() => setOpened((e) => !e)}
            />
          </Menu.Target>

          <Menu.Dropdown>
            {LINKS_ARRAY?.map((link) => (
              <Menu.Item
                key={link.href}
                icon={link.icon}
                onClick={() => setOpened(false)}
              >
                <NextLink href={link.href}>{link.label}</NextLink>
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </ContentContainer>
      <ContentContainer className={classes.container}>
        <NextLink href="/">hello</NextLink>
        {/*<Group spacing='xs'>*/}
        {/*    <Input*/}
        {/*        icon={<IconSearch color={Colors.BLUE}/>}*/}
        {/*        className={classes.searchInput}*/}
        {/*    />*/}
        {/*    <Button label='Поиск' />*/}
        {/*</Group>*/}
        <Group spacing="xl">
          {LINKS_ARRAY?.map((link) => (
            <NextLink key={link.href} href={link.href}>
              {link.label}
            </NextLink>
          ))}
        </Group>
        {/*<Group>*/}
        {/*    <NextLink href='/'>*/}
        {/*        Регистрация / Вход*/}
        {/*    </NextLink>*/}
        {/*    <Avatar radius='xl' />*/}
        {/*</Group>*/}
      </ContentContainer>
    </header>
  );
}
