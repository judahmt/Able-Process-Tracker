import DatabaseClient from "./example-database-client";

import Company from "@/models/company";
import CompanyDTO from "@/models/db-models/company";

import BackofficeOperator from "@/models/backoffice-operator";
import BackofficeOperatorDTO from "@/models/db-models/backoffice-operator";

import User from "@/models/user";
import UserDTO from "@/models/db-models/user";

import Task from "@/models/task";
import TaskDTO from "@/models/db-models/task";

//DTO class to class
export const mapCompanyDTOToCompany = (companyDTO) => {
  const company = new Company();
  company.id = companyDTO.id;
  company.name = companyDTO.name;
  return company;
};
export const mapBackofficeOperatorDTOToBackofficeOperator = (
  backofficeOperatorDTO
) => {
  const backofficeOperator = new BackofficeOperator();
  backofficeOperator.id = backofficeOperatorDTO.id;
  backofficeOperator.email = backofficeOperatorDTO.email;
  return backofficeOperator;
};
export const mapUserDTOToUser = (userDTO) => {
  const user = new User();
  user.id = userDTO.id;
  user.email = userDTO.email;
  user.company = DatabaseClient.getCompanyById(userDTO.companyId);
  return user;
};
export const mapTaskDTOToTask = (taskDTO) => {
  const task = new Task();
  task.sender = DatabaseClient.getBackofficeOperatorById(taskDTO.senderId);
  task.assignedTo = DatabaseClient.getUserById(taskDTO.assignedToId);
  task.documentType = taskDTO.documentType;
  task.deadline = taskDTO.deadline;
  task.urgency = taskDTO.urgency;
  task.additionalInfo = taskDTO.additionalInfo;
  return task;
};

//class to DTO class
export const mapCompanyToCompanyDTO = (company) => {
  const companyDTO = new CompanyDTO();
  companyDTO.id = company.id;
  companyDTO.name = company.name;
  return companyDTO;
};
export const mapBackofficeOperatorToBackofficeOperatorDTO = (
  backofficeOperator
) => {
  const backofficeOperatorDTO = new BackofficeOperatorDTO();
  backofficeOperatorDTO.id = backofficeOperator.id;
  backofficeOperatorDTO.email = backofficeOperator.email;
  return backofficeOperatorDTO;
};
export const mapUserToUserDTO = (user) => {
  const userDTO = new UserDTO();
  userDTO.id = user.id;
  userDTO.email = user.email;
  userDTO.companyId = user.company.id;
  return userDTO;
};
export const mapTaskToTaskDTO = (task) => {
  const taskDTO = new TaskDTO();
  taskDTO.senderId = task.sender.id;
  taskDTO.assignedToId = task.assignedTo.id;
  taskDTO.documentType = task.documentType;
  taskDTO.deadline = task.deadline;
  taskDTO.urgency = task.urgency;
  taskDTO.additionalInfo = task.additionalInfo;
  return taskDTO;
};
