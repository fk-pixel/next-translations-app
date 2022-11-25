import { Autocomplete, TextField, Typography } from "@mui/material";
import { parseISO } from "date-fns";
import pick from "lodash/pick";
import { GetServerSidePropsContext } from "next";
import { useIntl, useTranslations } from "next-intl";
import PageLayout from "../components/PageLayout/PageLayout";

export default function About() {
  const t = useTranslations();
  const intl = useIntl();
  const lastUpdated = parseISO("2021-12-23T10:04:45.567Z");
  const newDate = new Date();

  return (
    <PageLayout title={t("About.title")}>
      <p>
        {t(
          "About.lastUpdated",
          {
            lastUpdated,
            lastUpdatedRelative: intl.formatRelativeTime(lastUpdated),
          },
          {
            // Custom formats can be supplied via the third parameter
            dateTime: {
              esDate: {
                day: "numeric",
                month: "long",
                year: "numeric",
              },
              frDate: {
                day: "numeric",
                minute: "numeric",
                month: "long",
                year: "numeric",
              },
              deDate: {
                day: "numeric",
                dayPeriod: "short",
                hour12: true,
                month: "long",
                //calendar: "roc",
                year: "numeric",
              },
              enDate: {
                day: "2-digit",
                month: "long",
                year: "2-digit",
                hour: "2-digit",
              },
            },
          }
        )}
      </p>
      <div style={{ marginTop: 45, display: "block" }}>
        <div style={{ display: "flex", marginBottom: 25 }}>
          <Autocomplete
            id="short-day"
            renderInput={(params) => (
              <TextField {...params} label={"Short Day"} />
            )}
            sx={{ width: 150 }}
            options={[
              { label: "2-Digit", id: "2-digit" },
              { label: "Numeric", id: "numeric" },
            ]}
          />
          <Autocomplete
            id="short-month"
            renderInput={(params) => (
              <TextField {...params} label={"Short Month"} />
            )}
            sx={{ width: 150 }}
            options={[
              { label: "2-Digit", id: "2-digit" },
              { label: "Numeric", id: "numeric" },
              { label: "Narrow", id: "narrow" },
              { label: "Short", id: "short" },
            ]}
          />
          <Autocomplete
            id="short-year"
            renderInput={(params) => (
              <TextField {...params} label={"Short Year"} />
            )}
            sx={{ width: 150 }}
            options={[
              { label: "2-Digit", id: "2-digit" },
              { label: "Numeric", id: "numeric" },
            ]}
          />
          <Typography style={{ marginLeft: 20, marginTop: 15, color: "gray" }}>
            ex.{}
          </Typography>
        </div>

        <div style={{ display: "flex" }}>
          <Autocomplete
            id="long-day"
            renderInput={(params) => (
              <TextField {...params} label={"Long Day"} />
            )}
            sx={{ width: 150 }}
            options={[
              { label: "2-Digit", id: "2-digit" },
              { label: "Numeric", id: "numeric" },
            ]}
          />
          <Autocomplete
            id="long-month"
            renderInput={(params) => (
              <TextField {...params} label={"Long Month"} />
            )}
            sx={{ width: 150 }}
            options={[
              { label: "2-Digit", id: "2-digit" },
              { label: "Numeric", id: "numeric" },
              { label: "Long", id: "long" },
              { label: "Narrow", id: "narrow" },
            ]}
          />
          <Autocomplete
            id="long-year"
            renderInput={(params) => (
              <TextField {...params} label={"Long Year"} />
            )}
            sx={{ width: 150 }}
            options={[
              { label: "2-Digit", id: "2-digit" },
              { label: "Numeric", id: "numeric" },
            ]}
          />
          <Typography style={{ marginLeft: 20, marginTop: 15, color: "gray" }}>
            ex.{}
          </Typography>
        </div>
      </div>
    </PageLayout>
  );
}

About.messages = ["About", ...PageLayout.messages];

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  return {
    props: {
      messages: pick(
        await import(`../messages/${locale}.json`),
        About.messages
      ),
      // Note that when `now` is passed to the app, you need to make sure the
      // value is updated from time to time, so relative times are updated. See
      // https://next-intl-docs.vercel.app/docs/usage/configuration#global-now-value
      now: new Date().getTime(),
    },
  };
}
