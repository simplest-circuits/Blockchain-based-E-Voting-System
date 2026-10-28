using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using VotingSystemWebUI.Models;

namespace VotingSystemWebUI.Controllers;

public class DashboardsController : Controller
{
  public IActionResult Index() => View();

  public IActionResult CRM() => View();

  public IActionResult ElectionDashboard() => View();
}
