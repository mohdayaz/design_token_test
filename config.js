module.exports = {
    "source": ["./token.json"],
    "platforms": {
      "scss": {
        "transformGroup": "scss",
        "prefix": "ins",
        "buildPath": "build/assets/",
        "files": [{
          "destination": "token.scss",
          "format": "scss/variables"
        }],
        "actions": ["copy_assets"]
      }
    }
  }