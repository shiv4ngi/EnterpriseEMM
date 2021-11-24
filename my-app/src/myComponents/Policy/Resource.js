import { Button, FormControl } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import "./../Policy/Policy.css";

function Resource() {
  const [applicationPolicy, setApplicationPolicy] = useState({
    packageName: "",
    installType: "",
  });

  const [NetworkConfigurations, setNetworkConfigurations] = useState({
    GUID: "",
    Name: "",
    Type: "WiFi",
    WiFi: {
      SSID: "",
      Security: "None",
      AutoConnect: false,
    },
  });

  const [statusReport, setStatusReport] = useState({
    deviceSettingsEnabled: false,
    networkInfoEnabled: false,
  });

  const [resourcePolicy, setResourcePolicy] = useState({
    applications: [
      applicationPolicy,
      // {
      //   packageName: applicationPolicy.packageName,
      //   installType: applicationPolicy.installType,
      // },
    ],
    maximumTimeToLock: "",
    cameraDisabled: false,
    debuggingFeaturesAllowed: false,
    adjustVolumeDisabled: false,
    factoryResetDisabled: false,
    openNetworkConfiguration: { NetworkConfigurations },
    uninstallAppsDisabled: false,
    bluetoothDisabled: false,
    statusReportingSettings: {
      deviceSettingsEnabled: statusReport.deviceSettingsEnabled,
      networkInfoEnabled: statusReport.networkInfoEnabled,
    },
  });

  const handleChangeStatus = (prop) => (event) => {
    setStatusReport({ ...statusReport, [prop]: event.target.checked });
  };

  const handleChange = (prop) => (event) => {
    setResourcePolicy({ ...resourcePolicy, [prop]: event.target.value });
  };
  const handleCheck = (prop) => (event) => {
    setResourcePolicy({ ...resourcePolicy, [prop]: event.target.checked });
  };

  const handleChangeApplication = (e, prop) => {
    setApplicationPolicy((prevtSate) => ({
      ...prevtSate,
      [prop]: e.target.value,
    }));
  };

  const handleNetworkChange = (e, networkKey) => {
    setNetworkConfigurations((prevtSate) => ({
      ...prevtSate,
      [networkKey]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log(applicationPolicy);
    console.log(statusReport);
    console.log(resourcePolicy);
  };

  return (
    <>
      <Container
        maxWidth="sm"
        style={{ paddingTop: "8%", paddingBottom: "8%" }}
      >
        <Box
          sx={{
            width: "auto",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "3%",
            padding: "4%",
          }}
        >
          <h1 className="heading">Resource Policy</h1>
          <FormControl className="resource_form">
            <h5>Application Policy</h5>
            <TextField
              className="input_text"
              id="standard-basic"
              label="Package Name"
              variant="standard"
              onChange={(e) => handleChangeApplication(e, "packageName")}
            />

            <TextField
              className="input_text"
              id="standard-basic"
              label="Install Type"
              variant="standard"
              onChange={(e) => handleChangeApplication(e, "installType")}
            />

            <h5>Open Network Configuration</h5>
            <TextField
              className="input_text"
              id="standard-basic"
              label="GUID"
              variant="standard"
              onChange={(e) => handleNetworkChange(e, "GUID")}
            />
            <TextField
              className="input_text"
              id="standard-basic"
              label="Name"
              variant="standard"
              onChange={(e) => handleNetworkChange(e, "Name")}
            />
            <TextField
              className="input_text"
              id="standard-basic"
              label="Type"
              variant="standard"
              onChange={(e) => handleNetworkChange(e, "Type")}
              className="input_text"
              id="standard-basic"
              label="Wifi SSID"
              variant="standard"
              onChange={(e) => handleNetworkChange(e, "SSID")}
            />

            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Security"
              onChange={(e) => handleNetworkChange(e, "Security")}
              // value={networkConfig[0].WiFi.Security}
            >
              <MenuItem value="None">None</MenuItem>
              <MenuItem value="WEP-PSK">WEP-PSK</MenuItem>
              <MenuItem value="WPA-PSK">WPA-PSK</MenuItem>
              <MenuItem value="WPA-EAP">WPA-EAP</MenuItem>
              <MenuItem value="WPA2-PSK">WPA2-PSK</MenuItem>
              <MenuItem value="WPA2-Enterprise">WPA2-Enterprise</MenuItem>
              <MenuItem value="WPA3-PSK">WPA3-PSK</MenuItem>
              <MenuItem value="WPA3-Enterprise">WPA3-Enterprise</MenuItem>
            </Select>
            <FormControlLabel
              control={<Checkbox />}
              label="Autoconnect"
              onChange={(e) => handleNetworkChange(e, "Autoconnect")}
              // value={networkConfig[0].WiFi.AutoConnect}
            />
            <TextField
              className="input_text"
              id="standard-basic"
              label="Maximum time to lock"
              variant="standard"
              onChange={handleChange("maximumTimeToLock")}
              value={resourcePolicy.maximumTimeToLock}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Adjust Volume"
              onChange={handleCheck("adjustVolumeDisabled")}
              value={resourcePolicy.adjustVolumeDisabled}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Factory Reset"
              onChange={handleCheck("factoryResetDisabled")}
              value={resourcePolicy.factoryResetDisabled}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Uninstall Disabled"
              onChange={handleCheck("uninstallAppsDisabled")}
              value={resourcePolicy.uninstallAppsDisabled}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Bluetooth Disabled"
              onChange={handleCheck("bluetoothDisabled")}
              value={resourcePolicy.bluetoothDisabled}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Device Settings Enable"
              onChange={handleChangeStatus("adjustVolumeDisabled")}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Network Info Enable"
              onChange={handleChangeStatus("adjustVolumeDisabled")}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Camera Disabled"
              onChange={handleCheck("cameraDisabled")}
              value={resourcePolicy.cameraDisabled}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Debugging Features Allowed"
              onChange={handleCheck("debuggingFeaturesAllowed")}
              value={resourcePolicy.debuggingFeaturesAllowed}
            />
            <Button
              className="submitBtn"
              variant="contained"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </FormControl>
        </Box>
      </Container>
    </>
  );
}

export default Resource;
