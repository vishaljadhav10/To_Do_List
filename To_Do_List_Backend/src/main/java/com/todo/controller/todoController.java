package com.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.todo.entity.ToDoList;
import com.todo.service.todoServiceImpl;

@CrossOrigin("*")
@RestController
@RequestMapping("/todo/task")
public class todoController {
	@Autowired
	todoServiceImpl todoSer;
	
	@PostMapping
	ResponseEntity<ToDoList> createTask(@RequestBody ToDoList todolist){
		ToDoList tdl = todoSer.createTask(todolist);
		return new ResponseEntity(tdl,HttpStatus.CREATED);
	}
	
	@GetMapping("{id}")
	ResponseEntity<ToDoList> getTaskById (@PathVariable("id") int id) {
		ToDoList tdl = todoSer.getTaskById(id);
		return new ResponseEntity(tdl, HttpStatus.OK);
	}
	
	@GetMapping
	ResponseEntity<List<ToDoList>> getAllTask(){
		List<ToDoList> tdl = todoSer.getAllTask();
		return new ResponseEntity(tdl,HttpStatus.OK);
	}
	
	@PutMapping("{id}")
	ResponseEntity<ToDoList> updateTaskById (@RequestBody ToDoList todolist,@PathVariable("id") int id) {
		ToDoList tdl = todoSer.updateTaskById(todolist, id);
		return new ResponseEntity(tdl,HttpStatus.OK);
	}
	
	@DeleteMapping("{id}")
	ResponseEntity<ToDoList> deleteTaskById(@PathVariable("id") int id){
		todoSer.deleteTaskById(id);
		return new ResponseEntity("Task deleted !!",HttpStatus.OK);
	}
	
	@PutMapping("/complete/{id}")
	ResponseEntity<ToDoList> completeTask(@PathVariable("id") int id){
		ToDoList tdl = todoSer.completeTask(id);
		return new ResponseEntity(tdl,HttpStatus.OK);
	}
	
	@PutMapping("/inComplete/{id}")
	ResponseEntity<ToDoList> inCompleteTask(@PathVariable("id") int id){
		ToDoList tdl = todoSer.inCompleteTask(id);
		return new ResponseEntity(tdl,HttpStatus.OK);
	}
}
