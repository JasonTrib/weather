import React, { useContext, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import WeatherContext from "./WeatherContext";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import clss from "classnames";

const useStyles = makeStyles((theme) => ({
    accordionHeading: {},
    accordion: {
        "&.MuiPaper-root": {
            backgroundColor: (props) => props.accordionBgColor,
            boxShadow: "none",
        },
        "&.MuiAccordion-root": {},
        "&.Mui-expanded": {
            margin: "0px 0px",
        },
        "& .MuiAccordionSummary-root": {
            height: "48px",
            minHeight: "0px",
            color: (props) => props.accordionSummaryColor,
        },
        "& .MuiAccordionDetails-root": {
            color: (props) => props.accordionDetailsColor,
            backgroundColor: (props) => props.accordionDetailsBgColor,
            padding: "10px 16px 10px",
            display: "block",
        },
    },
    accordionIcon: {
        color: (props) => props.accordionIconColor,
    },
    table: {
        "& .MuiTableCell-root": {
            padding: "0px 0px 0px 0px",
            borderBottomColor: (props) => props.tableBorderColor,
        },
        "& .MuiTableCell-body": {
            color: (props) => props.tableColor,
            fontSize: "10px",
        },
    },
    tableContainer: {
        "&.MuiPaper-root": {
            backgroundColor: "transparent",
        },
        "&.MuiPaper-elevation1": {
            boxShadow: "none",
        },
    },
}));

const WeatherDetails = ({ data }) => {
    const { isMetric, themes, colorTheme } = useContext(WeatherContext);
    const props = useMemo(() => {
        return colorTheme === themes[0]
            ? {
                  accordionBgColor: "rgba(186, 214, 224,0.2)",
                  accordionSummaryColor: "rgba(255,255,255,0.75)",
                  accordionIconColor: "rgba(255,255,255,0.75)",
                  accordionDetailsColor: "white",
                  accordionDetailsBgColor: "rgba(186, 214, 224,0.25)",
                  tableBorderColor: "rgba(255,255,255,0.5)",
                  tableColor: "white",
              }
            : colorTheme === themes[1]
            ? {
                  accordionBgColor: "rgba(87, 7, 42,0.2)",
                  accordionSummaryColor: "#57072a",
                  accordionIconColor: "#57072a",
                  accordionDetailsColor: "black",
                  accordionDetailsBgColor: "rgba(255, 255,255,0.2)",
                  tableBorderColor: "rgba(0,0,0,0.25)",
                  tableColor: "black",
              }
            : null;
    }, [colorTheme, themes]);
    const classes = useStyles(props);
    const [expanded, setExpanded] = React.useState(false);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    function createData(name, measurement) {
        return { name, measurement };
    }

    const rows = [
        createData(
            "Wind speed:",
            isMetric
                ? data?.wind.speed + "m/sec"
                : (data?.wind.speed * 2.237).toFixed(2) + "mph"
        ),
        createData("Humidity:", data?.main.humidity + "%"),
        createData(
            "Temperature range:",
            (isMetric
                ? data?.main.temp_min.toFixed() + "°C"
                : ((data?.main.temp_min * 9) / 5 + 32).toFixed() + "°F") +
                "~" +
                (isMetric
                    ? data?.main.temp_max.toFixed() + "°C"
                    : ((data?.main.temp_max * 9) / 5 + 32).toFixed() + "°F")
        ),
        createData(
            "Feels like:",
            isMetric
                ? data?.main.feels_like.toFixed() + "°C"
                : ((data?.main.feels_like * 9) / 5 + 32).toFixed() + "°F"
        ),
    ];

    return (
        <>
            {data && (
                <div style={{ marginTop: "2px" }}>
                    <Accordion
                        expanded={expanded === "panel1"}
                        onChange={handleAccordionChange("panel1")}
                        square
                        className={clss(classes.accordion)}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon
                                    className={clss(classes.accordionIcon)}
                                />
                            }
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.accordionHeading}>
                                More details
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer
                                component={Paper}
                                className={classes.tableContainer}
                            >
                                <Table
                                    className={clss(classes.table)}
                                    size="small"
                                    aria-label="details"
                                >
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {row.measurement}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                </div>
            )}
        </>
    );
};

export default WeatherDetails;
