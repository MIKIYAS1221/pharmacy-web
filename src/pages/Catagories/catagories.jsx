import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { Grid, Pagination } from '@mui/material';
import { clientInstance } from '../../config/config';
import Sidebar from '../../components/sidebar/sidebar';

const StyledTableContainer = styled(Grid)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(5),
  marginRight: theme.spacing(5),
}));

const columns = [
  { field: 'medication_id', headerName: 'Medication ID', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'unit', headerName: 'Unit', flex: 1 },
  { field: 'strength', headerName: 'Strength', flex: 1 },
  { field: 'manufacturer', headerName: 'Manufacturer', flex: 1 },
  { field: 'dosage', headerName: 'Dosage', flex: 1 },
  { field: 'product_code', headerName: 'Product Code', flex: 1 },
  { field: 'category', headerName: 'Category', flex: 1 },
  { field: 'inventory_Quantity', headerName: 'Inventory Quantity', flex: 1 },
  { field: 'record_threshold', headerName: 'Record Threshold', flex: 1 },
  { field: 'expiry_date', headerName: 'Expiry Date', flex: 1 },
];

export default function Catagory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    clientInstance.get('/medications/list').then((res) => {
      const medicationsWithId = res.data.medications.map((medication) => ({
        id: medication.medication_id,
        medication_id: medication.medication_id,
        name: medication.name,
        unit: medication.unit,
        strength: medication.strength,
        manufacturer: medication.manufacturer,
        dosage: medication.dosage,
        product_code: medication.product_code,
        category: medication.category.name,
        inventory_Quantity: medication.inventory.Quantity,
        record_threshold: medication.inventory.record_threshold,
        expiry_date: medication.inventory.expiry_date,
      }));
      setData(medicationsWithId);
      console.log(medicationsWithId);
    });
  }, []);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const pageData = data.slice(startIndex, endIndex);

  return (
    <Grid container>
      <Grid item xs={12} md={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} md={10}>
        <StyledTableContainer>
          <DataGrid
            columns={columns}
            rows={pageData}
            getRowId={(row) => row.id}
            autoHeight
            pageSize={rowsPerPage}
            rowCount={data.length}
            page={page}
            onPageChange={handleChangePage}
            onPageSizeChange={handleChangeRowsPerPage}
            // paginationMode='server'
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
          />
        </StyledTableContainer>
      </Grid>
    </Grid>
  );
}
