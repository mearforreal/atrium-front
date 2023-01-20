import React, { useState } from "react";
import {
  createStyles,
  Navbar,
  Group,
  Code,
  AppShell,
  Container,
} from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconPhoto,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconBuildingEstate,
  IconPhoneCall,
  IconArticle,
  IconMap2,
  IconBed,
  IconDoor,
  IconAddressBook,
} from "@tabler/icons";
import logo from "../../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

// import { MantineLogo } from "@mantine/ds";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      display: "flex",
      justifyContent: "center",
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});

const data = [
  { link: "/admin/projects", label: "Проект", icon: IconBuildingEstate },
  { link: "/admin/gallerytype", label: "Тип галереи", icon: IconReceipt2 },
  { link: "/admin/news", label: "Новости", icon: IconArticle },
  { link: "/admin/requests", label: "Запросы", icon: IconPhoneCall },
  { link: "/admin/gallery", label: "Галерея", icon: IconPhoto },
  {
    link: "/admin/nearLocation",
    label: "Местоположение проекта",
    icon: IconMap2,
  },

  {
    link: "/admin/contact",
    label: "Контакты проекта",
    icon: IconAddressBook,
  },

  {
    link: "/admin/roomType",
    label: "Тип комнаты проекта",
    icon: IconBed,
  },

  {
    link: "/admin/roomInfo",
    label: "Информация о квартире",
    icon: IconDoor,
  },
];

const Layout = ({ children }) => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");

  const links = data?.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        // event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <div>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ sm: 300 }} p="md">
            <Navbar.Section grow>
              <Group className={classes.header} position="apart">
                <Image src={logo} alt="logo" />
                {/* <Code sx={{ fontWeight: 700 }}>v3.1.2</Code> */}
              </Group>
              {links}
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
              <a
                href="#"
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                <IconSwitchHorizontal
                  className={classes.linkIcon}
                  stroke={1.5}
                />
                <span>Change account</span>
              </a>

              <a
                href="#"
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                <IconLogout className={classes.linkIcon} stroke={1.5} />
                <span>Logout</span>
              </a>
            </Navbar.Section>
          </Navbar>
        }
        // header={
        //   <Header height={60} p="xs">
        //     {/* Header content */}
        //   </Header>
        // }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Container>{children}</Container>
      </AppShell>
    </div>
  );
};

export default Layout;
