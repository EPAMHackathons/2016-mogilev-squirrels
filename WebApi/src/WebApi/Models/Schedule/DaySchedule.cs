using System;
using System.Collections.Generic;

namespace WebApi.Models
{
    public class DaySchedule
    {
	    public DateTime Date { get; set; }

	    public List<Action> Actions { get; set; }

	    public string Comment { get; set; }
    }
}
