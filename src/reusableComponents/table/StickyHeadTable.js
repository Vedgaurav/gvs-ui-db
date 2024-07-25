import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{ tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

const columns = [
  { id: 'id', label: 'ID', minWidth: 70 },
  { id: 'fname', label: 'Name', minWidth: 150 },
  { id: 'age', label: 'Age', minWidth: 50 },
  {
    id: 'chantingRounds',
    label: 'Rounds',
    minWidth: 50,
    align: 'right',
  },
  {
    id: 'facilitator',
    label: 'Facilitator',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'primaryPhone',
    label: 'Phone No.',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'connectedTo',
    label: 'Connected To',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'connectedToPhNo',
    label: "Connection's Ph",
    minWidth: 170,
    align: 'right',
  },
];



export default function StickyHeadTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const whatsAppNotifier =(primaryPhoneNo,whatsappPhone,id,fname)=>{

    console.log(primaryPhoneNo);
    console.log(whatsappPhone);
    console.log(id);
    console.log(fname);

    if(whatsappPhone.length==0||whatsappPhone==null)
    window.open(`https://wa.me/91${primaryPhoneNo}?text=Hare%20K%E1%B9%9B%E1%B9%A3%E1%B9%87a%21%0A%0AYour%20information%20has%20been%20successfully%20updated.%20Your%20membership%20id%20is%20%2A${id}%2A.%0APlease%20keep%20this%20ID%20saved.%20It%20would%20be%20needed%20at%20the%20time%20of%20Yatra%20registration%20and%20accommodation%20booking.%0A%0AIn%20your%20service%2C%0AGVS%20Dham%20Yatra%20Committee`)
    else
    window.open(`https://wa.me/91${whatsappPhone}?text=Hare%20K%E1%B9%9B%E1%B9%A3%E1%B9%87a%21%0A%0AYour%20information%20has%20been%20successfully%20updated.%20Your%20membership%20id%20is%20%2A${id}%2A.%0APlease%20keep%20this%20ID%20saved.%20It%20would%20be%20needed%20at%20the%20time%20of%20Yatra%20registration%20and%20accommodation%20booking.%0A%0AIn%20your%20service%2C%0AGVS%20Dham%20Yatra%20Committee`)

}

  return (
    <Paper sx={{ width: '140%', overflow: 'hidden' , rem:4 , alignSelf:'center',marginLeft:5, marginTop:5}}>
      <TableContainer sx={{ maxHeight: 590 ,maxWidth:1500}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
            <StyledTableCell
                  style={{ minWidth: "40"}}
                >
                  Sl
                </StyledTableCell>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
               <StyledTableCell
                  style={{ minWidth: "40"}}
                >
                  Notify
                </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props?.rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,index) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <StyledTableCell >
                          {index +1}
                        </StyledTableCell>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <StyledTableCell key={column.id} align={column.align}>
                          {value}
                        </StyledTableCell>
                      );
                    })}
                    <StyledTableCell >
                    <button className="btn"disabled={false} type="button" onClick={()=>whatsAppNotifier(row?.primaryPhone,row?.whatsappPhone,row?.id,row?.fname)}>
                    <img style={{ height: "2rem", width: "25px"}} src="../images/whatsapp_icon.png"/></button>
                        </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10, 25, 50]}
        component="div"
        count={props.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}