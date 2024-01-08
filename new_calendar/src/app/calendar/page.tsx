import Calendar from "../components/Calendar";
import { currentUser } from "@clerk/nextjs";

export default async function NewCalendar() {
  const user = await currentUser();
  const plainUser = JSON.parse(JSON.stringify(user));
  return (
  
    <Calendar user={plainUser} />

  );
}
