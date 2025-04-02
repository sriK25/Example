import { Box } from "@mui/material";
import "./App.css";
import { ApplyNewConnection } from "./ApplyNewConnection";
import { RegisterMobileNumber } from "./RegisterMobileNumber";

export const App = () => {
  return (
    <Box width="100%" height="100vh">
      {/* <RegisterMobileNumber /> */}
      <ApplyNewConnection />
    </Box>
  );
};
