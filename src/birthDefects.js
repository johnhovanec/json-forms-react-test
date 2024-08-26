export const coreSchema = {
  type: "object",
  properties: {
    topic: {
      type: "string",
      minLength: 2,
      description: "Please enter the topic name",
    },
    topicTitle: {
      type: "string",
      minLength: 2,
      description: "Please enter the topic title",
    },
    topicPath: {
      type: "string",
      minLength: 1,
      pattern: "^[A-Za-z_-][A-Za-z0-9_-]*$",
      description: "Please enter the topic path with no spaces",
    },
    category: {
      type: "string",
      enum: ["health", "environmental"],
    },
    defaultTabPath: {
      type: "string",
      minLength: 1,
      description: "Please enter the defaultTabPath",
    },
    // nationality: {
    //   type: "string",
    //   enum: ["DE", "IT", "JP", "US", "RU", "Other"],
    // },
  },
};

export const schema = {
  type: "object",
  properties: {
    ...coreSchema.properties,
    personalData: {
      type: "object",
      properties: {
        // age: {
        //   type: "integer",
        //   description: "Please enter your age.",
        // },
        // height: {
        //   type: "number",
        // },
        // drivingSkill: {
        //   type: "number",
        //   maximum: 10,
        //   minimum: 1,
        //   default: 7,
        // },
      },
      required: ["topicPath", "category"],
    },
    themeOverviews: {
      type: "array",
      title: "Theme Overviews",
      items: {
        type: "object",
        properties: {
          theme: {
            type: "string",
          },
          text: {
            type: "string",
          },
        },
      },
    },
    countySuppressionRules: {
      type: "object",
      properties: {
        range: {
          type: "string",
          description: "Please enter the range.",
        },
        populationMin: {
          type: "string",
          description: "Please enter the min population.",
        },
      },
      required: ["topicPath", "category"],
    },
    subCountySuppressionRules: {
      type: "object",
      properties: {
        range: {
          type: "string",
          description: "Please enter the range.",
        },
        populationMin: {
          type: "string",
          description: "Please enter the min population.",
        },
      },
      required: ["topicPath", "category"],
    },
    omitNcdmData: {
      type: "boolean",
    },
    themes: {
      type: "array",
      title: "Themes",
      items: {
        type: "object",
        properties: {
          themeName: {
            type: "string",
          },
          defaultTabPath: {
            type: "string",
          },
          themeTitle: {
            type: "string",
          },
          themePath: {
            type: "string",
          },
          tabs: {
            type: "array",
            title: "Tabs",
            items: {
              type: "object",
              properties: {
                tabPath: {
                  type: "string",
                },
              },
            },
          },
        },
      },
    },
  },
  required: ["category"],
};

export const uischema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/topic",
        },
        {
          type: "Control",
          scope: "#/properties/topicTitle",
        },
        {
          type: "Control",
          scope: "#/properties/topicPath",
        },
      ],
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/category",
        },
        {
          type: "Control",
          scope: "#/properties/defaultTabPath",
        },
      ],
    },
    {
      type: "VerticalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/themeOverviews",
          options: {
            elementLabelProp: "theme",
            detail: {
              type: "VerticalLayout",
              elements: [
                {
                  type: "Control",
                  scope: "#/properties/theme",
                },
                {
                  type: "Control",
                  scope: "#/properties/text",
                },
              ],
            },
          },
        },
      ],
    },
    {
      type: "Label",
      text: "County Suppression Rules",
    },
    {
      type: "VerticalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/countySuppressionRules",
          options: {
            detail: {
              type: "VerticalLayout",
              elements: [
                {
                  type: "Control",
                  scope: "#/properties/range",
                },
                {
                  type: "Control",
                  scope: "#/properties/populationMin",
                },
              ],
            },
          },
        },
      ],
    },
    {
      type: "Label",
      text: "Subcounty Suppression Rules",
    },
    {
      type: "VerticalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/subCountySuppressionRules",
          options: {
            detail: {
              type: "VerticalLayout",
              elements: [
                {
                  type: "Control",
                  scope: "#/properties/range",
                },
                {
                  type: "Control",
                  scope: "#/properties/populationMin",
                },
              ],
            },
          },
        },
      ],
    },
    {
      type: "Label",
      text: "More Additional Information",
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/omitNcdmData",
        },
        // {
        //   type: "Control",
        //   scope: "#/properties/personalData/properties/height",
        // },
        // {
        //   type: "Control",
        //   scope: "#/properties/personalData/properties/age",
        // },
      ],
    },
    {
      type: "VerticalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/themes",
          options: {
            detail: {
              type: "HorizontalLayout",
              elements: [
                {
                  type: "Control",
                  scope: "#/properties/themeName",
                },
                {
                  type: "Control",
                  scope: "#/properties/defaultTabPath",
                },
                {
                  type: "Control",
                  scope: "#/properties/themeTitle",
                },
                {
                  type: "Control",
                  scope: "#/properties/themePath",
                },
              ],
            },
          },
        },
      ],
    },
  ],
};
