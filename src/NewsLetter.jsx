import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DownloadIcon from "@mui/icons-material/Download";
import ElectricBoard from "./assets/ElectricBoard.pdf";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const NewsLetterBlock = ({ item }) => {
  const handleDownload = () => {
    const url = ElectricBoard;
    const a = document.createElement("a");
    a.href = url;
    a.download = "ElectricBoard.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  const handleOpen = () => {
    const url = ElectricBoard;
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <Grid
      sx={{
        border: "1px solid #d3d3d3",
        boxShadow: "2px 2px 2px lightblue",
        backgroundColor: "white",
        borderRadius: "4px",
      }}
      size={6}
    >
      <Box sx={{ p: 1 }}>
        <Typography variant="subtitle1">{item.heading}</Typography>
        <Typography variant="body2">{item.description}</Typography>
        <Typography variant="body2">Date: {item.date}</Typography>
      </Box>
      <Box sx={{ backgroundColor: "lightgrey", p: 1 }}>
        <Box
          sx={{
            p: 1,
            border: "1px solid grey",
            backgroundColor: "white",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <InsertDriveFileIcon />
            <Typography variant="caption">Sample PDF DOC</Typography>
          </Box>
          <Box>
            <IconButton
              onClick={handleDownload}
              variant="contained"
              sx={{
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              <DownloadIcon />
            </IconButton>
            <IconButton
              onClick={handleOpen}
              variant="contained"
              sx={{
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              <OpenInNewIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

const NewsLetterItems = [
  {
    heading: "Vol III Issue 8",
    description: "NewsLetterItem 1",
    date: "4/2/2025",
  },
  {
    heading: "Vol III Issue 4",
    description: "NewsLetterItem 2",
    date: "4/1/2025",
  },
  {
    heading: "Vol II Issue 4",
    description: "NewsLetterItem 3",
    date: "3/30/2025",
  },
  {
    heading: "Vol II Issue 3",
    description: "NewsLetterItem 4",
    date: "3/15/2025",
  },
  {
    heading: "Vol II Issue 2",
    description: "NewsLetterItem 5",
    date: "3/3/2025",
  },
  {
    heading: "Vol II Issue 1",
    description: "NewsLetterItem 6",
    date: "2/25/2025",
  },
  {
    heading: "Vol I Issue 4",
    description: "NewsLetterItem 7",
    date: "2/5/2025",
  },
  {
    heading: "Vol I Issue 3",
    description: "NewsLetterItem 8",
    date: "1/15/2025",
  },
  {
    heading: "Vol I Issue 2",
    description: "NewsLetterItem 9",
    date: "12/13/2024",
  },
];

export const NewsLetter = () => {
  return (
    <Box sx={{ backgroundColor: "teal", height: "100%", overflow: "auto" }}>
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h6"
          color="white"
          sx={{
            marginBottom: 4,
            textDecoration: "underline",
            letterSpacing: "2px",
          }}
        >
          NEWSLETTER - THE FACTS
        </Typography>
        <Grid container spacing={2}>
          {NewsLetterItems.map((item) => (
            <NewsLetterBlock item={item} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
