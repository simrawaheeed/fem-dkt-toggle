# Functional Requirements and Notes

Light/Dark Mode toggle -- takes system pref by default, but can override with toggle

- What HTML markup to use (accessible) -- https://scottaohara.github.io/a11y_styled_form_controls/src/radio-button--switch/

- Use fieldset, legend, radio inputs

- Switching between light/dark mode via JS and Prefers-color-scheme media query -- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme

- Three options toggle: light/dark/system pref -- https://codepen.io/renddrew/pen/bRomab?editors=1100

CSS Variables(custom properties) -- https://css-tricks.com/updating-a-css-variable-with-javascript/

Accessibility
- Use correct heading tags
- Screenreader-only text for card titles/username -- https://www.accessibility-developer-guide.com/examples/hiding-elements/visually/


utils - add things like variables, functions, mixins, scss mixins etc
1.  breakpoints - add mixins, lat use (faster way to load your media queries)
mixins usually load the reusable code that you want to use multiple times in the code base

# How to come up with Class Names
BEM = Block Element Modifier
Block = Card (parent element)
Element = icon, platform, account, change (child elements)
Modifier = fb etc (style or design for parent or child)
For naming - first write the parent then child : e.g, card__icon, card__icon--facebook