using System.Collections.Generic;

namespace WebApi.Models
{
    public class UserSchedule
    {
	    public virtual ApplicationUser User { get; set; }

	    public List<DaySchedule> Schedule { get; set; }
    }
}
