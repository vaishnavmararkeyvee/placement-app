import { TableBody, TableCell, TableRow } from '@mui/material';
import { React } from 'react'
import data from "./ListData.json"

function List(props) {
    
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input

        else{
            return el.name.toLowerCase().includes(props.input)
            ||el.qualification.toLowerCase().includes(props.input)
            ||el.district.toLowerCase().includes(props.input)
            ||el.state.toLowerCase().includes(props.input)
            ||el.status.toLowerCase().includes(props.input)
            ||el.course.toLowerCase().includes(props.input)

        }
    })
  return (
        
    <TableBody>
      {filteredData.map((row) => (
        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell  component="th" scope="row">{row.name}</TableCell>
          <TableCell  align="center">{row.qualification}</TableCell>
          <TableCell  align="center">{row.district}</TableCell>
          <TableCell  align="center">{row.state}</TableCell>
          <TableCell  align="center">{row.passout}</TableCell>
          <TableCell  align="center">{row.status}</TableCell>
          <TableCell  align="center">{row.course}</TableCell>
          <TableCell  align="center">{row.mark}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default List;

