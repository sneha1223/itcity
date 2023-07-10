import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProduct, getAllProduct } from '../../Store/categorySlice'
// import { Card, Button } from 'react-bootstrap'
import { thumbImgUrl } from '../../Constants'
import { Link, useParams } from 'react-router-dom'
import './Categories.css'

import { fetchAsyncBrandCategories, setSelectedData } from '../../Store/brandSlice'
import BrandFilter from '../BrandFilter/BrandFilter'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';



function Cat() {
    const dispatch = useDispatch();

    const allProduct = useSelector(getAllProduct);
    console.log("All Product", allProduct);
  
    const { category_id } = useParams();
  
    useEffect(() => {
      dispatch(fetchAllProduct(category_id))
    }, [dispatch, category_id]);
  
    const selectedBrands = useSelector((state) => state.brands.selectedBrands)
    console.log(selectedBrands);
  
    useEffect(() => {
      dispatch(fetchAsyncBrandCategories(category_id));
    }, [dispatch, category_id])
  
    const selectedData = useSelector((state) => state.brands.selectedData)
    console.log("selectedData", selectedData)
  
    useEffect(() => {
      dispatch(setSelectedData(allProduct.filter(item => selectedBrands.includes(parseInt(item.product_brand)))))
    }, [selectedBrands,dispatch,allProduct])

  return (
    <div>


<Grid container spacing={5}>

<Grid item xs={1} sm={1} md={1}>

</Grid>
      <Grid item xs={12} sm={4} md={3}>
<BrandFilter />
      </Grid>

   <Grid item xs={12} sm={4} md={3}>
   <div className='wrap-product'>
            {selectedData.length > 0 ? (
              <div className='colu2'>
                {selectedData.map((val) => {
                  return (
                    <div>
                      <Link className='linkStyle' to={`/product/${val.product_id}`} key={val?.id}>
         
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Link>
                    </div>
                  )
                })}
              </div>
 ) : (
    <div className='colu2'>
      {allProduct.map((val) => {
        return (
          <div>
            <Link className='linkStyle' to={`/product/${val.product_id}`} key={val?.id}>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Link>
    </div>
 )
    })}
  </div>
)
}
</div>
</Grid>
</Grid>
</div>
  )
}
export default Cat