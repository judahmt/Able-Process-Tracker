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
  static addCompany(company) {
    database.companies.push(company);
  }

  static getBackofficeOperatorById(id) {
    return (
      database.backofficeOperators.find(
        (backofficeOperator) => backofficeOperator.id === id
      ) || null
    );
  }

  static getUserById(id) {
    return database.users.find((user) => user.id === id) || null;
  }
}

export default DatabaseClient;
