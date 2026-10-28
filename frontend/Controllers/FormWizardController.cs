using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using VotingSystemWebUI.Models;

namespace VotingSystemWebUI.Controllers;

public class FormWizardController : Controller
{
public IActionResult Icons() => View();
public IActionResult Numbered() => View();
}
