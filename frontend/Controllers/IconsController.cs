using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using VotingSystemWebUI.Models;

namespace VotingSystemWebUI.Controllers;

public class IconsController : Controller
{
  public IActionResult Tabler() => View();
  public IActionResult FontAwesome() => View();
}
