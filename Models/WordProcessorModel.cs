using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

public class WordProcessorModel : PageModel
{
    public string? TextContent { get; set; }
}