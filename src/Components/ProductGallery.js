import React from 'react';
import { Link } from 'react-router-dom';
import shoesData from '../productData.json';
import '../main.css';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      margin: '0 auto',
      width: '80%',
      padding: theme.spacing(2),
    },
    paper: {
      width: 300,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    links: {
        textDecoration: 'none',
    },
  }));

export const ProductGallery = () => {

    const classes = useStyles();
    const products = shoesData.products;

    return (
        
        <div className={classes.root}>
            <Grid container spacing={3}>
                    {products.map(product => {
                        return(
                            <Grid item md={4} key={product.id}>
                                <Paper className={`${classes.paper} productCard`}>
                                    <Link to={`/products/${product.id}`} className={classes.links} >
                                        <img src={product.image} alt="running shoes" />
                                        <div className='text'>
                                            <p className="title">{product.title}</p>
                                            <p className="price">${product.price}</p>
                                        </div>
                                    </Link>
                                </Paper>       
                            </Grid>  
                        );
                    })} 
            </Grid>
        </div>

    )
}
