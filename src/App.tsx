import React, { FormEvent, useState } from 'react';
import './App.css';
import { createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, InputLabel, Paper, TextField, Typography } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#005173',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3)
  },
  formBox: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    flexGrow: 1,
  },
  formGrid: {
    flexGrow: 1,
    alignItems: "center",
    marginBottom: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  grid: {
    minHeight: 50,
    marginBottom: theme.spacing(1),
  },
  primaryButton: {
    color: "#ffffff",
    maxWidth: "30vh",
    background: "#407c5c",
    minHeight: "50px",
    marginLeft: "20px",
    marginRight: "20px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "14px",
    }
  },
  inputLabel: {
    textAlign: 'right',
    marginRight: theme.spacing(1)
  }
}));

interface EquipmentPurchaseOrder {
  job: string;
  equipment: string;
  vendor: string;
  purchaseOrderNumber: string;
  total: number;
}


function App() {
  const handleSubmit = (event: FormEvent) => {
    console.log(state);
    event.preventDefault();
  }

  const classes = useStyles();
  const [state, setState] = useState<EquipmentPurchaseOrder>();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container className={classes.root} direction="column">
          <Typography variant="h4">
            Equipment Purchase
          </Typography>
          <Typography variant="h6">
            Equipment Purchase entry
          </Typography>
          <Grid item xs={12} sm={12} md={11} lg={10} xl={7}>
            <Paper className={classes.formBox} variant="outlined" square>
              <form onSubmit={handleSubmit}>
                <Grid container className={classes.formGrid}>
                  <Grid container xs={12} sm={2} className={classes.grid}>
                    <InputLabel htmlFor="job" className="inputLabel">Job</InputLabel>
                  </Grid>
                  <Grid container xs={12} sm={4} className={classes.grid}>
                    <TextField id="job"
                      fullWidth
                      required
                      value={state?.job}
                      onChange={(event) =>
                        setState(
                          { ...state, job: event.target.value } as EquipmentPurchaseOrder
                        )} />
                  </Grid>
                  <Grid container xs={12} sm={2} className={classes.grid}>
                    <InputLabel htmlFor="equipment" className="inputLabel">Equipment</InputLabel>
                  </Grid>
                  <Grid container xs={12} sm={4} className={classes.grid}>
                    <TextField id="equipment"
                      fullWidth
                      required
                      value={state?.equipment}
                      onChange={(event) =>
                        setState(
                          { ...state, equipment: event.target.value } as EquipmentPurchaseOrder
                        )} />
                  </Grid>
                  <Grid container xs={12} sm={2} className={classes.grid}>
                    <InputLabel htmlFor="vendor" className="inputLabel">Vendor</InputLabel>
                  </Grid>
                  <Grid container xs={12} sm={4} className={classes.grid}>
                    <TextField id="vendor"
                      fullWidth
                      required
                      value={state?.vendor}
                      onChange={(event) =>
                        setState(
                          { ...state, vendor: event.target.value } as EquipmentPurchaseOrder
                        )} />
                  </Grid>
                  <Grid container xs={12} sm={2} className={classes.grid}>
                    <InputLabel htmlFor="purchaseOrderNumber" className="inputLabel">PO #</InputLabel>
                  </Grid>
                  <Grid container xs={12} sm={4} className={classes.grid}>
                    <TextField id="purchaseOrderNumber"
                      fullWidth
                      required
                      value={state?.purchaseOrderNumber}
                      onChange={(event) =>
                        setState(
                          { ...state, purchaseOrderNumber: event.target.value } as EquipmentPurchaseOrder
                        )} />
                  </Grid>
                  <Grid container xs={12} sm={2} className={classes.grid}>
                    <InputLabel htmlFor="total" className="inputLabel">Total</InputLabel>
                  </Grid>
                  <Grid container xs={12} sm={4} className={classes.grid}>
                    <TextField id="total"
                      fullWidth
                      required
                      type="number"
                      value={state?.total}
                      onChange={(event) =>
                        setState(
                          { ...state, total: parseInt(event.target.value, 10) } as EquipmentPurchaseOrder
                        )} />

                  </Grid>
                  <Grid item xs={12} className={classes.grid} container alignItems="flex-end">
                    <Button variant="contained" type="submit" className={classes.primaryButton}>Submit</Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
