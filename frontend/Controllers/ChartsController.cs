using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using VotingSystemWebUI.Models;

namespace VotingSystemWebUI.Controllers;

public class ChartsController : Controller
{
  public IActionResult Apex() => View();
  public IActionResult Chartjs() => View();
}
