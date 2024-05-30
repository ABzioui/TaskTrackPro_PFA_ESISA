import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetProjectsQuery } from "state/api";
import PageHeader from "components/PageHeader";

const Projects = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetProjectsQuery();
  console.log("Projects:", data);
  const columns = [
    { field: "projectID", headerName: "ProjectID", flex: 1 },
    { field: "projectName", headerName: "Project Name", flex: 1 },
    { field: "description", headerName: "Description", flex: 2 },
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "finished", headerName: "Finished", flex: 0.5 },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <PageHeader
        title="PROJECTS DETAILS"
        subtitle="List Of Projects & Their Details"
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

export default Projects;
