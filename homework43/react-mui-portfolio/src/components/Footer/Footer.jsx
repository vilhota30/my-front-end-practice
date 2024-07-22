import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <Box className={styles.footerContainer} component="footer" py={6} mt={4}>
      <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={4} md={4}>
          <Typography variant="body1" align="left" className={styles.footer}>
            Phone number: +380 50 14 77 89 8
          </Typography>
        </Grid>
        <Grid item xs={4} md={4}>
          <Typography variant="body1" align="right" className={styles.footer}>
            Email: nirodalina@gmail.com
          </Typography>
        </Grid>
         <Grid item xs={10} md={4}>
          <Typography variant="body1" align="center" className={styles.footer}>
            All rights reserved
          </Typography>
          <Typography variant="body1" align="center" className={styles.footer}>
            &copy; vilhota30
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
