package com.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todo.entity.ToDoList;

public interface todoRepository extends JpaRepository<ToDoList, Integer>{

}
