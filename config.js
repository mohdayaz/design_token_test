module.exports = {
    "source": ["./token.json"],
    "platforms": {
      "scss": {
        "transformGroup": "scss",
        "prefix": "",
        "buildPath": "build/",
        "files": [{
          "destination": "_variables.scss",
          "format": "scss/variables"
        }],
        "actions": ["copy_assets"]
      },
    }
  }