'use strict';

class EnvReplace {
  constructor(config) {
    // Replace 'plugin' with your plugin's name.
    // Don't include 'brunch' or 'plugin' words in configuration key.
    this.config = config.plugins.envReplace || {};
  }

  // file: File => Promise[File]
  // Transforms a file data to different data. Could change the source map etc.
  // Examples: JSX, CoffeeScript, Handlebars, SASS.
  compile(file) {
    return new Promise((resolve, reject) => {
      Object.entries(process.env).forEach(entry => {
        const [key, value] = entry;
        const marker = `process.env.${key}`;
        file.data = file.data.replace(this.marker, value);
      });
      resolve(file);
    });
  }
}

BrunchPlugin.prototype.brunchPlugin = true;
BrunchPlugin.prototype.type = 'javascript';
BrunchPlugin.prototype.pattern = /\.jsx?$/;

module.exports = EnvReplace;
