using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace WebApi.Models
{
    public static class DataSeeder
    {
		// TODO: Move this code when seed data is implemented in EF 7

		/// <summary>
		/// This is a workaround for missing seed data functionality in EF 7.0-rc1
		/// More info: https://github.com/aspnet/EntityFramework/issues/629
		/// </summary>
		/// <param name="app">
		/// An instance that provides the mechanisms to get instance of the database context.
		/// </param>
		public static void SeedData(this IApplicationBuilder app)
		{
			WebApiContext db = (WebApiContext)app.ApplicationServices.GetRequiredService(typeof (WebApiContext));

			var actionFeed = new Action() {Id = "1", Value = "Покормить", Description = "Кормим или приносим еду."};
			var actionPlay = new Action() { Id = "2", Value = "Поиграть", Description = "Играем или приносим игрушки для собак." };
			var actionClean = new Action() { Id = "3", Value = "Убирать", Description = "Помочь убрать вольеры или почистить снег зимой." };

			db.Action.Add(actionFeed);
			db.Action.Add(actionPlay);
			db.Action.Add(actionClean);

			//Day schedule		
			var daySchedule = new DaySchedule()
			{
				Id = "1",
				Date = DateTime.Now,
				Actions = new List<Action>() { actionClean, actionPlay },
				Comment = "Очень важный комментарий"
			};

			//User schedules
			var userSchedule = new UserSchedule()
			{
				Id = "1",
				Schedule = new List<DaySchedule>() { daySchedule },
				User = null
			};

			db.DaySchedules.Add(daySchedule);
			db.UserSchedule.Add(userSchedule);

			db.SaveChanges();
		}
	}
}
