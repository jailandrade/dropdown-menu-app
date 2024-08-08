# Dropdown Menu

This is an app to test the package `@jailandrade/dropdown-menu` which is a simple dropdown menu to display an array of strings and select one.

To use this package you could use the next snippet:

```jsx
import {DropdownMenu} from "@jailandrade/dropdown-menu";

function App() {
  const options = [
    "Victor",
    "Emiliano",
    "Maximiliano",
    "Juan Gabriel",
    "Juan Camaney",
    "Gol D. Roger",
    "Hercules",
  ];
  return (
    <div class="p-8">
      <DropdownMenu legend="Elige un usuario" options={options} match="" />
    </div>
  );
}
```

If you pass a string to the `match` prop, then only that option will be selectable.


## Storybook

You can test this component with Storybook running this command in the terminal

`npm run storybook`

and following the link jso


## Demo

You can see this component live in
