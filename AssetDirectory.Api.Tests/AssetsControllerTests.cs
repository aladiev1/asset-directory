using Microsoft.EntityFrameworkCore;
using AssetDirectory.Api.Data;
using AssetDirectory.Api.Controllers;
using AssetDirectory.Api.Models;
using Xunit;

public class AssetsControllerTests
{
	private static AppDbContext GetInMemoryContext()
	{
		var options = new DbContextOptionsBuilder<AppDbContext>()
			.UseInMemoryDatabase(Guid.NewGuid().ToString())
			.Options;
		return new AppDbContext(options);
	}

	[Fact]
	public async Task CreateAsset_AddsAssetToDatabase()
	{
		var context = GetInMemoryContext();
		var controller = new AssetsController(context);

		var newAsset = new Asset { Name = "Laptop", Category = "Hardware", AssignedTo = "J. Smith" };
		await controller.CreateAsset(newAsset);

		Assert.Single(context.Assets);
		Assert.Equal("Laptop", context.Assets.First().Name);
	}
}