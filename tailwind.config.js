
module.exports = {
  theme: {
    extend: {
        scale: {
            '80': '.80',
        }
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'group-hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'group-hover', 'focus'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
  ],
}
