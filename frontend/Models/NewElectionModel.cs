namespace VotingSystemWebUI.Models
{
    public class NewElectionModel
    {
        public string ElectionName { get; set; }
        public DateTime ElectionDate { get; set; }
        public string ElectionDescription { get; set; }

        // Basis-Identifikation
        public string ElectionId { get; set; }
        public string ElectionTitle { get; set; }
        public string ElectionType { get; set; }

        // Zeitliche Parameter
        public DateTime StartTimestamp { get; set; }
        public DateTime EndTimestamp { get; set; }
        public DateTime RegistrationDeadline { get; set; }

        // Wahlspezifische Parameter
        public int MaxVotesPerUser { get; set; }
        public string VotingMethod { get; set; }
        public int MinimumEligibleAge { get; set; }

        // Kandidaten und Wahlkreis-Informationen
        public List<string> CandidateList { get; set; }
        public List<string> ValidElectoralDistricts { get; set; }
        public string ElectionScope { get; set; }

        // Sicherheits- und Integritätsparameter
        public string AdminAddress { get; set; }
        public bool IsVerified { get; set; }
        public string EncryptionKey { get; set; }

        // Technische Implementierungsdetails
        public int Quorum { get; set; }
        public double VotingThreshold { get; set; }
        public string State { get; set; }
    }
}