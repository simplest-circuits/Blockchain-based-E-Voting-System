using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using VotingSystemWebUI.Models;

namespace VotingSystemWebUI.Controllers;

public class InvoiceController : Controller
{
  public IActionResult Add() => View();
  public IActionResult List() => View();
  public IActionResult Edit() => View();
  public IActionResult Preview() => View();
  public IActionResult Print() => View();
}
