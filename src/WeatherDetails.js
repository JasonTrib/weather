import React, { useContext } from "react";
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

const customTheme = {
    t1: {
        accordionBgColor: "rgba(186, 214, 224,0.2)",
        accordionSummaryColor: "rgba(255,255,255,0.75)",
        accordionIconColor: "rgba(255,255,255,0.75)",
        accordionDetailsColor: "white",
        accordionDetailsBgColor: "rgba(186, 214, 224,0.25)",
        tableBorderColor: "rgba(255,255,255,0.5)",
        tableColor: "white",
    },
    t2: {
        accordionBgColor: "rgba(87, 7, 42,0.2)",
        accordionSummaryColor: "#57072a",
        accordionIconColor: "#57072a",
        accordionDetailsColor: "black",
        accordionDetailsBgColor: "rgba(255, 255,255,0.2)",
        tableBorderColor: "rgba(0,0,0,0.25)",
        tableColor: "black",
    },
};

const useStyles = makeStyles((theme) => ({
    accordionHeading: {},
    accordion: {
        "&.MuiPaper-root": {
            backgroundColor: customTheme.t1.accordionBgColor,
            boxShadow: "none",
        },
        "&.MuiAccordion-root": {},
        "&.Mui-expanded": {
            margin: "0px 0px",
        },
        "& .MuiAccordionSummary-root": {
            height: "48px",
            minHeight: "0px",
            color: customTheme.t1.accordionSummaryColor,
        },
        "& .MuiAccordionDetails-root": {
            color: customTheme.t1.accordionDetailsColor,
            backgroundColor: customTheme.t1.accordionDetailsBgColor,
            padding: "10px 16px 10px",
            display: "block",
        },
    },
    accordionPink: {
        "&.MuiPaper-root": {
            backgroundColor: customTheme.t2.accordionBgColor,
        },
        "& .MuiAccordionSummary-root": {
            color: customTheme.t2.accordionSummaryColor,
        },
        "& .MuiAccordionDetails-root": {
            color: customTheme.t2.accordionDetailsColor,
            backgroundColor: customTheme.t2.accordionDetailsBgColor,
        },
    },
    accordionIcon: {
        color: customTheme.t1.accordionIconColor,
    },
    accordionIconPink: {
        color: customTheme.t2.accordionIconColor,
    },
    table: {
        "& .MuiTableCell-root": {
            padding: "0px 0px 0px 0px",
            borderBottomColor: customTheme.t1.tableBorderColor,
        },
        "& .MuiTableCell-body": {
            color: customTheme.t1.tableColor,
            fontSize: "10px",
        },
    },
    tablePink: {
        "& .MuiTableCell-root": {
            borderBottomColor: customTheme.t2.tableBorderColor,
        },
        "& .MuiTableCell-body": {
            color: customTheme.t2.tableColor,
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
    const classes = useStyles();
    const { isMetric, themes, colorTheme } = useContext(WeatherContext);

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
                        className={clss(
                            classes.accordion,
                            colorTheme === themes[1] && classes.accordionPink
                        )}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon
                                    className={clss(
                                        classes.accordionIcon,
                                        colorTheme === themes[1] &&
                                            classes.accordionIconPink
                                    )}
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
                                    className={clss(
                                        classes.table,
                                        colorTheme === themes[1] &&
                                            classes.tablePink
                                    )}
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
