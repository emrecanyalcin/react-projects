import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
  { id: 1, name: 'Shoes' , description: 'Running shoes', price: '$5', image: 'https://cdn-ss.akinon.net/products/2021/01/26/143326/fff4112f-12a8-47b3-8e1b-721467ab46f2.jpg', },
  { id: 2, name: 'Macbook' , description: 'Apple Macbook', price: '$45', image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633657407000', },
]

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div  className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
  
}

export default Products;