package br.com.taskapp.taskapp.dao;
import br.com.taskapp.taskapp.model.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class TaskDAO implements ITaskDAO
{
    @Autowired
    JdbcTemplate jdbcTemplate;
     
    @Override
    public List<Task> getList() {
 
        return jdbcTemplate.query(
            "SELECT "
            +"id, name,duration,local,date,guests "
            +"FROM tasks ",
            new BeanPropertyRowMapper<>(Task.class));
    }
 
    @Override
    public Task getById(Integer id) {
        return jdbcTemplate.queryForObject(
            "SELECT id,name,duration,local,date,guests FROM tasks WHERE id = ?",
            new Object[] {id},new BeanPropertyRowMapper<>(Task.class));
    }
 
    @Override
    public String save(Task task) {
       jdbcTemplate.update(
            "INSERT INTO tasks "
            +"(name,duration,local,date,guests) "
            +"VALUES (?,?,?,?,?)", 
            new Object[] {task.getName(),task.getDuration(),task.getLocal(),task.getDate(),task.getGuests()});
 
        return "Saved";
         
    }
 
    @Override
    public String update(Task task) {
        jdbcTemplate.update(
            "UPDATE emp_master "
            +"SET name = ?,duration = ?,local = ?,date = ?,guests = ? "
            +"WHERE id = ?",
            new Object[] {task.getName(),
                task.getDuration(), task.getLocal(), task.getDate(), task.getGuests(), task.getId()});
        return "Updated";
         
    }
 
    @Override
    public String delete(Integer id) {
        jdbcTemplate.update(
            "DELETE FROM tasks WHERE id = ?",
            new Object[] {id});   
        return "Deleted";   
    }
}
