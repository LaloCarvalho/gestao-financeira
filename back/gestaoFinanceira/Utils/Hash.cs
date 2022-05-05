using gestaoFinanceira.Model;
using System;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace gestaoFinanceira.Utils
{
    public class Hash
    {
        private HashAlgorithm _algoritmo;

        public Hash(HashAlgorithm algoritmo)
        {
            _algoritmo = algoritmo;
        }
        public string PasswordHash(string password)
        {

            var encodedValue = Encoding.UTF8.GetBytes(password);
            var encryptedPassword = _algoritmo.ComputeHash(encodedValue);

            var sb = new StringBuilder();
            foreach (var caracter in encryptedPassword)
            {
                sb.Append(caracter.ToString("X2"));
            }

            return sb.ToString();
        }
    }
}
