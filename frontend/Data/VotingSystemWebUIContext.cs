using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using VotingSystemWebUI.Models;

namespace VotingSystemWebUI.Data
{
    public class VotingSystemWebUIContext : DbContext
    {
        public VotingSystemWebUIContext (DbContextOptions<VotingSystemWebUIContext> options)
            : base(options)
        {
        }
        public DbSet<VotingSystemWebUI.Models.Transactions> Transactions { get; set; } = default!;
    }
}
