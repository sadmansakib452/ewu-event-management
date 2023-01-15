import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

export default function SupplierCard({supplier}) {
    console.log(supplier);
  return (
    <Card className="me-2 ms-3" sx={{ maxWidth: 300 }}>
  

      <CardActionArea
     
      >
        <CardMedia
          component="img"
          height="200"
          image={supplier.imageURL}
          sx={{ width: 300 }}
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
              {supplier.companyName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                
                Category: {supplier.supplierCategory}
            </Typography>
        </CardContent>
      </CardActionArea>
     
      
    </Card>
  );
}