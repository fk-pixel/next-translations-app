import React from "react";

import { Autocomplete, TextField, Typography } from "@mui/material";
import { parseISO } from "date-fns";
import pick from "lodash/pick";
import { GetServerSidePropsContext } from "next";
import { DateTimeFormatOptions, useIntl, useTranslations } from "next-intl";
import PageLayout from "../components/PageLayout/PageLayout";

type DayType = Pick<DateTimeFormatOptions, "day">;
type MonthType = Pick<DateTimeFormatOptions, "month">;
type YearType = Pick<DateTimeFormatOptions, "year">;

const DayOptions: DayType = {};
const MonthOptions: MonthType = {};
const YearOptions: YearType = {};

//const { day, month, year } = DateTimeFormatOptions;
// interface DateProps extends DateTimeFormatOptions {
//   day: "numeric" | "2-digit" | string | null | undefined;
//   month:
//     | "numeric"
//     | "2-digit"
//     | "long"
//     | "short"
//     | "narrow"
//     | string
//     | null
//     | undefined;
//   year: "numeric" | "2-digit" | string | null | undefined;
// }

export default function About() {
  // const t = useTranslations("About.new.last");
  const t = useTranslations("About");

  const intl = useIntl();
  const lastUpdated = parseISO("2021-12-23T10:04:45.567Z");
  const newDate = parseISO(new Date().toISOString());
  console.log(new Date().toISOString());
  // const [shortDate, setShortDate] = React.useState<DateTimeFormatOptions>({
  //   day: "numeric",
  //   month: "short",
  //   year: "2-digit",
  // });

  // const [longDate, setLongDate] = React.useState<DateProps>({
  //   day: "numeric",
  //   month: "long",
  //   year: "long",
  // });

  const [shortDate, setShortDate] = React.useState({
    day: "numeric",
    month: "short",
    year: "2-digit",
  });

  const [longDate, setLongDate] = React.useState({
    day: "numeric",
    month: "long",
    year: "long",
  });

  return (
    <div>
      <PageLayout title={t("title")}>
        <p>
          {t(
            "lastUpdated",
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
        <li>
          {t(
            "newDate",
            { newDate },
            {
              dateTime: {
                kurt: { day: "2-digit", month: "long", year: "2-digit" },
              },
            }
          )}
        </li>
        <div style={{ marginTop: 45, display: "block" }}>
          <div style={{ display: "flex", marginBottom: 25 }}>
            <Autocomplete
              id="short-day"
              key={1}
              componentName={"short-day"}
              value={shortDate.day}
              onChange={(
                event: React.SyntheticEvent<Element, Event>,
                newValue
              ) => {
                setShortDate({
                  ...shortDate,
                  day: newValue !== null ? newValue : "",
                });
              }}
              renderInput={(params) => (
                <TextField {...params} label={"Short Day"} />
              )}
              sx={{ width: 150 }}
              options={
                ["2-digit", "numeric"]
                //DayOptions
                // [
                //   { label: "2-Digit", id: "2-digit" },
                //   { label: "Numeric", id: "numeric" },
                // ]
              }
            />
            <Autocomplete
              id="short-month"
              key={2}
              value={shortDate.month}
              // onChange={(
              //   event: React.SyntheticEvent<Element, Event>,
              //   newValue
              // ) => {
              //   setShortMonth(event, newValue);
              // }}
              onChange={(
                event: React.SyntheticEvent<Element, Event>,
                newValue
              ) => {
                setShortDate({
                  ...shortDate,
                  month: newValue !== null ? newValue : "",
                });
              }}
              componentName={"short-month"}
              renderInput={(params) => (
                <TextField {...params} label={"Short Month"} />
              )}
              sx={{ width: 150 }}
              options={[
                "2-digit",
                "numeric",
                "narrow",
                "short",
                // { label: "2-Digit", id: "2-digit" },
                // { label: "Numeric", id: "numeric" },
                // { label: "Narrow", id: "narrow" },
                // { label: "Short", id: "short" },
              ]}
            />
            <Autocomplete
              id="short-year"
              key={3}
              value={shortDate.year}
              // onChange={(
              //   event: React.SyntheticEvent<Element, Event>,
              //   newValue
              // ) => {
              //   setShortYear(event, newValue);
              // }}
              onChange={(
                event: React.SyntheticEvent<Element, Event>,
                newValue
              ) => {
                setShortDate({
                  ...shortDate,
                  year: newValue !== null ? newValue : "",
                });
              }}
              componentName={"short-year"}
              renderInput={(params) => (
                <TextField {...params} label={"Short Year"} />
              )}
              sx={{ width: 150 }}
              options={
                ["2-digit", "numeric"]
                //   [
                //   { label: "2-Digit", id: "2-digit" },
                //   { label: "Numeric", id: "numeric" },
                // ]
              }
            />
            <Typography
              style={{ marginLeft: 20, marginTop: 15, color: "gray" }}
            >
              {/* {t("About.exShortDate", { newDate }, { dateTime: shortDate })} */}
            </Typography>
          </div>

          <div style={{ display: "flex" }}>
            <Autocomplete
              id="long-day"
              key={4}
              value={longDate.day}
              onChange={(
                event: React.SyntheticEvent<Element, Event>,
                newValue
              ) => {
                setLongDate({
                  ...longDate,
                  day: newValue !== null ? newValue : "",
                });
              }}
              componentName={"long-day"}
              renderInput={(params) => (
                <TextField {...params} label={"Long Day"} />
              )}
              sx={{ width: 150 }}
              options={[
                "2-digit",
                "numeric",
                // { label: "2-Digit", id: "2-digit" },
                // { label: "Numeric", id: "numeric" },
              ]}
            />
            <Autocomplete
              id="long-month"
              key={5}
              value={longDate.month}
              onChange={(
                event: React.SyntheticEvent<Element, Event>,
                newValue
              ) => {
                setLongDate({
                  ...longDate,
                  month: newValue !== null ? newValue : "",
                });
              }}
              componentName={"long-month"}
              renderInput={(params) => (
                <TextField {...params} label={"Long Month"} />
              )}
              sx={{ width: 150 }}
              options={[
                "2-digit",
                "numeric",
                "long",
                "narrow",
                // { label: "2-Digit", id: "2-digit" },
                // { label: "Numeric", id: "numeric" },
                // { label: "Long", id: "long" },
                // { label: "Narrow", id: "narrow" },
              ]}
            />
            <Autocomplete
              id="long-year"
              key={6}
              value={longDate.year}
              onChange={(
                event: React.SyntheticEvent<Element, Event>,
                newValue
              ) => {
                setLongDate({
                  ...longDate,
                  year: newValue !== null ? newValue : "",
                });
              }}
              componentName={"long-year"}
              renderInput={(params) => (
                <TextField {...params} label={"Long Year"} />
              )}
              sx={{ width: 150 }}
              options={[
                "2-digit",
                "numeric",
                // { label: "2-Digit", id: "2-digit" },
                // { label: "Numeric", id: "numeric" },
              ]}
            />
            <Typography
              style={{ marginLeft: 20, marginTop: 15, color: "gray" }}
            >
              {/* {t("About.exLongDate", { newDate }, { dateTime: longDate })} */}
            </Typography>
          </div>
        </div>
      </PageLayout>
    </div>
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
