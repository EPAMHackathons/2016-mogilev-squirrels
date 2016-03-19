using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;
using WebApi.Models;
using WebApi.Models.Gallery;

namespace WebApi.Models
{
    public class WebApiContext : IdentityDbContext
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
			base.OnModelCreating(builder);
		}

        public DbSet<Action> Action { get; set; }

        public DbSet<UserSchedule> UserSchedule { get; set; }

		public DbSet<DaySchedule> DaySchedules { get; set; }

		public DbSet<DogProfile> DogProfile { get; set; }
	}
}
