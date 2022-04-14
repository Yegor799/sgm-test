import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { data } from '../../data';



const MainTable = () => { 

  const handleClick = (e) => {
    e.preventDefault();

    if (!parseInt(e.target.innerText)) {
      return
    }
    
    window.open('popup', 'jjjj', 'popup');    
  }

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '10%' }}></TableCell>
              <TableCell colSpan="3" align='center'>2017</TableCell>
              <TableCell colSpan="3" align='center'>2018</TableCell>
              <TableCell colSpan="3" align='center'>2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>region</TableCell>
              <TableCell>xx</TableCell>
              <TableCell>yy</TableCell>
              <TableCell>zz</TableCell>

              <TableCell>xx</TableCell>
              <TableCell>yy</TableCell>
              <TableCell>zz</TableCell>

              <TableCell>xx</TableCell>
              <TableCell>yy</TableCell>
              <TableCell>zz</TableCell>
            </TableRow>
          </TableHead>
          <TableBody onClick={handleClick}>
            {
              data.map((item) => {                
                return (
                  <>
                    <TableRow>
                      <TableCell>Kyivska</TableCell>
                      <TableCell>{item.Kyivska.G['2017'].XX.value}</TableCell>
                      <TableCell>{item.Kyivska.G['2017'].YY.value}</TableCell>
                      <TableCell>{item.Kyivska.G['2017'].ZZ.value}</TableCell>
                        
                      <TableCell>{item.Kyivska.G['2018'].XX.value}</TableCell>
                      <TableCell>{item.Kyivska.G['2018'].YY.value}</TableCell>
                      <TableCell>{item.Kyivska.G['2018'].ZZ.value}</TableCell>

                      <TableCell>{item.Kyivska.G['2019'].XX.value}</TableCell>
                      <TableCell>{item.Kyivska.G['2019'].YY.value}</TableCell>
                      <TableCell>{item.Kyivska.G['2019'].ZZ.value}</TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell>Odeska</TableCell>
                      <TableCell>{item.Odeska.G['2017'].XX.value}</TableCell>
                      <TableCell>{item.Odeska.G['2017'].YY.value}</TableCell>
                      <TableCell>{item.Odeska.G['2017'].ZZ.value}</TableCell>
                        
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>

                      <TableCell>{item.Odeska.G['2019'].XX.value}</TableCell>
                      <TableCell>{item.Odeska.G['2019'].YY.value}</TableCell>
                      <TableCell>{item.Odeska.G['2019'].ZZ.value}</TableCell>
                    </TableRow>
                      
                    <TableRow>
                      <TableCell>Lvivska</TableCell>
                      <TableCell>{item.Lvivska.G['2017'].XX.value}</TableCell>
                      <TableCell>{item.Lvivska.G['2017'].YY.value}</TableCell>
                      <TableCell>{item.Lvivska.G['2017'].ZZ.value}</TableCell>

                      <TableCell>{item.Lvivska.G['2018'].XX.value}</TableCell>
                      <TableCell>{item.Lvivska.G['2018'].YY.value}</TableCell>
                      <TableCell>{item.Lvivska.G['2018'].ZZ.value}</TableCell>
                        
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