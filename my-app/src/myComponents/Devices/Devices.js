import { useState } from "react";
import { Button, FormControl } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./../Policy/Policy.css";

function Devices() {
  const [device, setDevice] = useState({
    name: "",
    userName: "",
    managementMode: "",
    state: "",
    appliedState: "",
    policyCompliant: false,
    policyName: "",
    appliedPolicyName: "",
    appliedPolicyVersion: "",
    // apiLevel: null,
    // softwareInfo: {
    //   androidVersion: "",
    //   androidDevicePolicyVersionCode: null,
    //   androidDevicePolicyVersionName: "",
    //   androidBuildNumber: "",
    //   deviceKernelVersion: "",
    //   bootloaderVersion: "",
    //   androidBuildTime: "",
    //   securityPatchLevel: "",
    //   primaryLanguageCode: "",
    //   deviceBuildSignature: "",
    //   systemUpdateInfo: {
    //     updateStatus: "",
    //     updateReceivedTime: "",
    //   },
    // },






  //   applicationReports: [
  //     {
  //       packageName: "",
  //       versionName: "",
  //       versionCode: null,
  //       displayName: "",
  //       applicationSource: "",
  //       state: "",
  //     },
  //   ],

  //   networkInfo: {
  //     imei: "",
  //     wifiMacAddress: "",
  //   },
  //   memoryInfo: {
  //     totalRam: "",
  //     totalInternalStorage: "",
  //   },
  //   memoryEvents: [
  //     {
  //       eventType: "",
  //       // "createTime": "",
  //       byteCount: "",
  //     },
  //   ],
  //   powerManagementEvents: [
  //     {
  //       eventType: "",
  //       // "createTime": string,
  //       batteryLevel: null,
  //     },
  //   ],

  //   deviceSettings: {
  //     isDeviceSecure: false,
  //     unknownSourcesEnabled: false,
  //     developmentSettingsEnabled: false,
  //     adbEnabled: false,
  //     isEncrypted: false,
  //     verifyAppsEnabled: false,
  //   },

  //   ownership: "",
  }
  );

  const handleChange = (prop) => (event) => {
    setDevice({ ...device, [prop]: event.target.value });
  };
  const handleCheck = (prop) => (event) => {
    setDevice({ ...device, [prop]: event.target.checked });
  };
  const handleSubmit = () => {
    console.log(device);
  };

  return (
    <>
      <Container
        maxWidth="md"
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
          <h1 className="heading pallette">Devices</h1>

          <FormControl className="resource_form">
            <TextField
              className="input_text"
              id="standard-basic"
              label="Device Name"
              variant="standard"
              onChange={(e) => handleChange("name", e)}
            />
            <TextField
              className="input_text"
              id="standard-basic"
              label="User Name"
              variant="standard"
              onChange={(e) => handleChange("userName", e)}
            />
            <FormControl>
              <InputLabel id="demo-simple-select-label">
                Management Mode
              </InputLabel>

              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={device.managementMode}
                defaultValue=""
                onChange={(e) => handleChange("managementMode", e)}
              >
                <MenuItem value="MANAGEMENT_MODE_UNSPECIFIED">
                  MANAGEMENT_MODE_UNSPECIFIED
                </MenuItem>
                <MenuItem value="DEVICE_OWNER">DEVICE_OWNER</MenuItem>
                <MenuItem value="PROFILE_OWNER">PROFILE_OWNER</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="demo-simple-select-label">
                Applied Device State
              </InputLabel>

              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={device.appliedState}
                defaultValue=""
                onChange={(e) => handleChange("appliedState", e)}
              >
                <MenuItem value="DEVICE_STATE_UNSPECIFIED">
                  DEVICE_STATE_UNSPECIFIED
                </MenuItem>
                <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                <MenuItem value="DISABLED">DISABLED</MenuItem>
                <MenuItem value="DELETED">DELETED</MenuItem>
                <MenuItem value="PROVISIONING">PROVISIONING</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              control={<Checkbox />}
              label="Policy Compliant"
              onChange={handleCheck("policyCompliant")}
              value={device.policyCompliant}
            />
            <TextField
              className="input_text"
              id="standard-basic"
              label="Policy Name"
              variant="standard"
              onChange={(e) => handleChange("policyName", e)}
            />
            <TextField
              className="input_text"
              id="standard-basic"
              label="Policy currently applied"
              variant="standard"
              onChange={(e) => handleChange("appliedPolicyName", e)}
            />
            <TextField
              className="input_text"
              id="standard-basic"
              label="Policy version currently applied"
              variant="standard"
              onChange={(e) => handleChange("appliedPolicyVersion", e)}
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

export default Devices;
