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
  const [resourcePolicy, setResourcePolicy] = useState({
    applications: [
      {
        packageName: "",
        installType: "",
      },
    ],
    maximumTimeToLock: "",
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

  const handleSubmit = () => {
    console.log(resourcePolicy);
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
          <h1 className="heading pallette">Resource Policy</h1>

          <FormControl className="resource_form">
            <FormControl>
              <h5 className="py-3">Application Policy</h5>

              <TextField
                className="input_text"
                id="standard-basic"
                label="Package Name"
                variant="standard"
                onChange={(e) => handleChangeApplication("packageName", e)}
              />
              <label className="py-2 pallette">Install Type</label>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={resourcePolicy.applications.installType}
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
            />
            <TextField
              className="input_text"
              id="standard-basic"
              label="Name"
              variant="standard"
              onChange={(e) => handleNetworkChange("Name", e)}
            />
            <TextField
              className="input_text"
              id="standard-basic"
              label="Wifi SSID"
              variant="standard"
              onChange={(e) => handleNetworkChangeWifi("SSID", e)}
            />
            <label className="py-2 pallette">Security</label>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Security"
              defaultValue=""
              onChange={(e) => handleNetworkChangeWifi("Security", e)}
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
              onChange={(e) => handleNetworkChangeWifiRadio("AutoConnect", e)}
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
