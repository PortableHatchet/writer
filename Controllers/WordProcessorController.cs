using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

public class WordProcessorController : Controller
{
    [HttpPost]
    public IActionResult SaveContent(WordProcessorModel model)
    {
        // Here, you can process the model.TextContent as needed.
        // For simplicity, let's just return a view with the entered content.
        return View("WordProcessor", model);
    }
}