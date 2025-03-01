# How to add Tailwind to a Blazor application
Within your Blazor project, run the command `npx tailwindcss init`

This generates a `tailwind.config.js` file. After the file is generated update the content property to look for razor 
files in the project.
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.{razor,html}'], // add this line
    darkMode: 'class',
    theme: {},
    plugins: [],
}
```

Create a tailwind.css file in the root of the project and add the following lines:
``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Run the command `npx tailwindcss -i tailwind.css -o wwwroot/app.css` (you can name the css files whatever you want).

Finally in App.razor add the following line
``` html
<link rel="stylesheet" href="app.css" />
```

