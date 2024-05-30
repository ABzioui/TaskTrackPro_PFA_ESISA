import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTasksQuery } from "state/api";
import PageHeader from "components/PageHeader";

const Tasks = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetTasksQuery();
  const columns = [
    { field: "taskID", headerName: "TaskID", flex: 1 },
    { field: "taskName", headerName: "Task Name", flex: 1 },
    { field: "description", headerName: "Description", flex: 2 },
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Date", flex: 1 },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <PageHeader
        title="TASKS DETAILS"
        subtitle="List Of Tasks & Their Details"
      />
      <Box
        mt="40px"
        height="75vph"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-root": { borderBottom: "none" },
          "& .MuiDataGrid-columnHeaders": {
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
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Tasks;
