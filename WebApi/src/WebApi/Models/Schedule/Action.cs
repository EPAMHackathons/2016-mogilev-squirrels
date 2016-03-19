using System;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Action
    {
		[Required]
	    public string Id { get; set; }

	    public string Value { get; set; }

	    public string Description { get; set; }
    }
}
