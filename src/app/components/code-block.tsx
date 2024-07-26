export default function CodeBlock({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="font-mono my-3 w-full bg-slate-800 text-white p-3">
                {children}
            </div>
        </>
    )
}