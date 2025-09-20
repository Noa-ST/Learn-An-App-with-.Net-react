using Application.Activities.Queries;
using Application.Core;
using Microsoft.EntityFrameworkCore;
using Persistence;
using FluentValidation;
using Application.Validators;
using API.Middleware;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();

            builder.Services.AddDbContext<AppDbContext>(option =>
            {
                option.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
            }
            );

            builder.Services.AddCors();
            builder.Services.AddMediatR(x => {              x.RegisterServicesFromAssemblyContaining<GetActivityList.Handler>();
                x.AddOpenBehavior(typeof(ValidationBehavior<,>));
                });

            builder.Services.AddAutoMapper(typeof(MappingProfiles).Assembly);
            builder.Services.AddValidatorsFromAssemblyContaining<CreateActivityValidator>();
            builder.Services.AddTransient<ExceptionMiddleware>();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            app.UseMiddleware<ExceptionMiddleware>();
            app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000", "https://localhost:3000"));

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            // tự động cập nhật CSDL khi chạy ứng dụng
            // CreateScope() giúp tạo phạm vi tạm thời để sử dụng các dịch vụ Scoped.
            using var scope = app.Services.CreateScope();
            var service = scope.ServiceProvider;
            try
            {
                var context = service.GetRequiredService<AppDbContext>();
                await context.Database.MigrateAsync();
                await DbInitiallizer.SeedData(context);
            }
            catch(Exception ex)
            {
                var logger = service.GetRequiredService<ILogger<Program>>();
                logger.LogError(ex, "An enrror occurred during migration");
                throw;
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
