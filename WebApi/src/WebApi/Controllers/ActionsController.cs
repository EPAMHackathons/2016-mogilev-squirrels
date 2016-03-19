using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using WebApi.Models;
using Action = WebApi.Models.Action;

namespace WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Actions")]
    public class ActionsController : Controller
    {
        private WebApiContext _context;

        public ActionsController(WebApiContext context)
        {
            _context = context;
        }

        // GET: api/Actions
        [HttpGet]
        public IEnumerable<Action> GetAction()
        {
		        return _context.Action.ToList();
        }

        // GET: api/Actions/5
        [HttpGet("{id}", Name = "GetAction")]
        public IActionResult GetAction([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            Action action = _context.Action.Single(m => m.Id == id);

            if (action == null)
            {
                return HttpNotFound();
            }

            return Ok(action);
        }

        // PUT: api/Actions/5
        [HttpPut("{id}")]
        public IActionResult PutAction(string id, [FromBody] Action action)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            if (id != action.Id)
            {
                return HttpBadRequest();
            }

            _context.Entry(action).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ActionExists(id))
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

        // POST: api/Actions
        [HttpPost]
        public IActionResult PostAction([FromBody] Action action)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            _context.Action.Add(action);
            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ActionExists(action.Id))
                {
                    return new HttpStatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("GetAction", new { id = action.Id }, action);
        }

        // DELETE: api/Actions/5
        [HttpDelete("{id}")]
        public IActionResult DeleteAction(string id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            Action action = _context.Action.Single(m => m.Id == id);
            if (action == null)
            {
                return HttpNotFound();
            }

            _context.Action.Remove(action);
            _context.SaveChanges();

            return Ok(action);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ActionExists(string id)
        {
            return _context.Action.Count(e => e.Id == id) > 0;
        }
    }
}