# Building a component button

## button animation:
on hover of whole section, circle bg fills in with secondary color, background grows without changing svg icon and emits a circle

## props for Button component
- `isDark` : Boolean, true === dark button
- `buttonText` : String, will display text if passed this prop

## Component dependencies
- Vuejs
- Tailwind (Default config) with one addition for `scale-80`
    - This is because the `group-hover` on the parent of the arrow SVG in the button component is `scale-125` so to offset this group scaling we need to take  1 / 1.25 which is .8
    - While I added a tailwind config option, the other, more scalable approach would be to use CSS variables
= CSS is vanilla for maximum compatibility

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
