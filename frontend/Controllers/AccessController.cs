using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using VotingSystemWebUI.Models;

namespace VotingSystemWebUI.Controllers;

public class AccessController : Controller
{
public IActionResult Permission() => View();
public IActionResult Roles() => View();
}
