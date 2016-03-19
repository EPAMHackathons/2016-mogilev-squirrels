using System;
using System.Collections.Generic;
using System.Linq;
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
            return _context.UserSchedule;
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

        // POST: api/UserSchedules
        [HttpPost]
        public IActionResult PostUserSchedule([FromBody] UserSchedule userSchedule)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            _context.UserSchedule.Add(userSchedule);
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