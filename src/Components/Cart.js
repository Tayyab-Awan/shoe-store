import React, { useContext } from 'react';
import { CartContext } from '../Context/CartState';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles({
   gridContainer: {
      width: '100%',
      boxSizing: "border-box",
      justifyContent: 'center',
  },
  paper: {
    width: '70%',
    margin: '0 auto',
  },
  table: {
    width: '100%',
  },
  qtyCountBtn: {
      fontSize: '16px',
      fontStyle: 'bold',
  },
  imgLayout: {
      width: '70px',
      height: '70px',
  },
  imgStyle: {
    display: 'block',
    width: '100%',
    height: '100%',
  },
  billSummary: {
    padding: '20px',
    width: '70%',
    margin: '0 auto',
  },
  summaryText: {
    color: '#414141',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
      margin: '5px',
      fontWeight: '400',
  },
});

export const Cart = () => {
    const classes = useStyles();
    const { items, incrementItem,
            decrementItem,removeItem,
            clearCart } = useContext(CartContext);
    const allBills = items.map(item => item.itemsBill);
    const subTotal = allBills.reduce((acc, current) => (acc+=current), 0);


    return (
        <React.Fragment>
            <Grid className={classes.gridContainer} container spacing={3}>
                <Grid item md={8} xs={12}>
                    <TableContainer component={Paper} className={classes.paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Remove</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map(shoe => {
                                    return(
                                        <TableRow key={shoe.id}>
                                            <TableCell>
                                                <div className={classes.imgLayout}>
                                                    <img className={classes.imgStyle} src={shoe.image} alt={'shoes'}></img>
                                                </div>
                                            </TableCell>
                                            <TableCell>{shoe.title}</TableCell>
                                            <TableCell>
                                                <Button className={classes.qtyCountBtn} color="primary" onClick={()=> decrementItem(shoe.id)}>-</Button>
                                                {shoe.qty}
                                                <Button className={classes.qtyCountBtn} color="primary" onClick={()=> incrementItem(shoe.id)}>+</Button>
                                            </TableCell>
                                            <TableCell>${shoe.itemsBill}</TableCell>
                                            <TableCell>
                                                <IconButton color='secondary' onClick={() => removeItem(shoe.id)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Paper className={classes.billSummary}>
                            <h3 style={{color: '#414141'}}>Billing Summary</h3>
                            <div className={classes.summaryText}>
                                <h4>Subtotal</h4>
                                <p>${subTotal}</p>
                            </div>
                            <hr/>
                            <div className={classes.summaryText}>
                                <h4>Estimated Tax</h4>
                                <p>$0</p>
                            </div>
                            <hr/>
                            <div className={classes.summaryText}>
                                <h4>Total</h4>
                                <p>${subTotal}</p>
                            </div>
                            <hr/>
                            <Button disableElevation className={classes.buttons} variant='contained' color='secondary' onClick={() => clearCart()}>Clear Cart</Button>
                            <Button disableElevation className={classes.buttons} variant='contained' color='primary' onClick={() => clearCart()}>Checkout</Button>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
