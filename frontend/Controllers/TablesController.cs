using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using VotingSystemWebUI.Models;

namespace VotingSystemWebUI.Controllers;

public class TablesController : Controller
{
  public IActionResult Basic() => View();
  public IActionResult DatatablesAdvanced() => View();
  public IActionResult DatatablesBasic() => View();
  public IActionResult DatatablesExtensions() => View();
}
