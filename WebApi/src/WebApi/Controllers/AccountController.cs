namespace WebApi.Controllers
{

	#region Using
	using Microsoft.AspNet.Authorization;
	using Microsoft.AspNet.Identity;
	using Microsoft.AspNet.Mvc;
	using System.Linq;
	using System.Threading.Tasks;
	using VkNet;
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
		[AllowAnonymous]
		public bool RegisterWithVk([FromBody]LoginViewModel user)
		{
			bool result = false;

			VkApi vk = this.VkInit(user.Email, user.Password);

			var appUser = new ApplicationUser();

			var profile = vk.Account.GetProfileInfo();
			appUser.TokenVk = vk.AccessToken;
			appUser.UserName = profile.FirstName + " " + profile.LastName;
			appUser.Email = user.Email;

			_userManager.CreateAsync(appUser, user.Password);
			_signInManager.SignInAsync(appUser, true);

			result = true;

			return result;
		}

		[HttpGet("user/imageUrl")]
		public string GetUserPicture()
		{
			var user = User.Identity as ApplicationUser;

			if (user == null)
			{
				return string.Empty;
			}

			VkApi api = new VkApi();
			api.Authorize(user.TokenVk);

			return api.Photo.GetOwnerPhotoUploadServer(api.UserId.Value).UploadUrl;
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
