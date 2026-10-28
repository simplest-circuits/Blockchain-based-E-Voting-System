using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using VotingSystemWebUI.Models;

namespace VotingSystemWebUI.Controllers;

public class LogisticsController : Controller
{
  public IActionResult Dashboard() => View();
  public IActionResult Fleet() => View();
}
