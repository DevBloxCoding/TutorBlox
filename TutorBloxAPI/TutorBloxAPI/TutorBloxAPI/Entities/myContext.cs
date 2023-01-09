using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;

namespace WebsiteAPI.Entities
{
    public class myContext : DbContext
    {
        //public DbSet<userTable> UserTable { get; set; }
       
        public myContext(DbContextOptions<myContext> options, IConfiguration configuration) : base(options)
        {
            Database.Migrate();
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var connectionString = Configuration["MyKeys:ConnectionString"];
                optionsBuilder.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
            }
        }
    }
}
