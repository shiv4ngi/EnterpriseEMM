import { Button, FormControl } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import "./../Policy/Policy.css";
import SubmitForm from "./SubmitForm";

import {
  getFirestore,
  collection,
  addDoc,
  // getDoc,
  // query,
  // orderBy,
  // limit,
  // onSnapshot,
  // setDoc,
  // updateDoc,
  // doc,
  // serverTimestamp,
} from "firebase/firestore";

function Resource() {
  const [resourcePolicy, setResourcePolicy] = useState({
    policyName: "",
    applications: [
      {
        packageName: "",
        installType: "",
      },
    ],
    maximumTimeToLock: "",
    locationMode: "",
    cameraDisabled: false,
    debuggingFeaturesAllowed: false,
    adjustVolumeDisabled: false,
    factoryResetDisabled: false,
    openNetworkConfiguration: {
      NetworkConfigurations: [
        {
          GUID: "",
          Name: "",
          Type: "WiFi",
          WiFi: {
            SSID: "",
            Security: "None",
            AutoConnect: false,
          },
        },
      ],
    },
    uninstallAppsDisabled: false,
    bluetoothDisabled: false,
    statusReportingSettings: {
      deviceSettingsEnabled: false,
      networkInfoEnabled: false,
    },
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (prop) => (event) => {
    setResourcePolicy({ ...resourcePolicy, [prop]: event.target.value });
  };
  const handleCheck = (prop) => (event) => {
    setResourcePolicy({ ...resourcePolicy, [prop]: event.target.checked });
  };

  const handleChangeApplication = (name, event) => {
    setResourcePolicy((prevState) => ({
      ...prevState,
      applications: prevState.applications.map((item, i) => {
        return { ...item, [name]: event.target.value };
      }),
    }));
  };

  const handleNetworkChange = (name, event) => {
    setResourcePolicy((prevState) => ({
      ...prevState,
      openNetworkConfiguration: {
        ...prevState.openNetworkConfiguration,
        NetworkConfigurations:
          prevState.openNetworkConfiguration.NetworkConfigurations.map(
            (item, i) => {
              return { ...item, [name]: event.target.value };
            }
          ),
      },
    }));
  };

  const handleNetworkChangeWifi = (name, event) => {
    setResourcePolicy((prevState) => ({
      ...prevState,
      openNetworkConfiguration: {
        ...prevState.openNetworkConfiguration,
        NetworkConfigurations:
          prevState.openNetworkConfiguration.NetworkConfigurations.map(
            (item) => ({
              ...item,
              WiFi: { ...item.WiFi, [name]: event.target.value },
            })
          ),
      },
    }));
  };

  const handleNetworkChangeWifiRadio = (name, event) => {
    setResourcePolicy((prevState) => ({
      ...prevState,
      openNetworkConfiguration: {
        ...prevState.openNetworkConfiguration,
        NetworkConfigurations:
          prevState.openNetworkConfiguration.NetworkConfigurations.map(
            (item) => ({
              ...item,
              WiFi: { ...item.WiFi, [name]: event.target.checked },
            })
          ),
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(resourcePolicy);
    try {
      addDoc(collection(getFirestore(), "policies"), resourcePolicy);
    } catch (error) {
      console.error("Error writing new message to Firebase Database", error);
    }
    handleShow();
    setResourcePolicy({
      policyName: "",
      applications: [
        {
          packageName: "",
          installType: "",
        },
      ],
      maximumTimeToLock: "",
      locationMode: "",
      cameraDisabled: false,
      debuggingFeaturesAllowed: false,
      adjustVolumeDisabled: false,
      factoryResetDisabled: false,
      openNetworkConfiguration: {
        NetworkConfigurations: [
          {
            GUID: "",
            Name: "",
            Type: "WiFi",
            WiFi: {
              SSID: "",
              Security: "None",
              AutoConnect: false,
            },
          },
        ],
      },
      uninstallAppsDisabled: false,
      bluetoothDisabled: false,
      statusReportingSettings: {
        deviceSettingsEnabled: false,
        networkInfoEnabled: false,
      },
    });
  };

  // const getPolicies = () => {
  //   const docRef = getDoc(getFirestore(), "policies");
  //   if (docRef.exists()) {
  //     console.log("Document data:", docRef.data());
  //   } else {
  //     console.log("No such document!");
  //   }
  // };

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
          <h1 className="heading pallette">Resource Policy</h1>

          <FormControl className="resource_form">
            <TextField
              className="input_text"
              id="standard-basic"
              label="Policy Name"
              variant="standard"
              onChange={handleChange("policyName")}
              value={resourcePolicy.policyName}
              required
            />
            <h5 className="py-3">Application Policy</h5>

            <TextField
              className="input_text"
              id="standard-basic"
              label="Package Name"
              variant="standard"
              onChange={(e) => handleChangeApplication("packageName", e)}
              value={resourcePolicy.applications[0].packageName}
            />
            <FormControl>
              <InputLabel id="demo-simple-select-label">
                Install Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Install Type"
                value={resourcePolicy.applications[0].installType}
                defaultValue=""
                onChange={(e) => handleChangeApplication("installType", e)}
              >
                <MenuItem value="INSTALL_TYPE_UNSPECIFIED">
                  INSTALL_TYPE_UNSPECIFIED
                </MenuItem>
                <MenuItem value="PREINSTALLED">PREINSTALLED</MenuItem>
                <MenuItem value="FORCE_INSTALLED">FORCE_INSTALLED</MenuItem>
                <MenuItem value="BLOCKED">BLOCKED</MenuItem>
                <MenuItem value="AVAILABLE">AVAILABLE</MenuItem>
                <MenuItem value="REQUIRED_FOR_SETUP">
                  REQUIRED_FOR_SETUP
                </MenuItem>
                <MenuItem value="KIOSK">KIOSK</MenuItem>
              </Select>
            </FormControl>
            <h5 className="py-3">Open Network Configuration</h5>
            <TextField
              className="input_text"
              id="standard-basic"
              label="GUID"
              variant="standard"
              onChange={(e) => handleNetworkChange("GUID", e)}
              value={
                resourcePolicy.openNetworkConfiguration.NetworkConfigurations[0]
                  .GUID
              }
            />
            <TextField
              className="input_text"
              id="standard-basic"
              label="Name"
              variant="standard"
              onChange={(e) => handleNetworkChange("Name", e)}
              value={
                resourcePolicy.openNetworkConfiguration.NetworkConfigurations[0]
                  .Name
              }
            />
            <TextField
              className="input_text"
              id="standard-basic"
              label="Wifi SSID"
              variant="standard"
              onChange={(e) => handleNetworkChangeWifi("SSID", e)}
              value={
                resourcePolicy.openNetworkConfiguration.NetworkConfigurations[0]
                  .WiFi.SSID
              }
            />
            <FormControl>
              <InputLabel id="demo-simple-select-label">Security</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Security"
                defaultValue=""
                onChange={(e) => handleNetworkChangeWifi("Security", e)}
                value={
                  resourcePolicy.openNetworkConfiguration
                    .NetworkConfigurations[0].WiFi.Security
                }
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
            </FormControl>
            <FormControlLabel
              control={<Checkbox />}
              label="Autoconnect"
              onChange={(e) => handleNetworkChangeWifiRadio("AutoConnect", e)}
              checked={
                resourcePolicy.openNetworkConfiguration.NetworkConfigurations[0]
                  .WiFi.AutoConnect
              }
            />
            <TextField
              className="input_text"
              id="standard-basic"
              label="Maximum time to lock"
              variant="standard"
              onChange={handleChange("maximumTimeToLock")}
              value={resourcePolicy.maximumTimeToLock}
            />
            <FormControl>
              <InputLabel id="demo-simple-select-label">
                Location Mode
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Location Mode"
                defaultValue=""
                onChange={handleChange("locationMode")}
                value={resourcePolicy.locationMode}
              >
                <MenuItem value="LOCATION_MODE_UNSPECIFIED">
                  LOCATION_MODE_UNSPECIFIED
                </MenuItem>
                <MenuItem value="HIGH_ACCURACY">HIGH_ACCURACY</MenuItem>
                <MenuItem value="SENSORS_ONLY">SENSORS_ONLY</MenuItem>
                <MenuItem value="BATTERY_SAVING">BATTERY_SAVING</MenuItem>
                <MenuItem value="OFF">OFF</MenuItem>
                <MenuItem value="LOCATION_USER_CHOICE">
                  LOCATION_USER_CHOICE
                </MenuItem>
                <MenuItem value="LOCATION_ENFORCED">LOCATION_ENFORCED</MenuItem>
                <MenuItem value="LOCATION_DISABLED">LOCATION_DISABLED</MenuItem>
              </Select>
            </FormControl>

            <FormControlLabel
              control={<Checkbox />}
              label="Adjust Volume"
              onChange={handleCheck("adjustVolumeDisabled")}
              checked={resourcePolicy.adjustVolumeDisabled}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Factory Reset"
              onChange={handleCheck("factoryResetDisabled")}
              checked={resourcePolicy.factoryResetDisabled}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Uninstall Disabled"
              onChange={handleCheck("uninstallAppsDisabled")}
              checked={resourcePolicy.uninstallAppsDisabled}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Bluetooth Disabled"
              onChange={handleCheck("bluetoothDisabled")}
              checked={resourcePolicy.bluetoothDisabled}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Device Settings Enable"
              checked={
                resourcePolicy.statusReportingSettings.deviceSettingsEnabled
              }
              onChange={(e) =>
                setResourcePolicy((prevState) => ({
                  ...prevState,
                  statusReportingSettings: {
                    ...prevState.statusReportingSettings,
                    deviceSettingsEnabled: e.target.checked,
                  },
                }))
              }
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Network Info Enable"
              checked={
                resourcePolicy.statusReportingSettings.networkInfoEnabled
              }
              onChange={(e) =>
                setResourcePolicy((prevState) => ({
                  ...prevState,
                  statusReportingSettings: {
                    ...prevState.statusReportingSettings,
                    networkInfoEnabled: e.target.checked,
                  },
                }))
              }
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Camera Disabled"
              onChange={handleCheck("cameraDisabled")}
              checked={resourcePolicy.cameraDisabled}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Debugging Features Allowed"
              onChange={handleCheck("debuggingFeaturesAllowed")}
              checked={resourcePolicy.debuggingFeaturesAllowed}
            />
            <Button
              className="submitBtn"
              variant="contained"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <SubmitForm
              show={show}
              handleClose={handleClose}
              policy={resourcePolicy}
            />
          </FormControl>
        </Box>
      </Container>
    </>
  );
}

export default Resource;
