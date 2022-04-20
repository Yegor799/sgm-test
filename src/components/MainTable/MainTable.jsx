import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { data } from '../../data';
import { useState, useEffect } from 'react';


const MainTable = () => {   

  const [cell, setCell] = useState(null);
  const [receivedData, setReceivedData] = useState(null);  
  
  window.addEventListener('message', evt => {
    setReceivedData(evt.data)
  });  
  
  useEffect(() => {
      
    if (!receivedData) {
      return
    }

    const { value, date, user, comment } = receivedData;

    if (value === undefined && date === undefined && user === undefined && comment === undefined) {
      return
    }

    if (cell) {
      cell.innerText = `${value} ${date} ${user} ${comment}`
    }

    setReceivedData(null)
    
  }, [cell, receivedData])
  

  const handleClick = (e) => {
    e.preventDefault();

    if (e.target.localName !== "td") {
      return
    }

    setCell(e.target);
    
    const newWindow = window.open('popup', 'popup', 'popup');
  }
  

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '10%' }}></TableCell>
              <TableCell colSpan="4" align='center'>2017</TableCell>
              <TableCell colSpan="4" align='center'>2018</TableCell>
              <TableCell colSpan="4" align='center'>2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>region</TableCell>
              <TableCell>xx</TableCell>
              <TableCell>yy</TableCell>
              <TableCell>zz</TableCell>
              <TableCell>ww</TableCell>

              <TableCell>xx</TableCell>
              <TableCell>yy</TableCell>
              <TableCell>zz</TableCell>
              <TableCell>ww</TableCell>


              <TableCell>xx</TableCell>
              <TableCell>yy</TableCell>
              <TableCell>zz</TableCell>
              <TableCell>ww</TableCell>
            </TableRow>
          </TableHead>
          <TableBody onClick={handleClick}>
            {
              data.map((item) => {                
                return (
                  <>
                    <TableRow>
                      <TableCell component="th">Kyivska</TableCell>
                      <TableCell>{item.Kyivska.G['2017'].XX.value}</TableCell>
                      <TableCell>{item.Kyivska.G['2017'].YY.value}</TableCell>
                      <TableCell>{item.Kyivska.G['2017'].ZZ.value}</TableCell>
                      <TableCell>{item.Kyivska.G['2017'].ZZ.value * item.Kyivska.G['2017'].YY.value}</TableCell>
                        
                      <TableCell>{item.Kyivska.G['2018'].XX.value}</TableCell>
                      <TableCell>{item.Kyivska.G['2018'].YY.value}</TableCell>
                      <TableCell>{item.Kyivska.G['2018'].ZZ.value}</TableCell>
                      <TableCell>{item.Kyivska.G['2018'].ZZ.value * item.Kyivska.G['2018'].YY.value}</TableCell>

                      <TableCell>{item.Kyivska.G['2019'].XX.value}</TableCell>
                      <TableCell>{item.Kyivska.G['2019'].YY.value}</TableCell>
                      <TableCell>{item.Kyivska.G['2019'].ZZ.value}</TableCell>
                      <TableCell>{item.Kyivska.G['2019'].ZZ.value * item.Kyivska.G['2019'].YY.value}</TableCell>
                    </TableRow>
                    
                    <TableRow >
                      <TableCell component="th">Odeska</TableCell>
                      <TableCell>{item.Odeska.G['2017'].XX.value}</TableCell>
                      <TableCell>{item.Odeska.G['2017'].YY.value}</TableCell>
                      <TableCell>{item.Odeska.G['2017'].ZZ.value}</TableCell>
                      <TableCell>{item.Odeska.G['2017'].ZZ.value * item.Odeska.G['2017'].YY.value}</TableCell>
                        
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>

                      <TableCell>{item.Odeska.G['2019'].XX.value}</TableCell>
                      <TableCell>{item.Odeska.G['2019'].YY.value}</TableCell>
                      <TableCell>{item.Odeska.G['2019'].ZZ.value}</TableCell>
                      <TableCell>{item.Odeska.G['2019'].ZZ.value * item.Odeska.G['2019'].YY.value}</TableCell>
                    </TableRow>
                      
                    <TableRow >
                      <TableCell component="th">Lvivska</TableCell>
                      <TableCell>{item.Lvivska.G['2017'].XX.value}</TableCell>
                      <TableCell>{item.Lvivska.G['2017'].YY.value}</TableCell>
                      <TableCell>{item.Lvivska.G['2017'].ZZ.value}</TableCell>
                      <TableCell>{item.Lvivska.G['2017'].ZZ.value * item.Lvivska.G['2017'].YY.value}</TableCell>

                      <TableCell>{item.Lvivska.G['2018'].XX.value}</TableCell>
                      <TableCell>{item.Lvivska.G['2018'].YY.value}</TableCell>
                      <TableCell>{item.Lvivska.G['2018'].ZZ.value}</TableCell>
                      <TableCell>{item.Lvivska.G['2018'].ZZ.value * item.Lvivska.G['2018'].YY.value}</TableCell>
                    
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>                      
                    </TableRow>                      
                  </>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>      
    </Paper>
  );
}

export default MainTable;