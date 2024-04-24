package com.todo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.entity.ToDoList;
import com.todo.exception.resourceNotFoundException;
import com.todo.repository.todoRepository;

@Service
public class todoServiceImpl implements todoService {
	@Autowired
	todoRepository todoRep;
	
	@Override
	public ToDoList createTask(ToDoList todolist) {
		return todoRep.save(todolist);
	}
	
	@Override
	public ToDoList getTaskById (int id) {
		return todoRep.findById(id)
				.orElseThrow(()-> new resourceNotFoundException("Task with id "+id+" does not exist in database."));
	}
	
	@Override
	public List<ToDoList> getAllTask(){
		return todoRep.findAll();
	}
	
	@Override
	public ToDoList updateTaskById (ToDoList todolist,int id) {
		ToDoList temp = null;
		temp=todoRep.findById(id)
				.orElseThrow(()-> new resourceNotFoundException("Task with id "+id+" does not exist in database."));;
		temp.setTitle(todolist.getTitle());
		temp.setDescription(todolist.getDescription());
		temp.setCompleted(todolist.isCompleted());
		return todoRep.save(temp);
	}
	
	@Override
	public void deleteTaskById(int id) {
		todoRep.deleteById(id);
	}

	@Override
	public ToDoList completeTask(int id) {
		ToDoList temp = null;
		temp=todoRep.findById(id)
				.orElseThrow(()-> new resourceNotFoundException("Task with id "+id+" does not exist in database."));;
				temp.setCompleted(true);
				return todoRep.save(temp);
		
	}

	@Override
	public ToDoList inCompleteTask(int id) {
		// TODO Auto-generated method stub
		ToDoList temp = null;
		temp=todoRep.findById(id)
				.orElseThrow(()-> new resourceNotFoundException("Task with id "+id+" does not exist in database."));;
				temp.setCompleted(false);
				return todoRep.save(temp);
		
	}
	
	

}
