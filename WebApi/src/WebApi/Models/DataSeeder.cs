using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Mvc;
using Microsoft.Extensions.DependencyInjection;
using WebApi.Models.Gallery;

namespace WebApi.Models
{
    public static class DataSeeder
    {
	    private const string imagePath = @"http://hackaton-happydog-api.azurewebsites.net/images/gallery/";

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

			/*
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
			*/

			/*
			AddDogProfiles(db);
			*/

			db.SaveChanges();
		}

	    private static void AddDogProfiles(WebApiContext db)
	    {
			db.DogProfile.Add(new DogProfile()
			{
				Id = "1",
				Name = "Тоня",
				Description = "",
				Sex = "Девочка",
				ImgUrl = imagePath + @"Dog_1.jpg"
			});

			db.DogProfile.Add(new DogProfile()
			{
				Id = "2",
				Name = "Джек",
				Description = "",
				Sex = "Мальчик",
				ImgUrl = imagePath + @"Dog_2.jpg"
			});

			db.DogProfile.Add(new DogProfile()
			{
				Id = "3",
				Name = "Алекс",
				Description = "",
				Sex = "Мальчик",
				ImgUrl = imagePath + @"Dog_3.jpg"
			});

			db.DogProfile.Add(new DogProfile()
			{
				Id = "4",
				Name = "Жужа",
				Description = "",
				Sex = "девочка",
				ImgUrl = imagePath + @"Dog_4.jpg"
			});

			db.DogProfile.Add(new DogProfile()
			{
				Id = "5",
				Name = "Буба",
				Description = "",
				Sex = "Мальчик",
				ImgUrl = imagePath + @"Dog_5.jpg"
			});

			db.DogProfile.Add(new DogProfile()
			{
				Id = "6",
				Name = "Счастливчик",
				Description = "",
				Sex = "Мальчик",
				ImgUrl = imagePath + @"Dog_6.jpg"
			});

			db.DogProfile.Add(new DogProfile()
			{
				Id = "7",
				Name = "Пират",
				Description = "",
				Sex = "Мальчик",
				ImgUrl = imagePath + @"Dog_7.jpg"
			});

			db.DogProfile.Add(new DogProfile()
			{
				Id = "8",
				Name = "Сэнди",
				Description = "",
				Sex = "Девочка",
				ImgUrl = imagePath + @"Dog_8.jpg"
			});

			db.DogProfile.Add(new DogProfile()
			{
				Id = "9",
				Name = "Попрыгунья",
				Description = "",
				Sex = "Мальчик",
				ImgUrl = imagePath + @"Dog_9.jpg"
			});

			db.DogProfile.Add(new DogProfile()
			{
				Id = "10",
				Name = "Аннушка",
				Description = "",
				Sex = "Девочка",
				ImgUrl = imagePath + @"Dog_10.jpg"
			});

			db.DogProfile.Add(new DogProfile()
			{
				Id = "11",
				Name = "Перчик",
				Description = "",
				Sex = "Мальчик",
				ImgUrl = imagePath + @"Dog_11.jpg"
			});

			db.DogProfile.Add(new DogProfile()
			{
				Id = "12",
				Name = "Стрелок",
				Description = "",
				Sex = "Мальчик",
				ImgUrl = imagePath + @"Dog_12.jpg"
			});
		}
	}
}
