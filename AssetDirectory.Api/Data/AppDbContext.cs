using Microsoft.EntityFrameworkCore;
using AssetDirectory.Api.Models;

namespace AssetDirectory.Api.Data;

public class AppDbContext : DbContext
{
	public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
	public DbSet<Asset> Assets => Set<Asset>();
}