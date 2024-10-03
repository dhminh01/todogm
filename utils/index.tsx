import { Calendar, CalendarDays, Grid2X2, Inbox } from "lucide-react";

export const primaryNavItems = [
  {
    name: "Inbox",
    link: "/loggedIn",
    icon: <Inbox className="w-4 h-4" />,
  },
  {
    name: "Today",
    link: "/loggedIn/today",
    icon: <Calendar className="w-4 h-4" />,
  },
  {
    name: "Upcoming",
    link: "/loggedIn/upcoming",
    icon: <CalendarDays className="w-4 h-4" />,
  },
  {
    name: "Filters & Labels",
    link: "/loggedIn/filter-labels",
    icon: <Grid2X2 className="w-4 h-4" />,
  },
];
