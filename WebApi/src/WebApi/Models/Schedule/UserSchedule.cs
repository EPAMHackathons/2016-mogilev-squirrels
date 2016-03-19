using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class UserSchedule
    {
		[Required]
	    public string Id { get; set; }

	    public virtual ApplicationUser User { get; set; }

	    public List<DaySchedule> Schedule { get; set; }
    }
}
