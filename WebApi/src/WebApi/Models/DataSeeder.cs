using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
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

			db.Action.Add(new Action() {Id = "1", Value = "Покормить", Description = "Кормим или приносим еду."});
			db.Action.Add(new Action() { Id = "2", Value = "Поиграть", Description = "Играем или приносим игрушки для собак." });
			db.Action.Add(new Action() {Id = "3", Value = "Убирать", Description = "Помочь убрать вольеры или почистить снег зимой."});

			db.SaveChanges();
		}
	}
}
