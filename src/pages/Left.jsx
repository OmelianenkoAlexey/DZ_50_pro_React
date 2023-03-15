import React from "react";

import { styled, Box } from "@mui/material";

    const MainWrapperLeft = styled(Box)(() => ({

        width: "30%",
        height: "500px",
        backgroundColor: "green",
    }));

export default function Left() {
    return (
        // <Grid container spacing={4}></Grid>
        <MainWrapperLeft>

        </MainWrapperLeft>
    )
}