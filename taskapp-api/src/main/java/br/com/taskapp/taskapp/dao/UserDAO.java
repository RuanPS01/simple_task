package br.com.taskapp.taskapp.dao;
import br.com.taskapp.taskapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class UserDAO implements IUserDAO
{
    @Autowired
    JdbcTemplate jdbcTemplate;
     
    @Override
    public List<User> getList() {
 
        return jdbcTemplate.query(
            "SELECT "
            +"id,username,password "
            +"FROM users ",
            new BeanPropertyRowMapper<>(User.class));
    }
 
    @Override
    public User getById(Integer id) {
        return jdbcTemplate.queryForObject(
            "SELECT id,username,password FROM users WHERE id = ?",
            new Object[] {id},new BeanPropertyRowMapper<>(User.class));
    }

    @Override
    public User getByUserName(String username) {
        return jdbcTemplate.queryForObject(
            "SELECT id,username,password FROM users WHERE username = ?",
            new Object[] {username},new BeanPropertyRowMapper<>(User.class));
    }
 
    @Override
    public String save(User user) {
       jdbcTemplate.update(
            "INSERT INTO users "
            +"(username,password) "
            +"VALUES (?,?)", 
            new Object[] {user.getUserName(),user.getPassword()});
 
        return "Saved";
         
    }
 
    @Override
    public String update(User user) {
        jdbcTemplate.update(
            "UPDATE emp_master "
            +"SET username = ?,password = ? "
            +"WHERE id = ?",
            new Object[] {user.getUserName(),
                user.getPassword(),user.getId()});
        return "Updated";
         
    }
 
    @Override
    public String delete(Integer id) {
        jdbcTemplate.update(
            "DELETE FROM users WHERE id = ?",
            new Object[] {id});   
        return "Deleted";   
    }
}