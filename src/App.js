import React, { useEffect, useState } from "react";
import TwitterAuth from "./components/Login/Login";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import Button from "@mui/material/Button";

import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [followsNASA, setFollowsNASA] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const tokenSecret = urlParams.get("tokenSecret");
    const followsNASA = urlParams.get("followsNASA") === "true";

    if (token && tokenSecret) {
      setLoggedIn(true);
      setUserData({ token, tokenSecret });
      setFollowsNASA(followsNASA);
    }
  }, []);

  const handleFollow = () => {
    // Logic to follow NASA
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      {loggedIn ? (
        <>
          <Card>
            <CardContent>
              <Box>
                <Typography variant="h5" component="div">
                  Welcome,
                </Typography>
                <Typography variant="subtitle1" component="div">
                  {userData.token}
                </Typography>
              </Box>
              <Box textAlign={"center"}>
                {followsNASA ? (
                  <Box marginY={"100px"}>
                    <CheckCircleIcon color="success" style={{ fontSize: 40 }} />
                    <Typography color="text.secondary">
                      You are following NASA.
                    </Typography>
                  </Box>
                ) : (
                  <Box marginY={"20px"}>
                    <ErrorIcon
                      color="error"
                      style={{ fontSize: 40, marginBottom: 10 }}
                    />
                    <Typography marginBottom={"20px"} color="text.secondary">
                      You are not following NASA.
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleFollow}
                    >
                      Follow NASA
                    </Button>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Card>
        </>
      ) : (
        <TwitterAuth onLoggedIn={setLoggedIn} />
      )}
    </div>
  );
};

export default App;
