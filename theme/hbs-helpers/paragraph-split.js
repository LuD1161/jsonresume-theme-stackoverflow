const { SafeString } = require('handlebars');
const markdown = require('markdown-it')();

const paragraphSplit = (text) => {
  if (text != null) {
    // markdown.render already wraps content in <p> tags, so we don't need to split and wrap again
    text = markdown.render(text);
  }

  return new SafeString(text);
};

module.exports = { paragraphSplit };
