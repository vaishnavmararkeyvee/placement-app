import * as React from 'react';
import { Box, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import List from './List';
import { useState } from 'react';
import './SearchPage.css';
import Footer from '../footer/Footer';
import AdminNav from '../header/AdminNav';

export default function SearchPage() {
   const [inputText, setInputText] =useState("");
   let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
   
  return ( 
    <div>
      <AdminNav />
      <img src='https://cdn1-production-images-kly.akamaized.net/2VZ87KSGy4MZkHRsShOLfI0JVVg=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3500071/original/084303500_1625295415-finger-pressing-search-engine_1112-658.jpg'  className='searchimg' alt=' ' />
      <div className="main">
        <h3>SEARCH STUDENTS</h3>
        <div className="search">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '99%' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              label="Search"
              />
            </div>
          </Box>   
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Qualification</TableCell>
                <TableCell align="center">District</TableCell>
                <TableCell align="center">State</TableCell>
                <TableCell align="center">Passout Year</TableCell>
                <TableCell align="center">Employment Status</TableCell>
                <TableCell align="center">Course Name</TableCell>
                <TableCell align="center">Exit Exam Mark</TableCell>
              </TableRow>
            </TableHead>
            <List input={inputText} />
          </Table>
        </TableContainer>
      </div>
      <Footer />
    </div>
  );
}
