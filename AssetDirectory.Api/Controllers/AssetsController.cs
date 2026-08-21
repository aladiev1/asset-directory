using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AssetDirectory.Api.Data;
using AssetDirectory.Api.Models;

namespace AssetDirectory.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AssetsController : ControllerBase
{
	private readonly AppDbContext _context;

	public AssetsController(AppDbContext context)
	{
		_context = context;
	}

	[HttpGet]
	public async Task<ActionResult<IEnumerable<Asset>>> GetAssets()
		=> await _context.Assets.ToListAsync();

	[HttpGet("{id}")]
	public async Task<ActionResult<Asset>> GetAsset(int id)
	{
		var asset = await _context.Assets.FindAsync(id);
		return asset == null ? NotFound() : asset;
	}

	[HttpPost]
	public async Task<ActionResult<Asset>> CreateAsset(Asset asset)
	{
		_context.Assets.Add(asset);
		await _context.SaveChangesAsync();
		return CreatedAtAction(nameof(GetAsset), new { id = asset.Id }, asset);
	}

	[HttpPut("{id}")]
	public async Task<IActionResult> UpdateAsset(int id, Asset asset)
	{
		if (id != asset.Id) return BadRequest();
		_context.Entry(asset).State = EntityState.Modified;
		await _context.SaveChangesAsync();
		return NoContent();
	}

	[HttpDelete("{id}")]
	public async Task<IActionResult> DeleteAsset(int id)
	{
		var asset = await _context.Assets.FindAsync(id);
		if (asset == null) return NotFound();
		_context.Assets.Remove(asset);
		await _context.SaveChangesAsync();
		return NoContent();
	}
}