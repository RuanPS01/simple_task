package br.com.taskapp.taskapp.controller;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.taskapp.taskapp.dao.ITaskDAO;
import br.com.taskapp.taskapp.model.Task;

@RestController
@RequestMapping(value = "/task")
public class TaskController
{
    @Autowired
    ITaskDAO taskDAO;
 
    @GetMapping(value = "/list")
    public List<Task> getList() {
 
         return taskDAO.getList();
    }
 
    @GetMapping(value = "/get/{id}")
    public Task getById(@PathVariable(value = "id") Integer id) {
 
         return taskDAO.getById(id);
    }
     
    @PostMapping(value = "/save")
    public String save(@Valid @RequestBody Task task) {
 
         return taskDAO.save(task);
    }
 
    @PutMapping(value = "/update")
    public String update(@Valid @RequestBody Task task) {
 
         return taskDAO.update(task);
    }
 
    @DeleteMapping(value = "/delete/{id}")
    public String delete(@PathVariable(value = "id") Integer id) {
 
         return taskDAO.delete(id);
    }
}