using gestaoFinanceira.Model;
using gestaoFinanceira.Utils;
using gestaoFinanceira.ViewModel;
using System.Security.Cryptography;

namespace gestaoFinanceira.Repositories
{
    public class UserRepository : IRepository<User>
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public List<User> Get()
        {
            return _context.User.ToList();
        }

        public User GetById(Guid id)
        {
            return _context.User.Find(id);
        }

        public void Insert(User model)
        {
            _context.User.Add(model);
            _context.SaveChanges();
        }

        public void Update(Guid id, User model)
        {
            var user = _context.User.Where(x => x.Id == id).FirstOrDefault();

            if (user != null)
            {
                if (user.Name != model.Name)
                    user.Name = model.Name;
                if (user.Email != model.Email)
                    user.Email = model.Email;
                if(user.PasswordHash != model.PasswordHash)
                    user.PasswordHash = model.PasswordHash;
                user.LastModified = DateTime.Now;

                _context.SaveChanges();
            }
        }

        public void Disable(Guid id)
        {
            var user = _context.User.Where(x => x.Id == id).FirstOrDefault();
            user.Active = false;
            user.LastModified = DateTime.Now;
            _context.SaveChanges();
        }

        public void Enable(Guid id)
        {
            var user = _context.User.Where(x => x.Id == id).FirstOrDefault();
            user.Active = true;
            user.LastModified = DateTime.Now;
            _context.SaveChanges();
        }

        public User UserAuth(User model)
        {
            var user = _context.User.Where(x => x.Email == model.Email).FirstOrDefault();

            if (user.Email != model.Email)
            {
                return null;
            }

            if (model.PasswordHash != user.PasswordHash)
            {
                return null;
            }

            return user;
        }
    }
}
