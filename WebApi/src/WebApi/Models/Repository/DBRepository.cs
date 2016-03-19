using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
	public class DBRepository : IRepository
	{
		private WebApiContext _context;

		public DBRepository(WebApiContext context)
		{
			_context = context;
		}

		public UserSchedule GetUserSchedule(string userId)
	    {
			var userSchedule = _context.UserSchedule
				.Include(sc => sc.Schedule)
				.FirstOrDefault(sc => sc.User.Id == userId);

			return userSchedule;
	    }

	    public List<DaySchedule> GetUserDaySchedule(string userId)
	    {
		    var daySchedules = GetUserSchedule(userId)?.Schedule;

		    return daySchedules;
	    }

	    public void AddUserDaySchedule(string userId, DaySchedule daySchedule)
	    {
		    //...
	    }

	    public void EditUserDaySchedule(string userId, DaySchedule daySchedule)
	    {
		    //...
	    }

	    public void DeleteUserDaySchedule(string userId, string dayScheduleId)
	    {
		    //...
	    }
    }
}
