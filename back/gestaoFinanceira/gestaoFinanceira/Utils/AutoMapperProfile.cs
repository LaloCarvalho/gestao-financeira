//using AutoMapper;
//using System.Security.Cryptography;

//namespace ErlynService.Util;

//public class AutoMapperProfile : Profile
//{
//    public AutoMapperProfile()
//    {
//        var hash = new Hash(SHA512.Create());

//        CreateMap<UserSaveViewModel, Player>();
//        CreateMap<Player, UserViewModel>();
//        CreateMap<AuthViewModel, Player>()
//            .ForMember(
//                dest => dest.Login,
//                opt => opt.MapFrom(src => src.Login.ToLower()
//            ))
//            .ForMember(
//                dest => dest.PasswordHash,
//                opt => opt.MapFrom(src => hash.PasswordHash(src.Password)
//            ));
//        CreateMap<PlayerSaveViewModel, Player>()
//            .ForMember(
//                dest => dest.PasswordHash,
//                opt => opt.MapFrom(src => hash.PasswordHash(src.Password)
//            ))
//            .ForMember(
//                dest => dest.Login,
//                opt => opt.MapFrom(src => src.Login.ToLower()
//            ));
//        CreateMap<Player, PlayerViewModel>();
//        CreateMap<Players_CharactersSaveViewModel, Players_Characters>()
//            .ForMember(
//                dest => dest.Level,
//                opt => opt.MapFrom(src => 1
//            ));
//        CreateMap<Players_Characters, Players_CharactersViewModel>();
//        CreateMap<ItemInstance, ItemInstanceViewModel>();
//        CreateMap<Player, PlayerViewModel>();
//        CreateMap<Item, ItemViewModel>();
//        CreateMap<Skill, SkillViewModel>();
//        CreateMap<Players_Characters_Class, Players_Characters_ClassViewModel>();
//        CreateMap<CharacterClass, CharacterClassViewModel>();
//        CreateMap<Monster, MonsterViewModel>();
//        CreateMap<MonsterSaveViewModel, Monster>();
//        CreateMap<Monster_Skill, Monster_SkillViewModel>();
//        CreateMap<Monster_Item, Monster_ItemViewModel>();
//    }
//}