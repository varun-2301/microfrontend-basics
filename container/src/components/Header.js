import React from 'react'
import { NavLink } from "react-router-dom"
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { alpha } from "@material-ui/core/styles/colorManipulator"
import purple from "@material-ui/core/colors/purple"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    outlinedPurple: {
        border: `1px solid ${alpha(purple[500], 0.5)}`,
            "&:hover": {
            border: `1px solid ${purple[500]}`
        },
        "&$disabled": {
            border: `1px solid ${theme.palette.action.disabled}`
        },
    },

    containedPurple: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        "&:hover": {
            backgroundColor: purple[700],
            "@media (hover: none)": {
                backgroundColor: purple[500]
            }
        }
    },
}))

export default () => {
    const classes = useStyles()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Typography>
                    <NavLink to={'/'}>
                        <Button
                            variant="outlined"
                            className={classes.outlinedPurple}
                            style={{
                                float: "left",
                            }}
                        >
                            Purple Outlined
                        </Button>
                    </NavLink>
                    <Button 
                        variant="contained" 
                        className={classes.containedPurple} 
                        style={{
                            float: "right",
                        }}
                    >
                        Purple Contained
                    </Button>
                </Typography>
            </AppBar>
        </Box>
    )
}
