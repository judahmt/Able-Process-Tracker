import CompanyDTO from "@/models/db-models/company";
import UserDTO from "@/models/db-models/user";
import TaskDTO from "@/models/db-models/task";
import BackofficeOperatorDTO from "@/models/db-models/backoffice-operator";

// Simulated database object
const database = {
  companies: [
    new CompanyDTO(1, "The Best Company"),
    new CompanyDTO(2, "Other.Co"),
  ],
  users: [
    new UserDTO(1, "user1@TheBestCompany.com", 1),
    new UserDTO(2, "user2@TheBestCompany.com", 1),
    new UserDTO(3, "user3@other.co", 2),
  ],
  backofficeOperators: [new BackofficeOperatorDTO(1, "manager@able.co")],
  tasks: [
    new TaskDTO(
      1,
      1,
      "NDA",
      "11/08/2023",
      "Medium",
      "Please provide us with the information on www.ndaforms.com."
    ),
    new TaskDTO(
      1,
      2,
      "SOW",
      "11/09/2023",
      "Low",
      "Please provide us with the information on www.sowforms.com."
    ),
    new TaskDTO(
      1,
      2,
      "none",
      "12/09/2023",
      "Medium",
      "Detail definition of the project. Let's talk on Slack."
    ),
    new TaskDTO(
      1,
      3,
      "NDA",
      "01/08/2023",
      "High",
      "Please provide us with the information on www.ndaforms.com."
    ),
  ],
};

export default database;
