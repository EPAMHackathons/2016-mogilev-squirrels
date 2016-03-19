using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class DaySchedule
    {
		[Required]
	    public Guid Id { get; set; }

	    public DateTime Date { get; set; }

	    public List<Action> Actions { get; set; }

	    public string Comment { get; set; }
    }
}
