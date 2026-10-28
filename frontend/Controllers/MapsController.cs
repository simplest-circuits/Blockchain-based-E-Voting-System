using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using VotingSystemWebUI.Models;

namespace VotingSystemWebUI.Controllers;

public class MapsController : Controller
{
  public IActionResult Leaflet() => View();
}
