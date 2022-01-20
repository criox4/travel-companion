import React from "react";
import { AutoComplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles";

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.title} variant="h5">
                    Travel Advisor
                </Typography>
                <Box diplay="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore Nearby Places
                    </Typography>
                    {/* <AutoComplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    {/* </AutoComplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
