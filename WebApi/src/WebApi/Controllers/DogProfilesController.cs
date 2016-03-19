using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using WebApi.Models;
using WebApi.Models.Gallery;

namespace WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/DogProfiles")]
    public class DogProfilesController : Controller
    {
        private WebApiContext _context;

        public DogProfilesController(WebApiContext context)
        {
            _context = context;
        }

        // GET: api/DogProfiles
        [HttpGet]
        public IEnumerable<DogProfile> GetDogProfile()
        {
            return _context.DogProfile;
        }

        // GET: api/DogProfiles/5
        [HttpGet("{id}", Name = "GetDogProfile")]
        public IActionResult GetDogProfile([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            DogProfile dogProfile = _context.DogProfile.Single(m => m.Id == id);

            if (dogProfile == null)
            {
                return HttpNotFound();
            }

            return Ok(dogProfile);
        }

		// PUT: api/DogProfiles/5
        [HttpPut("{id}")]
        public IActionResult PutDogProfile(string id, [FromBody] DogProfile dogProfile)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            if (id != dogProfile.Id)
            {
                return HttpBadRequest();
            }

            _context.Entry(dogProfile).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DogProfileExists(id))
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

        // POST: api/DogProfiles
        [HttpPost]
        public IActionResult PostDogProfile([FromBody] DogProfile dogProfile)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            _context.DogProfile.Add(dogProfile);
            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (DogProfileExists(dogProfile.Id))
                {
                    return new HttpStatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("GetDogProfile", new { id = dogProfile.Id }, dogProfile);
        }

        // DELETE: api/DogProfiles/5
        [HttpDelete("{id}")]
        public IActionResult DeleteDogProfile(string id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            DogProfile dogProfile = _context.DogProfile.Single(m => m.Id == id);
            if (dogProfile == null)
            {
                return HttpNotFound();
            }

            _context.DogProfile.Remove(dogProfile);
            _context.SaveChanges();

            return Ok(dogProfile);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DogProfileExists(string id)
        {
            return _context.DogProfile.Count(e => e.Id == id) > 0;
        }
    }
}