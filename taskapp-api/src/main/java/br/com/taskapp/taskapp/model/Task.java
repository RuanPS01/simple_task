package br.com.taskapp.taskapp.model;

import java.sql.Date;

public class Task {
    private Integer id;
    private String name;
    private String duration;
    private String local;
    private String date;
    private String guests;
 
    ////////////////////////////////////////////////////////////////////////
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    ////////////////////////////////////////////////////////////////////////
    public String getName() {
        return name;
    }
 
    public void setName(String name) {
        this.name = name;
    }

    ////////////////////////////////////////////////////////////////////////
    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    ////////////////////////////////////////////////////////////////////////
    public String getLocal() {
        return local;
    }
 
    public void setLocal(String local) {
        this.local = local;
    }

    ////////////////////////////////////////////////////////////////////////
    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
    
    ////////////////////////////////////////////////////////////////////////
    public String getGuests() {
        return guests;
    }
 
    public void setGuests(String guests) {
        this.guests = guests;
    }
}



 

 
    
