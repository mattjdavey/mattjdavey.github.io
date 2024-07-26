import CodeBlock from "@/app/components/code-block";

export default function AddTailwindToBlazorApp() {
    return (
        <>
            <h1 className="text-2xl">How to add Tailwind to a Blazor application</h1>
            <hr />
            <div className="space-y-4">
                <p>Within your Blazor project, run the command <CodeBlock>npx tailwindcss init</CodeBlock></p>
                <p>This generates a <CodeBlock>tailwind.config.js</CodeBlock> file. Within that file update <CodeBlock>context</CodeBlock> to <CodeBlock>content: ['./**/*.&#123;razor,html&#125;']</CodeBlock> to look for razor files in the project.</p>
                <p>
                    Create a <code>tailwind.css</code> file in the root of the project and add the following lines:
                    <br />
                    <CodeBlock>
                        @tailwind base;<br />
                        @tailwind components;<br />
                        @tailwind utilities;<br />
                    </CodeBlock>
                </p>
                <p>Run the command <CodeBlock>npx tailwindcss -i tailwind.css -o wwwroot/app.css</CodeBlock> (you can name the css files whatever you want).</p>
                <p>
                    Finally in <CodeBlock>App.razor</CodeBlock> add the following line
                    <br />
                    <CodeBlock>
                        &lt;link rel="stylesheet" href="app.css" /&gt;
                    </CodeBlock>
                </p>
            </div>
        </>
    )
}