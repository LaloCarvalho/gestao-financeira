namespace gestaoFinanceira.Model
{
    public class User
    {
        public Guid Id { get; set; } = new Guid();
        public string Name { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; } 
    }
}
