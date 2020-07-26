import React, { useContext } from 'react';
import { CartContext } from '../Context/CartState';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: '50px',
    },
    appBar: {
        position: "fixed", 
        background: 'rgba(0,0,0,0.7)',
    },
    title: {
      flexGrow: 1,
      cursor: 'pointer',
      color: '#fff',
      textDecoration: 'none',
    },
  }));


export const Header = () => {
    const classes = useStyles();
    const { items } = useContext(CartContext);
    const shoppingIconCounter  = items.reduce((acc, current) => (acc+=current.qty), 0);

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                  <Link to="/" className={classes.title}>
                    <Typography variant="h6">
                        Shoe Store 1
                    </Typography>
                  </Link>
                    <div className={"pageLink"}>
                      <Link to="/">Home</Link>
                      <Link to="/products">Products</Link>
                      <Link to="/cart">
                        <Badge badgeContent={shoppingIconCounter} color="secondary">
                            <ShoppingCartIcon className="hoverIcon" />
                        </Badge>
                      </Link>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    )
}
