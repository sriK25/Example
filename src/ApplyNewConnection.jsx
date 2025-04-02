import { Description } from "@mui/icons-material";
import {
  Button,
  Box,
  Tabs,
  Tab,
  Collapse,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { makeStyles } from "tss-react/mui";
import { TABS } from "./constants";

const NewConnectionForm = ({ onClose }) => {
  const { classes } = useStyles();
  const INITIAL_VALUE = {
    field1: "",
    field2: "",
    connectionType: "",
  };
  const [formData, setFormData] = useState(INITIAL_VALUE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const submitForm = () => {
    console.log("submit", formData);
  };
  return (
    <Box
      sx={{
        padding: "4px 16px 8px 0px",
        marginLeft: "8px",
        border: "1px solid #d3d3d3",
        minWidth: 400,
        height: "100%",
      }}
    >
      <Typography className={classes.formHeader}>Enter Details</Typography>
      <div className={classes.formSection}>
        <div className={classes.formItem}>
          <Typography className={classes.formLabel}>Consumer No: </Typography>
          <TextField
            type="text"
            name="field1"
            value={formData.field1}
            onChange={handleChange}
            className={classes.textForm}
            sx={{
              ".MuiInputBase-input": {
                padding: 0.5,
              },
            }}
          />
        </div>
        <div className={classes.formItem}>
          <Typography className={classes.formLabel}>Bill No: </Typography>
          <TextField
            type="text"
            name="field2"
            value={formData.field2}
            onChange={handleChange}
            className={classes.textForm}
            sx={{
              ".MuiInputBase-input": {
                padding: 0.5,
              },
            }}
          />
        </div>
        <div className={classes.formItem}>
          <Typography className={classes.formLabel}>
            Connection Type:
          </Typography>
          <Select
            name="connectionType"
            value={formData.connectionType}
            onChange={handleChange}
            className={classes.textForm}
            sx={{
              ".MuiSelect-select": {
                padding: 0.5,
              },
            }}
          >
            <MenuItem value={"LT Connection"}>LT Connection</MenuItem>
            <MenuItem value={"LT Connection 2"}>LT Connection 2</MenuItem>
            <MenuItem value={"HT Connection"}>HT Connection</MenuItem>
            <MenuItem value={"HT Connection 2"}>HT Connection 2</MenuItem>
          </Select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 8,
        }}
      >
        <Button
          onClick={() => {
            setFormData(INITIAL_VALUE);
            onClose();
          }}
          color="secondary"
          variant="text"
        >
          Cancel
        </Button>
        <Button onClick={submitForm} color="primary" variant="outlined">
          Submit
        </Button>
      </div>
    </Box>
  );
};

function CustomTabPanel(props) {
  const { value, onClickButton } = props;

  return (
    <Box flex={1}>
      <Box
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
      >
        <Button color="primary" variant="contained" onClick={onClickButton}>
          New Connection
        </Button>
      </Box>
      <Box>{value.description}</Box>
    </Box>
  );
}

export const ApplyNewConnection = () => {
  const [tab, setTab] = useState(0);
  const [isNewConnectionOpen, setIsNewConnectionOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {TABS.map((val) => {
            return <Tab label={val.label} />;
          })}
        </Tabs>
      </Box>
      <Box
        sx={{ p: 3, height: "100%" }}
        flex={1}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <CustomTabPanel
          value={TABS[tab]}
          onClickButton={() => setIsNewConnectionOpen(true)}
        />
        <Collapse in={isNewConnectionOpen} orientation="horizontal">
          <NewConnectionForm onClose={() => setIsNewConnectionOpen(false)} />
        </Collapse>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles()(() => ({
  base: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  screen: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  header: {
    backgroundColor: "#0096FF",
    padding: "8px 20px",
    borderRadius: "5px",
    color: "#FFFFFF",
    flex: 1,
  },
  subHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  formHeader: {
    color: "#0096FF",
    padding: "4px",
    margin: "0px 8px 20px 8px",
    borderBottom: "1px solid #D3D3D3 ",
  },
  formItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  formLabel: {
    flex: 1,
    textAlign: "end",
  },
  textForm: {
    flex: 2,
  },
  formSection: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginBottom: 20,
  },
}));
