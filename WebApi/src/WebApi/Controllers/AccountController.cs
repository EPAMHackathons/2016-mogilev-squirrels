namespace WebApi.Controllers
{

	#region Using
	using Microsoft.AspNet.Authorization;
	using Microsoft.AspNet.Identity;
	using Microsoft.AspNet.Mvc;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Threading.Tasks;
	using VkNet;
	using VkNet.Enums.Filters;
	using WebApi.Models;
	using WebApi.ViewModels.Account;
	#endregion

	[Route("api/account")]
	public class AccountController : Controller
	{
		private readonly SignInManager<ApplicationUser> _signInManager;
		private readonly UserManager<ApplicationUser> _userManager;

		public AccountController(
			SignInManager<ApplicationUser> signInManager,
			UserManager<ApplicationUser> userManager)
		{
			_signInManager = signInManager;
			_userManager = userManager;
		}

		//
		// POST: /Account/LogOff
		[HttpPost("logoff")]
		[Authorize]
		public async Task<IActionResult> LogOff()
		{
			await _signInManager.SignOutAsync();
			return Ok();
		}

		[HttpGet("isAuthorized")]
		public bool IsAuthorized()
		{
			try
			{
				return this.User.Identities != null
					&& this.User.Identities.Count() > 0
					&& this.User.Identity != null
					&& this.User.Identity.IsAuthenticated
					&& !string.IsNullOrWhiteSpace(this.User.Identity.Name);
			}
			catch
			{
				return false;
			}
		}

		[HttpPost("register/vk")]
		public bool RegisterWithVk([FromBody]LoginViewModel user)
		{
			bool result = false;

			VkApi vk = this.VkInit(user.Email, user.Password);

			var appUser = new ApplicationUser();

			var profile = vk.Account.GetProfileInfo();
			appUser.TokenVk = vk.AccessToken;
			appUser.UserName = profile.FirstName + " " + profile.LastName;
			appUser.Email = user.Email;
			appUser.UserAvatarUrl = this.GetUserPicture(vk);
			appUser.SecurityStamp = Guid.NewGuid().ToString();

			_userManager.CreateAsync(appUser, user.Password).Wait();
			_signInManager.SignInAsync(appUser, true).Wait();

			result = true;

			return result;
		}

		[HttpGet("userInfo")]
		public ApplicationUser UserInfo()
		{
			var user = this.User.Identities as ApplicationUser;
			return user;
		}

		[HttpGet("topUsers")]
		public IList<UserViewModel> GetUsersTop()
		{
			return new List<UserViewModel>() {
			new UserViewModel() { Name = "Артем Морозов", ImgUrl= "https://pp.vk.me/c630817/v630817262/13a11/WmiaPjP9BMw.jpg" },
			new UserViewModel() { Name = "Стас Кругликов", ImgUrl = "https://pp.vk.me/c617321/v617321499/18550/h0esZSP5oSg.jpg" },
			new UserViewModel() { Name = "Денис Пасюков", ImgUrl="https://pp.vk.me/c608223/v608223234/6ab6/wWBMGUwKQko.jpg" },
			new UserViewModel() { Name = "Валентин Городков", ImgUrl="https://pp.vk.me/c9872/u120739048/-6/w_e0cb2027.jpg" }
			 };
		}

		private string GetUserPicture(VkApi api)
		{
			long id = api.UserId.Value;
			var user = api.Users.Get(id, ProfileFields.Photo200);
			var photo = user.Photo200;
			return photo.AbsoluteUri;
		}

		private VkApi VkInit(string email, string password)
		{
			VkApi api = new VkApi();
			int appId = 5363363;
			api.Authorize(appId, email, password, VkNet.Enums.Filters.Settings.All);

			return api;
		}

	}
}
