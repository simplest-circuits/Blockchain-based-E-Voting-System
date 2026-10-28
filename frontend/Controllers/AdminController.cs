using Microsoft.AspNetCore.Mvc;
using VotingSystemWebUI.Models;

namespace VotingSystemWebUI.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult CandidatesManagement() => View();
        public IActionResult ElectionsManagement() => View();
        public IActionResult UsersManagement() => View();
        public IActionResult SystemSettings() => View();

        // GET: Admin/NewElection
        public IActionResult NewElection()
        {
            var model = new NewElectionModel
            {
                ElectionId = GenerateElectionId() // Generate the electionId
            };

            // Fetch existing elections from the database
            var existingElections = GetExistingElections();

            // Pass the existing elections to the view
            ViewBag.ExistingElections = existingElections;

            return View(model);
        }

        // POST: Admin/NewElection
        [HttpPost]
        public IActionResult NewElection(NewElectionModel model)
        {
            if (ModelState.IsValid)
            {
                // Save the model data to the database
                SaveElectionToDatabase(model);

                // Redirect to a success page or back to the form with a success message
                return RedirectToAction("ElectionsManagement");
            }

            // If model is invalid, return the same view with validation messages
            return View(model);
        }

        private string GenerateElectionId()
        {
            return "EID-" + Guid.NewGuid().ToString();
        }

        private void SaveElectionToDatabase(NewElectionModel model)
        {
            // Implement the logic to save the model to the database
        }

        private List<NewElectionModel> GetExistingElections()
        {
            // Implement the logic to fetch existing elections from the database
            // This is a placeholder for demonstration purposes
            return new List<NewElectionModel>
            {
                new NewElectionModel { ElectionId = "EID-123", ElectionTitle = "Election 1", ElectionDescription = "Description 1", StartTimestamp = DateTime.Now, EndTimestamp = DateTime.Now.AddDays(1) },
                new NewElectionModel { ElectionId = "EID-456", ElectionTitle = "Election 2", ElectionDescription = "Description 2", StartTimestamp = DateTime.Now, EndTimestamp = DateTime.Now.AddDays(2) }
            };
        }
    }
}
