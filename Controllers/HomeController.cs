using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using writer.Models;

namespace writer.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        DashboardModel dashboardData = new DashboardModel
        {
            AverageWordsPerDay = CalculateAverageWordsPerDay(10000, 7),
            WordsWrittenToday = GetWordsWrittenToday(),
            MaxWordsPerDay = 1000 // Set your desired max word count per day
        };
        return View(dashboardData);
    }
    private double CalculateAverageWordsPerDay(int num1, int num2)
    {
        double AverageWordsPerDay = num1 / num2;
        return AverageWordsPerDay;
    }
    private int GetWordsWrittenToday()
    {
        int wordsWritten = 300;
        return wordsWritten; 
    }

    public IActionResult Privacy()
    {
        return View();
    }
    public IActionResult WordProcessor()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
