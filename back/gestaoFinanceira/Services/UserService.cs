using AutoMapper;
using gestaoFinanceira.Model;
using gestaoFinanceira.Repositories;
using gestaoFinanceira.ViewModel;

namespace gestaoFinanceira.Services;

public class UserService : IService<UserViewModel, UserSaveViewModel, User>
{
    private readonly UserRepository _repository;
    private readonly IMapper _mapper;

    public UserService(UserRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    public List<UserViewModel> Get()
    {
        return _mapper.Map<List<User>, List<UserViewModel>>(_repository.Get());
    }

    public UserViewModel GetById(Guid id)
    {
        return _mapper.Map<User, UserViewModel>(_repository.GetById(id));
    }

    public void Insert(UserSaveViewModel svm)
    {
        _repository.Insert(_mapper.Map<UserSaveViewModel, User>(svm));
    }

    public void Update(Guid id, UserSaveViewModel svm)
    {
        _repository.Update(id, _mapper.Map<UserSaveViewModel, User>(svm));
    }

    public void Disable(Guid id)
    {
        _repository.Disable(id);
    }

    public void Enable(Guid id)
    {
        _repository.Enable(id);
    }

    public User UserAuth(UserSaveViewModel svm)
    {
        return _repository.UserAuth(_mapper.Map<UserSaveViewModel, User>(svm));
    }
}


