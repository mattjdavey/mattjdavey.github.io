export default function CodeBlock({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <code className="bg-slate-800 text-white p-3">
                {children}
            </code>
        </>
    )
}