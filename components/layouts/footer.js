import ContentContainer from "./content-container";
import { createStyles, Stack, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { Colors } from "./../../styles/colors";

//TODO add paths
const routes = [
  {
    title: "Купить",
    path: "/",
  },
];

const useStyles = createStyles(() => ({
  background: {
    background: Colors.DARK_BLUE,
    marginTop: "auto",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    gridGap: "80px",
    paddingTop: "36px",
    paddingBottom: "36px",

    "@media (max-width: 800px)": {
      flexFlow: "column",
      gridGap: "32px",
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();
  return (
    <footer className={classes.background}>
      <ContentContainer className={classes.container}>
        {routes?.map(({ path, title, items }) => {
          if (path) {
            return (
              <NextLink key={title} href={path}>
                <Text weight="500" size="lg" sx={{ lineHeight: "20px" }}>
                  {title}
                </Text>
              </NextLink>
            );
          }

          return (
            <Stack key={title} spacing={12}>
              <Text weight="500" size="lg" sx={{ lineHeight: "20px" }}>
                {title}
              </Text>
              {items?.map((item) => (
                <NextLink key={item.path} href={item.path}>
                  <Text weight="300" sx={{ lineHeight: "20px" }}>
                    {item.title}
                  </Text>
                </NextLink>
              ))}
            </Stack>
          );
        })}
        <Stack spacing={12}>
          <Text weight="500" size="lg" sx={{ lineHeight: "20px" }}>
            a
          </Text>
          <Text weight="300" sx={{ lineHeight: "20px" }}>
            b
          </Text>
          <Text weight="300" sx={{ lineHeight: "20px" }}>
            c
          </Text>
          <Text weight="300" sx={{ lineHeight: "20px" }}>
            d
          </Text>
        </Stack>
        <NextLink href={"/about-us" + `#${ANCHOR_CONTACTS_INFO}`}>
          <Text weight="500" size="lg" sx={{ lineHeight: "20px" }}>
            e
          </Text>
        </NextLink>
      </ContentContainer>
    </footer>
  );
}
