# Asset Directory
A small full-stack CRUD app built to learn Angular quickly: an Angular
frontend talking to a .NET Web API backed by SQLite via Entity Framework Core.

## Stack
- Angular (standalone components, TypeScript, HttpClient, template-driven forms)
- .NET 8 Web API (REST endpoints, EF Core)
- SQLite (swap the connection string for SQL Server in production)
- xUnit (API), Vitest (Angular)

## Running locally
1. `cd AssetDirectory.Api` then run the project (F5 in Visual Studio, or `dotnet run`) — check the printed port
2. `cd asset-directory-ui && ng serve` — starts the frontend at http://localhost:4200
3. Update `apiUrl` in `asset.service.ts` if your API port differs from 5166

## Tests
- `dotnet test` (API)
- `ng test` (frontend)