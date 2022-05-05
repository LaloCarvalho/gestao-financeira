namespace gestaoFinanceira.Model
{
    public class User
    {
        public Guid Id { get; set; } = new Guid();
        public string Name { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? LastModified { get; set; } = null;
        public bool Active { get; set; } = true;      
    }
}
