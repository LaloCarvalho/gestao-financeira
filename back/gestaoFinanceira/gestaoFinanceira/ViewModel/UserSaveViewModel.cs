namespace gestaoFinanceira.ViewModel
{
    public class UserSaveViewModel
    {        
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime CreatedDate { get; set; } 
        public DateTime LastModified { get; set; }
        public bool IsEnable { get; set; }
    }
}
