module.exports = {
    "source": ["./token.json"],
    "platforms": {
      "scss": {
        "transformGroup": "scss",
        "prefix": "ins",
        "buildPath": "./",
        "files": [
          {
            destination: "_colors.scss",
            format: "scss/variables",
            filter: {
              type: "color",
            },
          },
        ],
        "actions": ["copy_assets"]
      }
    }
  }