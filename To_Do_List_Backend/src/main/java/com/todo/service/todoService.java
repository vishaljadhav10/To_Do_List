package com.todo.service;

import java.util.List;

import com.todo.entity.ToDoList;

public interface todoService {

	ToDoList createTask(ToDoList todolist);

	ToDoList getTaskById(int id);

	List<ToDoList> getAllTask();

	ToDoList updateTaskById(ToDoList todolist, int id);

	void deleteTaskById(int id);
	
	ToDoList completeTask(int id);
	
	ToDoList inCompleteTask(int id);

}