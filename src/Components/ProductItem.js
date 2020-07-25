import React, { useContext } from 'react';
import { CartContext } from '../Context/CartState';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import shoesData from '../productData.json';

import './../main.css';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    imgLayout: {
        width: '100%',
        height: '100%',
    },
    imgStyle: {
        width: '80%',
        height: '90%',
        display: 'block',
        margin: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    text: {
        textAlign: 'left',
        margin: 'auto 0',
    },
    btn: {
        color: '#1e1f1f',
        border: '1px solid #2d2e2e',
    },
    price: {
        fontWeight: '600',
    },
  }));

export const ProductItem = () => {
    const classes = useStyles();
    const { id } = useParams();
    const shoe = shoesData.products.filter(product => product.id === id)[0];
    const { addToCart } = useContext(CartContext);

    const handleClick = () => {
        const quantity = 1;
        const item = {
            id: shoe.id,
            title: shoe.title,
            image: shoe.image,
            qty: quantity,
            unitPrice: shoe.price,
            itemsBill: shoe.price * quantity,
        }
        addToCart(item);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item md={5}>
                    <div className={classes.imgLayout}>
                        <img className={classes.imgStyle} src={shoe.image} />
                    </div>
                </Grid>
                <Grid item md={7}  className={classes.text}>
                    <h3>{shoe.title}</h3>
                    <p>{shoe.description}</p>
                    <p className={classes.price}>Price: ${shoe.price}</p>
                    <Button variant='outlined' className={classes.btn} onClick={handleClick}>
                        Add to Cart
                    </Button>
                </Grid>
            </Grid>
        </div>
        
    )
}
