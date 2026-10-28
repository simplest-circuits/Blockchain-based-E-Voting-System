using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using VotingSystemWebUI.Models;

namespace VotingSystemWebUI.Controllers;

public class AcademyController : Controller
{
  public IActionResult Dashboard() => View();
  public IActionResult MyCourse() => View();
  public IActionResult CourseDetails() => View();
}
