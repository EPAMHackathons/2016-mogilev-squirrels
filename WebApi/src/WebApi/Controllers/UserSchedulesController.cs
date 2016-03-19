using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/UserSchedules")]
    public class UserSchedulesController : Controller
    {
        private WebApiContext _context;

        public UserSchedulesController(WebApiContext context)
        {
            _context = context;
        }

        // GET: api/UserSchedules
        [HttpGet]
        public IEnumerable<UserSchedule> GetUserSchedule()
        {
	        return _context.UserSchedule
		        .Include(sched => sched.Schedule)
		        .ThenInclude(t => t.Actions);

        }

        // GET: api/UserSchedules/5
        [HttpGet("{id}", Name = "GetUserSchedule")]
        public IActionResult GetUserSchedule([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            UserSchedule userSchedule = _context.UserSchedule.Single(m => m.Id == id);

            if (userSchedule == null)
            {
                return HttpNotFound();
            }

            return Ok(userSchedule);
        }

        // PUT: api/UserSchedules/5
        [HttpPut("{id}")]
        public IActionResult PutUserSchedule(string id, [FromBody] UserSchedule userSchedule)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            if (id != userSchedule.Id)
            {
                return HttpBadRequest();
            }

            _context.Entry(userSchedule).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserScheduleExists(id))
                {
                    return HttpNotFound();
                }
                else
                {
                    throw;
                }
            }

            return new HttpStatusCodeResult(StatusCodes.Status204NoContent);
        }

		// POST: api/UserSchedules/
	    [HttpPost]
		public IActionResult PostAddDailyschedule([FromBody] DaySchedule daySchedule)
	    {
			if (!ModelState.IsValid)
			{
				return HttpBadRequest(ModelState);
			}

			//var userId = User.GetUserId();
			string userId = "a891b06a-d634-48b7-9246-60a0b3d3bb9f";
		    //var user = _context.Users.FirstOrDefault(u => u.Id == userId);

		    var userSchedule = _context.UserSchedule
				.Include(sc => sc.Schedule)
				.FirstOrDefault(sc => sc.User.Id == userId);

			userSchedule?.Schedule.Add(daySchedule);

		    //_context.UserSchedule.Add(userSchedule);
			try
			{
				_context.SaveChanges();
			}
			catch (DbUpdateException)
			{
				if (UserScheduleExists(userSchedule.Id))
				{
					return new HttpStatusCodeResult(StatusCodes.Status409Conflict);
				}
				else
				{
					throw;
				}
			}

			return CreatedAtRoute("GetUserSchedule", new { id = userSchedule.Id }, userSchedule);
		}

        // DELETE: api/UserSchedules/5
        [HttpDelete("{id}")]
        public IActionResult DeleteUserSchedule(string id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            UserSchedule userSchedule = _context.UserSchedule.Single(m => m.Id == id);
            if (userSchedule == null)
            {
                return HttpNotFound();
            }

            _context.UserSchedule.Remove(userSchedule);
            _context.SaveChanges();

            return Ok(userSchedule);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserScheduleExists(string id)
        {
            return _context.UserSchedule.Count(e => e.Id == id) > 0;
        }
    }
}