package br.com.taskapp.taskapp.dao;
import java.util.List;
import br.com.taskapp.taskapp.model.Task;

public interface ITaskDAO {
    public List<Task> getList();
    public Task getById(Integer id);
    public String save(Task task);
    public String update(Task task);
    public String delete(Integer id);
}
