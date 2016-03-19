using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
	public interface IRepository
	{
		#region Schedule Management

		UserSchedule GetUserSchedule(string userId);
		List<DaySchedule> GetUserDaySchedule(string userId);
		void AddUserDaySchedule(string userId, DaySchedule daySchedule);
		void EditUserDaySchedule(string userId, DaySchedule daySchedule);
		void DeleteUserDaySchedule(string userId, string dayScheduleId);

		#endregion
	}
}
