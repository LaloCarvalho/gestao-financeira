using AutoMapper;
using gestaoFinanceira.Model;
using gestaoFinanceira.ViewModel;
using System.Security.Cryptography;

namespace gestaoFinanceira.Utils;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        var hash = new Hash(SHA512.Create());

        CreateMap<UserSaveViewModel, User>()
            .ForMember(
                dest => dest.CreatedDate,
                opt => opt.MapFrom(src => DateTime.Now))
            .ForMember(
                dest => dest.PasswordHash,
                 opt => opt.MapFrom(src => hash.PasswordHash(src.Password)));
        CreateMap<User, UserViewModel>();
    }
}