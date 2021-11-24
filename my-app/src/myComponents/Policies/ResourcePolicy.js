import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
// import { useState } from "react";
import "./Policies.css";
import Form from "@rjsf/core";

function ResourcePolicy() {
  const schema = {
    title: "Resource Policy",
    type: "object",
    properties: {
      name: {
        type: "string",
        title: "Name",
      },
      version: {
        type: "string",
        title: "Version",
      },
      maximumTimeToLock: {
        type: "string",
        title: "Maximum Time To Lock",
      },
      screenCaptureDisabled: {
        type: "boolean",
        title: "Screen Capture Disabled",
      },
      cameraDisabled: {
        type: "boolean",
        title: "Camera Disabled",
      },
      keyguardDisabledFeatures: {
        type: "array",
        title: "Keyguard Disabled Features",
        items: {
          type: "string",
          enum: [
            "KEYGUARD_DISABLED_FEATURE_UNSPECIFIED",
            "CAMERA",
            "NOTIFICATIONS",
            "UNREDACTED_NOTIFICATIONS",
            "TRUST_AGENTS",
            "DISABLE_FINGERPRINT",
            "DISABLE_REMOTE_INPUT",
            "FACE",
            "IRIS",
            "BIOMETRICS",
            "ALL_FEATURES",
          ],
        },
        uniqueItems: true,
      },
      defaultPermissionPolicy: {
        type: "string",
        title: "Default Permission Policy",
        enum: ["PERMISSION_POLICY_UNSPECIFIED", "PROMPT", "GRANT", "DENY"],
      },
      persistentPreferredActivities: {
        type: "object",
        title: "Persistent Preferred Activities",
        properties: {
          receiverActivity: {
            type: "string",
            title: "Receiver Activity",
          },
          actions: {
            type: "array",
            title: "Actions",
            items: {
              type: "string",
            },
          },
          categories: {
            type: "array",
            title: "Categories",
            items: {
              type: "string",
            },
          },
        },
      },
      //   openNetworkConfiguration : {
      //       type: "object"
      //   },
      systemUpdate: {
        type: "object",
        title: "System Update",
        properties: {
          type: {
            type: "string",
            title: "Type",
            enum: [
              "SYSTEM_UPDATE_TYPE_UNSPECIFIED",
              "AUTOMATIC",
              "WINDOWED",
              "POSTPONE",
            ],
          },
          startMinutes: {
            type: "integer",
            title: "Start Minutes",
          },
          endMinutes: {
            type: "integer",
            title: "End Minutes",
          },
          freezePeriods: {
            type: "array",
            title: "Freeze Periods",
            items: {
              startDate: {
                type: "object",
                title: "Start Date",
                properties: {
                  date: {
                    type: "string",
                    format: "date",
                  },
                },
              },
              endDate: {
                type: "string",
                format: "date",
              },
            },
          },
        },
      },
      accountTypesWithManagementDisabled: {
        type: "array",
        title: "Account Types With Management Disabled",
        items: {
          type: "string",
        },
      },
      addUserDisabled: {
        type: "boolean",
        title: "Add User Disabled",
      },
      adjustVolumeDisabled: {
        type: "boolean",
        title: "Adjust Volume Disabled",
      },
      factoryResetDisabled: {
        type: "boolean",
        title: "Factory Reset Disabled",
      },
      installAppsDisabled: {
        type: "boolean",
        title: "Install Apps Disabled",
      },
      mountPhysicalMediaDisabled: {
        type: "boolean",
        title: "Mount Physical Media Disabled",
      },
      modifyAccountsDisabled: {
        type: "boolean",
        title: "Modify Accounts Disabled",
      },
      safeBootDisabled: {
        type: "boolean",
        title: "Safe Boot Disabled",
      },
      uninstallAppsDisabled: {
        type: "boolean",
        title: "Uninstall Apps Disabled",
      },
      statusBarDisabled: {
        type: "boolean",
        title: "StatusBar Disabled",
      },
      keyguardDisabled: {
        type: "boolean",
        title: "keyguard Disabled",
      },
      minimumApiLevel: {
        type: "number",
        title: "Minimum API Level",
      },
      statusReportingSettings: {
        type: "object",
        title: "Status Reporting Settings",
        properties: {
          applicationReportsEnabled: {
            type: "boolean",
            title: "Application Reports Enabled",
          },
          deviceSettingsEnabled: {
            type: "boolean",
            title: "Device Settings Enabled",
          },
          softwareInfoEnabled: {
            type: "boolean",
            title: "Software Info Enabled",
          },
          memoryInfoEnabled: { type: "boolean", title: "Memory Info Enabled" },
          networkInfoEnabled: {
            type: "boolean",
            title: "Network Info Enabled",
          },
          displayInfoEnabled: {
            type: "boolean",
            title: "Display Info Enabled",
          },
          powerManagementEventsEnabled: {
            type: "boolean",
            title: "Power Management Events Enabled",
          },
          hardwareStatusEnabled: {
            type: "boolean",
            title: "Hardware Status Enabled",
          },
          systemPropertiesEnabled: {
            type: "boolean",
            title: "System Properties Enabled",
          },
          // applicationReportingSettings: {

          // },
          commonCriteriaModeEnabled: {
            type: "boolean",
            title: "Common Criteria Mode Enabled",
          },
        },
      },
      bluetoothContactSharingDisabled: {
        type: "boolean",
        title: "Bluetooth Contact Sharing Disabled",
      },
      //   shortSupportMessage: {

      //   },
      // "longSupportMessage": {
      //     object (UserFacingMessage)
      //   },
      //   "passwordRequirements": {
      //     object (PasswordRequirements)
      //   },
      wifiConfigsLockdownEnabled: {
        type: "boolean",
        title: "Wifi Configs Lockdown Enabled",
      },
      bluetoothConfigDisabled: {
        type: "boolean",
        title: "Bluetooth Config Disabled",
      },
      cellBroadcastsConfigDisabled: {
        type: "boolean",
        title: "Cell Broadcasts Config Disabled",
      },
      credentialsConfigDisabled: {
        type: "boolean",
        title: "Credentials Config Disabled",
      },
      mobileNetworksConfigDisabled: {
        type: "boolean",
        title: "Mobile Networks Config Disabled",
      },
      tetheringConfigDisabled: {
        type: "boolean",
        title: "Tethering Config Disabled",
      },
      vpnConfigDisabled: { type: "boolean", title: "VPN Config Disabled" },
      wifiConfigDisabled: { type: "boolean", title: "Wifi Config Disabled" },
      createWindowsDisabled: {
        type: "boolean",
        title: "Create Windows Disabled",
      },
      networkResetDisabled: {
        type: "boolean",
        title: "Network Reset Disabled",
      },
      outgoingBeamDisabled: {
        type: "boolean",
        title: "Outgoing Beam Disabled",
      },
      outgoingCallsDisabled: {
        type: "boolean",
        title: "Outgoing Calls Disabled",
      },
      removeUserDisabled: { type: "boolean", title: "Remove User Disabled" },
      shareLocationDisabled: {
        type: "boolean",
        title: "Share Location Disabled",
      },
      smsDisabled: { type: "boolean", title: "SMS Disabled" },
      unmuteMicrophoneDisabled: {
        type: "boolean",
        title: "Unmute Microphone Disabled",
      },
      usbFileTransferDisabled: {
        type: "boolean",
        title: "USB File Transfer Disabled",
      },
      ensureVerifyAppsEnabled: {
        type: "boolean",
        title: "Ensure Verify Apps Enabled",
      },
      permittedInputMethods: {
        type: "array",
        title: "Permitted Input Methods",
        items: {
          type: "string",
        },
      },
      stayOnPluggedModes: {
        type: "array",
        title: "Stay On Plugged Modes",
        items: {
          type: "string",
          enum: ["BATTERY_PLUGGED_MODE_UNSPECIFIED", "AC", "USB", "WIRELESS"],
        },
        uniqueItems: true,
      },
    },
  };

  const uiSchema = {
    keyguardDisabledFeatures: {
      "ui:widget": "checkboxes",
    },
    stayOnPluggedModes: {
      "ui:widget": "checkboxes",
    },
  };

  const policySubmitHandler = (e) => {
    // console.log(e);
    console.log(e.formData);
  };

  return (
    <>
      <Container style={{ paddingTop: "8%" }}>
        <Box
          sx={{
            width: "auto",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            // borderRadius: "3%",
          }}
        >
          <Form
            className="resource_policy"
            schema={schema}
            uiSchema={uiSchema}
            onSubmit={policySubmitHandler}
          />
        </Box>
      </Container>
    </>
  );
}

export default ResourcePolicy;
