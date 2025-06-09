using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class UpdateEntityPropertyNames : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Longidue",
                table: "Activities",
                newName: "Longitude");

            migrationBuilder.RenameColumn(
                name: "Latitdue",
                table: "Activities",
                newName: "Latitude");

            migrationBuilder.RenameColumn(
                name: "Decription",
                table: "Activities",
                newName: "Description");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Longitude",
                table: "Activities",
                newName: "Longidue");

            migrationBuilder.RenameColumn(
                name: "Latitude",
                table: "Activities",
                newName: "Latitdue");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Activities",
                newName: "Decription");
        }
    }
}
