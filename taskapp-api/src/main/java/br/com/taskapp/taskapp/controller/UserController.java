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

import br.com.taskapp.taskapp.dao.IUserDAO;
import br.com.taskapp.taskapp.model.User;

@RestController
@RequestMapping(value = "/user")
public class UserController
{
    @Autowired
    IUserDAO userDAO;
 
    @GetMapping(value = "/list")
    public List<User> getList() {
 
         return userDAO.getList();
    }
 
    @GetMapping(value = "/get/{id}")
    public User getById(@PathVariable(value = "id") Integer id) {
 
         return userDAO.getById(id);
    }

    @GetMapping(value = "/get/login/{username}")
    public User getByUserName(@PathVariable(value = "username") String username) {
 
         return userDAO.getByUserName(username);
    }
     
    @PostMapping(value = "/save")
    public String save(@Valid @RequestBody User user) {
 
         return userDAO.save(user);
    }
 
    @PutMapping(value = "/update")
    public String update(@Valid @RequestBody User user) {
 
         return userDAO.update(user);
    }
 
    @DeleteMapping(value = "/delete/{id}")
    public String delete(@PathVariable(value = "id") Integer id) {
 
         return userDAO.delete(id);
    }
}