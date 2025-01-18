/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  endOfLine: 'lf',
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'none'
}
