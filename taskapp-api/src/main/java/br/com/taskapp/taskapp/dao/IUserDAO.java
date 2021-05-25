package br.com.taskapp.taskapp.dao;
import java.util.List;

import br.com.taskapp.taskapp.model.User;

public interface IUserDAO {
    public List<User> getList();
    public User getById(Integer id);
    public User getByUserName(String username);
    public String save(User user);
    public String update(User user);
    public String delete(Integer id);
}
