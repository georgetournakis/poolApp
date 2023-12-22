import {columns} from "./columns";
import {DataGrid} from "@mui/x-data-grid";
const Table = () => {
    return(
    <DataGrid
        columns={columns}
        rows={}
        initialState={{
        pagination: {
            paginationModel: { page: 0, pageSize: 10 },
        },
    }}
    />)
}
