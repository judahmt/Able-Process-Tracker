import DatabaseClient from "./example-database-client";

import Company from "@/models/company";
import CompanyDTO from "@/models/db-models/company";

import BackofficeOperator from "@/models/backoffice-operator";
import BackofficeOperatorDTO from "@/models/db-models/backoffice-operator";

import User from "@/models/user";
import UserDTO from "@/models/db-models/user";

import Task from "@/models/task";
import TaskDTO from "@/models/db-models/task";

export const mapCompanyDTOtoCompany = (companyDTO) => {
  const company = new Company();
  company.id = companyDTO.id;
  company.name = companyDTO.name;
  return company;
};
export const mapBackofficeOperatorDTOtoBackofficeOperator = (
  backofficeOperatorDTO
) => {
  const backofficeOperator = new BackofficeOperator();
  backofficeOperator.id = backofficeOperatorDTO.id;
  backofficeOperator.email = backofficeOperatorDTO.email;
  return backofficeOperator;
};
export const mapUserDTOtoUser = (userDTO) => {
  const user = new User();
  user.id = userDTO.id;
  user.email = userDTO.email;
  user.company = DatabaseClient.getCompanyById(userDTO.companyId);
  return user;
};
export const mapTaskDTOtoTask = (taskDTO) => {
  const task = new Task();
  task.sender = DatabaseClient.getBackofficeOperatorById(taskDTO.senderId);
  task.assignedTo = DatabaseClient.getUserById(taskDTO.assignedToId);
  task.documentType = taskDTO.documentType;
  task.deadline = taskDTO.deadline;
  task.urgency = taskDTO.urgency;
  task.additionalInfo = taskDTO.additionalInfo;
  return task;
};
