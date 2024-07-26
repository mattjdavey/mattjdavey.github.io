import CodeBlock from "@/app/components/code-block";

export default function AddTailwindToBlazorApp() {
    return (
        <>
            <h1 className="text-2xl">How to add Tailwind to a Blazor application</h1>
            <hr className="mb-3" />
            <div className="space-y-4">
                <p>Within your Blazor project, run the command <code>npx tailwindcss init</code></p>
                <p>This generates a <code>tailwind.config.js</code> file. Within that file update <code>content</code> to <code>content: ['./**/*.&#123;razor,html&#125;']</code> to look for razor files in the project.</p>
                <p>
                    Create a <code>tailwind.css</code> file in the root of the project and add the following lines:
                    <br />
                    <CodeBlock>
                        @tailwind base;<br />
                        @tailwind components;<br />
                        @tailwind utilities;<br />
                    </CodeBlock>
                </p>
                <p>Run the command <code>npx tailwindcss -i tailwind.css -o wwwroot/app.css</code> (you can name the css files whatever you want).</p>
                <p>
                    Finally in <code>App.razor</code> add the following line
                    <br />
                    <CodeBlock>
                        &lt;link rel="stylesheet" href="app.css" /&gt;
                    </CodeBlock>
                </p>
            </div>
        </>
    )
}