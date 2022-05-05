using gestaoFinanceira.Model;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace gestaoFinanceira.Utils
{
    public static class Token
    {
        public static string CreateToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("Nullam id purus odio. Integer vel placerat augue. Maecenas congue gravida ex eget scelerisque. Nulla risus sem, volutpat eu metus ac, dictum aliquet augue. Vivamus congue nec nulla a sagittis. In hac habitasse platea dictumst. Sed nec sollicitudin dolor. Nulla vitae laoreet urna, at ultricies quam. Nullam tincidunt ipsum scelerisque viverra sodales. Donec eu malesuada tortor, maximus commodo nunc. Etiam accumsan enim nulla, eu elementum neque volutpat id. Aenean nec porta erat. Nulla efficitur quam ac nunc congue, ut auctor lorem hendrerit.");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Name)
                }),
                Expires = DateTime.UtcNow.AddHours(8),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}
