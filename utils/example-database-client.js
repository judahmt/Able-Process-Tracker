import database from "./example-database";

/*
getBackofficeOperatorById(taskDTO.senderId);
getUserById(taskDTO.assignedToId);
*/

class DatabaseClient {
  static getCompanies() {
    return database.companies;
  }
  static getCompanyById(id) {
    return database.companies.find((company) => company.id === id) || null;
  }
  static getCompanyByName(name) {
    return database.companies.find((company) => company.name === name || null);
  }
  static addCompany(companyDTO) {
    database.companies.push(companyDTO);
  }

  static getBackofficeOperators() {
    return database.backofficeOperators;
  }
  static getBackofficeOperatorById(id) {
    return (
      database.backofficeOperators.find(
        (backofficeOperator) => backofficeOperator.id === id
      ) || null
    );
  }
  static addBackofficeOperator(backofficeOperatorDTO) {
    database.backofficeOperators.push(backofficeOperatorDTO);
  }

  static getUsers() {
    return database.users;
  }
  static getUserById(id) {
    return database.users.find((user) => user.id === id) || null;
  }
  static getUsersByCompanyId(companyId) {
    return database.users.filter((user) => user.companyId === companyId);
  }
  static addUser(userDTO) {
    database.users.push(userDTO);
  }

  static getTasks() {
    return database.tasks;
  }
  static getTasksByAssignedToId(assignedToId) {
    return database.tasks.filter((task) => task.assignedToId === assignedToId);
  }
  static getTasksByCompanyName(companyName) {
    //first get company by name, then users by company id, then tasks by assignedToId
    const company = this.getCompanyByName(companyName);
    if (!company) {
      return [];
    }

    const users = this.getUsersByCompanyId(company.id);
    let tasks = [];
    for (let i = 0; i < users.length; i++) {
      tasks = tasks.concat(this.getTasksByAssignedToId(users[i].id));
    }
    return tasks;
  }
  static addTask(taskDTO) {
    database.tasks.push(taskDTO);
  }
}

export default DatabaseClient;
