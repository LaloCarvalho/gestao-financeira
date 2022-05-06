using AutoMapper;
using gestaoFinanceira.Model;
using gestaoFinanceira.Services;
using gestaoFinanceira.Utils;
using gestaoFinanceira.ViewModel;
using gestaoFinanceira.ViewModel.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace gestaoFinanceira.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _service;
        private readonly IMapper _mapper;

        public UserController(UserService service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(UserSaveViewModel request)
        {
            try
            {
                var user = _service.UserAuth(request);
                if (user == null)
                    return NotFound(new { message = "Usuário ou senha inválido." });
                else
                {
                    var userAuth = _mapper.Map<User, AuthViewModel>(user);
                    userAuth.AccessToken = Token.CreateToken(user);

                    return Ok(userAuth);
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Error: " + ex);
            }
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {
            try
            {
                return Ok(_service.Get());
            }
            catch (Exception ex)
            {
                throw new Exception("Error: " + ex);
            }
        }

        [Authorize]
        [HttpGet("{Id}")]
        public async Task<ActionResult<User>> GetById(Guid Id)
        {
            try
            {
                var user = _service.GetById(Id);
                if (user == null)
                    return BadRequest("Usuário não existe.");

                return Ok(user);
            }
            catch (Exception ex)
            {
                throw new Exception("Error: " + ex);
            }
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<ActionResult<User>> AddUser(UserSaveViewModel user)
        {
            try
            {
                _service.Insert(user);

                return Ok();
            }
            catch (Exception ex)
            {
                throw new Exception("Error: " + ex);
            }
        }

        [Authorize]
        [HttpPut("{id}/UpdateUser")]
        public async Task<ActionResult<User>> UpdateUser(Guid id, UserSaveViewModel request)
        {
            try
            {
                _service.Update(id,request);

                return Ok();
            }
            catch (Exception ex)
            {
                throw new Exception("Error: " + ex);
            }
        }

        [Authorize]
        [HttpDelete("{Id}")]
        public async Task<ActionResult<User>> DisableUser(Guid Id)
        {
            try
            {
                _service.Disable(Id);

                return Ok();
            }
            catch (Exception ex)
            {
                throw new Exception("Error: " + ex);
            }
        }

        [Authorize]
        [HttpPut("{Id}/EnableUser")]
        public async Task<ActionResult<User>> EnableUser(Guid Id)
        {
            try
            {
                _service.Enable(Id);

                return Ok();
            }
            catch (Exception ex)
            {
                throw new Exception("Error: " + ex);
            }
        }
    }
}
