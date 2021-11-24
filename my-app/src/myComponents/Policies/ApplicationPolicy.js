import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
// import { useState } from "react";
import "./Policies.css";
import Form from "@rjsf/core";

function ApplicationPolicy() {
  const schema = {
    title: "Application Policy",
    type: "object",
    properties: {
      packageName: {
        type: "string",
        title: "Package name",
      },
      installType: {
        type: "string",
        title: "Install Type",
        enum: [
          "INSTALL_TYPE_UNSPECIFIED",
          "PREINSTALLED",
          "FORCE_INSTALLED",
          "BLOCKED",
          "AVAILABLE",
          "REQUIRED_FOR_SETUP",
          "KIOSK",
        ],
      },
      lockTaskAllowed: {
        // DEPRECATED
        type: "boolean",
        title: "Lock task Allowed",
      },
      defaultPermissionPolicy: {
        type: "string",
        title: "Default Permission Policy",
      },
      permissionGrants: {
        type: "object",
        title: "Permission Grants",
        properties: {
          permission: {
            type: "string",
            title: "Permission",
          },
          policy: {
            type: "string",
            title: "Policy",
            enum: ["PERMISSION_POLICY_UNSPECIFIED", "PROMPT", "GRANT", "DENY"],
          },
        },
      },
      // managedConfiguration: {
      //   object
      // },
      disabled: {
        type: "boolean",
        title: "App Disable",
      },
      minimumVersionCode: {
        type: "number",
        title: "Minimum Version Code",
      },
      delegatedScopes: {
        type: "string",
        title: "Delegated Scopes",
        enum: [
          "DELEGATED_SCOPE_UNSPECIFIED",
          "CERT_INSTALL",
          "MANAGED_CONFIGURATIONS",
          "BLOCK_UNINSTALL",
          "PERMISSION_GRANT",
          "PACKAGE_ACCESS",
          "ENABLE_SYSTEM_APP",
        ],
      },
      // managedConfigurationTemplate: {},
      accessibleTrackIds: {
        type: "array",
        title: "Accessible Track Ids",
        items: {
          type: "string",
        },
      },
      connectedWorkAndPersonalApp: {
        type: "string",
        title: "Connected Work And Personal App",
        enum: [
          "CONNECTED_WORK_AND_PERSONAL_APP_UNSPECIFIED",
          "CONNECTED_WORK_AND_PERSONAL_APP_DISALLOWED",
          "CONNECTED_WORK_AND_PERSONAL_APP_ALLOWED",
        ],
      },
      autoUpdateMode: {
        type: "string",
        title: "Auto Update Mode",
        enum: [
          "AUTO_UPDATE_MODE_UNSPECIFIED",
          "AUTO_UPDATE_DEFAULT",
          "AUTO_UPDATE_POSTPONED",
          "AUTO_UPDATE_HIGH_PRIORITY",
        ],
      },
      // extensionConfig: {
      //   type: "object",
      //   title: "Extension Config",
      // }
    },
  };

  const uiSchema = {
    packageName: {
      "ui:help": "*Package name of the app",
    },
    installType: {
      "ui:help": "*Type of installation to perform.",
    },
    lockTaskAllowed: {
      "ui:help":
        "*Whether the app is allowed to lock itself in full-screen mode.",
    },
    disabled: {
      "ui:help":
        "*Whether the app is disabled. When disabled, the app data is still preserved.",
    },
    minimumVersionCode: {
      "ui:help":
        "*The minimum version of the app that runs on the device. If set, the device attempts to update the app to at least this version code.",
    },
    delegatedScopes: {
      "ui:placeholder": "Choose one",
      "ui:help": "*The scopes delegated to the app from Android Device Policy.",
    },
    permissionGrants: {
      policy: {
        "ui:placeholder": "Choose one",
      },
      "ui:help": "*Explicit permission grants or denials for the app.",
    },
  };

  // const [applicationPolicy, setApplicationPolicy] = useState({
  //   packageName: "",
  //   installType: "",
  //   lockTaskAllowed: null,
  //   defaultPermissionPolicy: "",
  //   permissionGrants: [
  //     {
  //       permission: "",
  //       policy: {},
  //     },
  //   ],
  //   // managedConfiguration: {},
  //   disabled: null,
  //   minimumVersionCode: null, //integer
  //   delegatedScopes: [],
  //   // managedConfigurationTemplate: {
  //   //     templateId: "",
  //   //     configurationVariables: {}

  //   // },
  //   accessibleTrackIds: [],
  //   connectedWorkAndPersonalApp: "",
  //   autoUpdateMode: "",
  //   // extensionConfig: {},
  // });

  const policySubmitHandler = (e) => {
    // console.log(e);
    console.log(e.formData);
  };

  return (
    <>
      <Container maxWidth="sm" style={{ paddingTop: "8%" }}>
        <Box
          sx={{
            width: "auto",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "3%",
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

export default ApplicationPolicy;
