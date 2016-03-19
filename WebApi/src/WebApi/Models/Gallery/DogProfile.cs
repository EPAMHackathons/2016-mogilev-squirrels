using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models.Gallery
{
    public class DogProfile
    {
	    public string Id { get; set; }

	    public string ImgUrl { get; set; }

	    public string Name { get; set; }

	    public string Sex { get; set; }

	    public string Description { get; set; }
    }
}
