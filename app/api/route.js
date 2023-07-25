import DatabaseClient from "@/utils/example-database-client";

export async function GET() {
  const info = {
    appName: "Able Process Tracker API",
    exampleDatabaseInfo: [
      DatabaseClient.getCompanies(),
      DatabaseClient.getCompanyByName("Other.Co"),
      DatabaseClient.getUserById(2),
      DatabaseClient.getBackofficeOperatorById(1),
    ],
    parsedUsers: DatabaseClient.getUsersByCompanyId(1),
    parsedTasks: DatabaseClient.getTasksByAssignedToId(1),
    parsedTasksCompany:
      DatabaseClient.getTasksByCompanyName("The Best Company"),
  };
  return new Response(JSON.stringify(info));
}
