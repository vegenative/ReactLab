import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
    ...(mode === "dark"
    ?
    {
        indigo: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414"
        },
        black: {
            100: "#ead1d1",
            200: "#d5a2a2",
            300: "#bf7474",
            400: "#aa4545",
            500: "#951717",
            600: "#771212",
            700: "#590e0e",
            800: "#3c0909",
            900: "#1e0505"
        },
        teal: {
            100: "#d6eef4",
            200: "#aedeea",
            300: "#85cddf",
            400: "#5dbdd5",
            500: "#34acca",
            600: "#2a8aa2",
            700: "#1f6779",
            800: "#154551",
            900: "#0a2228"
        },
    } :
    {
        indigo: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0"
        },
        black: {
            100: "#1e0505",
            200: "#3c0909",
            300: "#590e0e",
            400: "#771212",
            500: "#951717",
            600: "#aa4545",
            700: "#bf7474",
            800: "#d5a2a2",
            900: "#ead1d1"
        },
        teal: {
            100: "#0a2228",
            200: "#154551",
            300: "#1f6779",
            400: "#2a8aa2",
            500: "#34acca",
            600: "#5dbdd5",
            700: "#85cddf",
            800: "#aedeea",
            900: "#d6eef4"
        },
    })
});

export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return{
        palette: {
            mode:mode,
            ...colors(mode === 'dark')
        }
    }
}