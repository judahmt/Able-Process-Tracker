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
  };
  return new Response(JSON.stringify(info));
}
