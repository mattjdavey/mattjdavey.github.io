export default function Docker() {
    return (
        <>
            <h1 className="text-2xl">Docker</h1>
            <hr />
            <h3 className="py-3">Running PostgreSQL on Docker locally</h3>
            <div className="bg-gray-200 p-3 dark:bg-slate-600">
                <code>
                    docker run --name PostgresDb -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -d postgres:latest
                </code>
            </div>
        </>
    )
}