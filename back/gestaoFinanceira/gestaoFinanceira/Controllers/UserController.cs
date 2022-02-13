using gestaoFinanceira.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace gestaoFinanceira.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;

        //public UserController(DataContext context)
        //{
        //    _context = context;
        //}

        //[HttpGet]
        //public async Task<ActionResult<List<User>>> Get()
        //{
        //    return Ok(await _context.User.ToListAsync());
        //}

        //[HttpGet("{Id}")]
        //public async Task<ActionResult<User>> Get(Guid Id)
        //{
        //    var user = await _context.User.FindAsync(Id);
        //    if (user == null)
        //        return BadRequest("User not found.");

        //    return Ok(user);
        //}

        //[HttpPost]
        //public async Task<ActionResult<List<User>>> AddUser(User user)
        //{
        //    _context.User.Add(user);
        //    await _context.SaveChangesAsync();

        //    return Ok(await _context.User.ToListAsync());
        //}

        //[HttpPut]
        //public async Task<ActionResult<List<User>>> UpdateUser(User request)
        //{
        //    var dbUser = await _context.User.FindAsync(request.Id);
        //    if (dbUser == null)
        //        return BadRequest("User not found.");

        //    dbUser.Name = request.Name;
        //    dbUser.Email = request.Email;
        //    dbUser.Password = request.Password;
        //    dbUser.LastModified = DateTime.Now;

        //    await _context.SaveChangesAsync();

        //    return Ok(await _context.User.ToListAsync());
        //}

        //[HttpDelete("{Id}")]
        //public async Task<ActionResult<List<User>>> DeleteUser(Guid Id)
        //{
        //    var dbUser = await _context.User.FindAsync(Id);
        //    if (dbUser == null)
        //        return BadRequest("User not found.");

        //    _context.User.Remove(dbUser);
        //    await _context.SaveChangesAsync();

        //    return Ok(await _context.User.ToListAsync());
        //}
    }
}
