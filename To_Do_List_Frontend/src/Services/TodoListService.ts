import axios from "axios";

const baseUrl="http://localhost:8080/todo/task";

export const createTask = (todoTask:any)=>axios.post(baseUrl,todoTask);

export const getTaskById =(id:number)=>axios.get(baseUrl+"/"+id);

export const getAllTask=()=> axios.get(baseUrl);

export const updateTaskById=(todoTask:any,id:number)=>axios.put(baseUrl+"/"+id,todoTask);

export const deleteTaskById=(id:number)=>axios.delete(baseUrl+"/"+id);

export const complete=(id:number)=>axios.put(baseUrl+"/complete/"+id);

export const inComplete=(id:number)=>axios.put(baseUrl+"/inComplete/"+id);