using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using VotingSystemWebUI.Models;

namespace VotingSystemWebUI.Controllers;

public class AppsController : Controller
{
  public IActionResult Calendar() => View();
  public IActionResult Chat() => View();
  public IActionResult Kanban() => View();
  public IActionResult Email() => View();
}
