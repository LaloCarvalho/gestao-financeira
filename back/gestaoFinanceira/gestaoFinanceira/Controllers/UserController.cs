using gestaoFinanceira.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace gestaoFinanceira.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private static List<User> users = new List<User>
        {
            new User {
                Id = new Guid(),
                Name = "admin",
                CreatedDate = DateTime.Now,
                Email="admin@teste.com.br",
                Password="123"
            },
            new User {
                Id = new Guid(),
                Name = "Eduardo",
                CreatedDate = DateTime.Now,
                Email="Eduardo@teste.com.br",
                Password="v6b"
            }
        };
        private readonly DataContext _context;

        public UserController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {
            return Ok(await _context.User.ToListAsync());
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<User>> Get(Guid Id)
        {
            var user = await _context.User.FindAsync(Id);
            if (user == null)
                return BadRequest("User not found.");

            return Ok(user);
        }

        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUser(User user)
        {
            _context.User.Add(user);
            await _context.SaveChangesAsync();

            return Ok(await _context.User.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<User>>> UpdateUser(User request)
        {
            var user = users.Find(u => u.Id == request.Id);
            if (user == null)
                return BadRequest("User not found.");
            user.Name = request.Name;
            user.Email = request.Email;
            user.Password = request.Password;
            user.LastModified = DateTime.Now;

            return Ok(users);
        }

        [HttpDelete("{Id}")]
        public async Task<ActionResult<List<User>>> DeleteUser(Guid Id)
        {
            var user = users.Find(u => u.Id == Id);
            if (user == null)
                return BadRequest("User not found.");
            users.Remove(user);

            return Ok(users);
        }
    }
}
