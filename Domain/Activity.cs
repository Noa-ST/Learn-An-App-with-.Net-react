using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Activity
    {
        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public required String Title { get; set; }
        public DateTime Date { get; set; }
        public required String Description { get; set; }
        public required String Category { get; set; }
        public Boolean IsCancelled { get; set; }

        public required String City { get; set; }
        public required String Venue { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }

    }
}
