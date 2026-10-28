using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using VotingSystemWebUI.Models;

namespace VotingSystemWebUI.Controllers;

public class FrontPagesController : Controller
{
  public IActionResult LandingPage() => View();
  public IActionResult PaymentPage() => View();
  public IActionResult PricingPage() => View();
  public IActionResult CheckoutPage() => View();
  public IActionResult HelpCenterLanding() => View();
  public IActionResult HelpCenterArticle() => View();
}
