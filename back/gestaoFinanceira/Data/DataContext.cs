using gestaoFinanceira.Model;
using Microsoft.EntityFrameworkCore;

namespace gestaoFinanceira.Data
{
    public class DataContext :DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<User> User { get; set; }
    }
}
