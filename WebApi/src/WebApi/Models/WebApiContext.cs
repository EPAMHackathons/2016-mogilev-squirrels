using Microsoft.Data.Entity;

namespace WebApi.Models
{
    public class WebApiContext : DbContext
    {
        private static bool _created = false;

        public WebApiContext()
        {
            if (!_created)
            {
                _created = true;
                Database.EnsureCreated();
            }
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
        }

        public DbSet<Action> Action { get; set; }
    }
}
