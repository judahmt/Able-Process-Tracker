export async function GET() {
  const info = { appName: "Able Process Tracker API" };
  return new Response(JSON.stringify(info));
}
