# Asset Directory

A small full-stack CRUD app built to learn Angular quickly: an Angular frontend talking to a .NET Web API backed by SQLite via Entity Framework Core.

## Stack
- Angular (standalone components, TypeScript, HttpClient, template-driven forms)
- .NET 8 Web API (REST endpoints, EF Core)
- SQLite (swap the connection string for SQL Server in production)
- xUnit (API), Vitest (Angular)

## Note on Angular versions
This repo includes two frontends against the same API:
- `asset-directory-ui/` — built on the latest Angular (standalone components,
  zoneless change detection, Vitest)
- `asset-directory-ui-v15/` — rebuilt on Angular 15 (NgModule-based, zone.js,
  Karma/Jasmine) to make sure I understood the pre-standalone patterns
  directly, not just the current defaults

## Running locally

**API**
1. `cd AssetDirectory.Api` then run the project (F5 in Visual Studio, or `dotnet run`) — check the printed port

**Frontend (latest Angular)**
2. `cd asset-directory-ui && ng serve` — starts at http://localhost:4200
3. Update `apiUrl` in `asset.service.ts` if your API port differs from 5166

**Frontend (Angular 15)**
4. `cd asset-directory-ui-v15 && npx -p @angular/cli@15 ng serve` — also starts at http://localhost:4200 (stop the other frontend first if both are running, since they'd conflict on the same port)
5. Update `apiUrl` in `asset.service.ts` here too if needed

## Tests
- `dotnet test` (API)
- `ng test` (either frontend — Vitest for the latest version, Karma for the v15 version)