namespace AssetDirectory.Api.Models;

public class Asset
{
	public int Id { get; set; }
	public string Name { get; set; } = string.Empty;
	public string Category { get; set; } = string.Empty;
	public string AssignedTo { get; set; } = string.Empty;
}