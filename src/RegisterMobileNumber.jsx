import { useState } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import DescriptionIcon from "@mui/icons-material/description";

export const RegisterMobileNumber = () => {
  const { classes } = useStyles();
  const [formData, setFormData] = useState({
    consumerNo: "",
    billNo: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className={classes.base}>
      <div className={classes.screen}>
        <Typography className={classes.header}>
          Register Mobile Number
        </Typography>
        <div className={classes.subHeader}>
          <DescriptionIcon sx={{ color: "#FFAC1C" }} fontSize="medium" />
          <Typography className={classes.billDetails}>
            Enter Bill Details
          </Typography>
        </div>
        <div className={classes.formSection}>
          <div className={classes.formItem}>
            <Typography className={classes.formLabel}>Consumer No: </Typography>
            <input
              type="text"
              name="consumerNo"
              value={formData.consumerNo}
              onChange={handleChange}
              className={classes.textForm}
            />
          </div>
          <div className={classes.formItem}>
            <Typography className={classes.formLabel}>Bill No: </Typography>
            <input
              type="text"
              name="billNo"
              value={formData.billNo}
              onChange={handleChange}
              className={classes.textForm}
            />
          </div>
        </div>
      </div>
    </div>
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
  billDetails: {
    color: "#0096FF",
    flex: 1,
    marginLeft: "4px",
    borderBottom: "1px solid #D3D3D3 ",
  },
  formItem: {
    display: "flex",
    flexDirection: "row",
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
    width: "50%",
  },
}));
