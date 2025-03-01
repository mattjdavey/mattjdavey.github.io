# Running PostgreSQL on Docker locally
```
docker run --name PostgresDb -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -d postgres:latest
```