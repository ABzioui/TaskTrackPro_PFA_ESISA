import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetUsersQuery } from "state/api";
import { DataGrid } from "@mui/x-data-grid";

const Admin = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetUsersQuery();
  console.log("data", data);

  const colums = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "firstName",
      headerName: "FirstName",
      flex: 0.5,
    },
    {
      field: "lastName",
      headerName: "LastName",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
    {
      field: "location",
      headerName: "Location",
      flex: 0.5,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 0.5,
    },
    {
      field: "phoneNumber",
      headerName: "PhoneNumber",
      flex: 0.5,
    },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <Box
        mt="40px"
        height="75vph"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-root": { borderBottom: "none" },
          "& .MuiDataGrid-columHeaders": {
            backgroundColor: theme.palette.background.palette,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={colums}
        />
      </Box>
    </Box>
  );
};

export default Admin;
