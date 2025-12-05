/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.tsx"], // only email files
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // RECOMMENDED: avoids global resets in emails
  },
};
