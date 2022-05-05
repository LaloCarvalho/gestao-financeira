namespace gestaoFinanceira.Services
{
    public interface IService <VM, SVM, T>
        where SVM : class
        where VM: class
        where T : class
    {
        public List<VM> Get();
        public VM GetById(Guid id);
        public void Insert(SVM svm);
        public void Update(Guid id, SVM svm);
        public void Disable(Guid id);
    }
}
