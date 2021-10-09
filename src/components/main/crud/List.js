import * as React from 'react';
import PropTypes from 'prop-types';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { IconButton } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import BallotIcon from '@mui/icons-material/Ballot';
const defaultTheme = createTheme();
//styling the data table grid
const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: 600,
      width: '100%',
      '& .MuiFormGroup-options': {
        alignItems: 'center',
        paddingBottom: theme.spacing(1),
        '& > div': {
          minWidth: 100,
          margin: theme.spacing(2, 2, 2, 0),
        },
      },
    },
  }),
  { defaultTheme },
);

// SettingsPanel  props configuration
SettingsPanel.propTypes = {
  onApply: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['Commodity', 'Employee']).isRequired,
};
function SettingsPanel(props) {
  const { onApply, type, size } = props;
  const [sizeState, setSize] = React.useState(size);
  const [typeState, setType] = React.useState(type);
  const [selectedPaginationValue, setSelectedPaginationValue] = React.useState(-1);

  const handleSizeChange = React.useCallback((event) => {
    setSize(Number(event.target.value));
  }, []);

  const handleDatasetChange = React.useCallback((event) => {
    setType(event.target.value);
  }, []);

  const handlePaginationChange = React.useCallback((event) => {
    setSelectedPaginationValue(event.target.value);
  }, []);


  const handleApplyChanges = React.useCallback(() => {
    onApply({
      size: sizeState,
      type: typeState,
      pagesize: selectedPaginationValue,
    });
  }, [sizeState, typeState, selectedPaginationValue, onApply]);

  return (
    <FormGroup className="MuiFormGroup-options" row>
      <FormControl variant="standard">
        <InputLabel>Dataset</InputLabel>
        <Select value={typeState} onChange={handleDatasetChange}>
          <MenuItem value="Employee">Employee</MenuItem>
          <MenuItem value="Commodity">Commodity</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel>Rows</InputLabel>
        <Select value={sizeState} onChange={handleSizeChange}>
          <MenuItem value={100}>100</MenuItem>
          <MenuItem value={1000}>{Number(1000).toLocaleString()}</MenuItem>
          <MenuItem value={10000}>{Number(10000).toLocaleString()}</MenuItem>
          <MenuItem value={100000}>{Number(100000).toLocaleString()}</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel>Page Size</InputLabel>
        <Select value={selectedPaginationValue} onChange={handlePaginationChange}>
          <MenuItem value={-1}>off</MenuItem>
          <MenuItem value={0}>auto</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={100}>100</MenuItem>
          <MenuItem value={1000}>{Number(1000).toLocaleString()}</MenuItem>
        </Select>
      </FormControl>

      <Button
        size="small"
        variant="outlined"
        color="primary"
        onClick={handleApplyChanges}
      >
        <KeyboardArrowRightIcon fontSize="small" /> Apply
      </Button>
    </FormGroup>
  );
}

//data table Componenet 
export default function FullFeaturedDemo() {
  const classes = useStyles();
  const [type, setType] = React.useState('Commodity');
  const [size, setSize] = React.useState(100);
  let { loading, data, setRowLength, loadNewData } = useDemoData({
    dataSet: type,
    rowLength: size,
    maxColumns: 2,
    editable: false,
  });

  const [pagination, setPagination] = React.useState({
    pagination: true,
    autoPageSize: true,
    pageSize: undefined,
  });

  const handleApplyClick = (settings) => {
    if (size !== settings.size) {
      setSize(settings.size);
    }
    if (type !== settings.type) {
      setType(settings.type);
    }
    if (size !== settings.size || type !== settings.type) {
      setRowLength(settings.size);
      loadNewData();
    }
    const newPaginationSettings = {
      pagination: true,
      autoPageSize: settings.pagesize === 0,
      pageSize: settings.pagesize > 0 ? settings.pagesize : undefined,
    };
    setPagination((currentPaginationSettings) => {
      if (
        currentPaginationSettings.pagination === newPaginationSettings.pagination &&
        currentPaginationSettings.autoPageSize ===
        newPaginationSettings.autoPageSize &&
        currentPaginationSettings.pageSize === newPaginationSettings.pageSize
      ) {
        return currentPaginationSettings;
      }
      return newPaginationSettings;
    });
  };
  //data 
  const [newdata, setNewData] = React.useState({
    rows: [
      { id: 1, col1: 'Hello', col2: 'World', actions: 'id' },
      { id: 2, col1: 'DataGridPro', col2: 'is Awesome', actions: 'id' },
      { id: 3, col1: 'MUI', col2: 'is Amazing', actions: 'id' },
    ],
    columns: [
      { field: 'col1', headerName: 'Column 1', width: 150 },
      { field: 'col2', headerName: 'Column 2', width: 150 },

    ]
  })
  const addCrudControlls = () => {
    setNewData(
      {
        rows: newdata.rows.map(obj => ({ ...obj, 'actions': obj.id })),
        columns:
          [...newdata.columns,
          {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
              <>
                <IconButton> <DeleteIcon color='error' /> </IconButton>
                <IconButton> <ModeEditOutlineIcon color='secondary' /> </IconButton>
                <IconButton> <BallotIcon color='info' /> </IconButton>
              </>
            ),
          },
          ]
      }
    )

  }
  React.useEffect(() => {
    addCrudControlls();
  }, [])

  return (
    <div className={classes.root}>
      <SettingsPanel onApply={handleApplyClick} size={size} type={type} />
      <DataGrid {...newdata} components={{ Toolbar: GridToolbar, }}
        loading={loading}
        checkboxSelection
        disableSelectionOnClick
        {...pagination}
      />
    </div>
  );
}
