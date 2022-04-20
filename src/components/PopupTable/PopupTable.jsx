import './PopupTable.css';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(value, date, user, comment) {
  return { value, date, user, comment };
}

const rowss = [
  createData(1, '02/25/2022', 'Pedro', "Hello"),
  createData(2, '05/21/2022', 'Roman', "Hello"),
  createData(3, '07/15/2022', 'Anna', "Hello")
];

const PopupTable = () => {
  
  const [rows, setRows] = useState(rowss)
  const [value, setValue] = useState(0);
  const [date, setDate] = useState(new Date(Date.now()).toLocaleString().split(',')[0]);
  const [user, setUser] = useState('Jack');
  const [comment, setComment] = useState('');

  const handleChangeValue = (e) => {
    setValue(e.target.value)
  }

  const handleChangeDate = (e) => {
    setDate(e.target.value)
  }

  const handleChangeUser = (e) => {
    setUser(e.target.value)
  }

  const handleChangeComment = (e) => {
    setComment(e.target.value)
  }
  

  const handleClickAdd = () => {
    setRows(prevState => [...prevState, { value, date, user, comment }]);     
    window.opener.parent.postMessage({value, date, user, comment}, '*')
    setValue(0);
    setDate(new Date(Date.now()).toLocaleString().split(',')[0]);
    setUser('Jack');
    setComment('');    
  }

  
  return (
    <div className='PopupTable'>
     <TableContainer sx={{ width: 900 }} component={Paper}>
      <Table sx={{ width: 900 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>value</TableCell>
            <TableCell align="center">date</TableCell>
            <TableCell align="center">user</TableCell>
            <TableCell align="center">comment</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.value}
              </TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.user}</TableCell>
              <TableCell align="center">{row.comment}</TableCell>                
            </TableRow>            
          ))}
          <TableRow>
            <TableCell>
              <input type="number" value={value} className='first-input' onChange={handleChangeValue} />
            </TableCell>
            <TableCell>
              <input value={date} onChange={handleChangeDate}/>
            </TableCell>
            <TableCell>
              <input value={user} onChange={handleChangeUser}/>
            </TableCell>
            <TableCell>
              <input type="text" value={comment} onChange={handleChangeComment}/>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </TableContainer>
      <button onClick={handleClickAdd}>ADD</button>
      <button onClick={() => window.close()}>CLOSE</button>
      </div>
  )
}

export default PopupTable;