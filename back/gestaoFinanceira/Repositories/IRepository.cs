namespace gestaoFinanceira.Repositories;

public interface IRepository<T>
    where T : class
{
    public List<T> Get();
    public T GetById(Guid id);
    public void Insert(T model);
    public void Update(Guid id, T model);
    public void Disable(Guid id);
}
