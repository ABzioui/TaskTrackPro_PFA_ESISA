export const userData = [
  {
    userID: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: "password123",
    role: "manager",
    location: "United States",
    occupation: "Project Manager",
  },
  {
    userID: "2",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    password: "password456",
    role: "employee",
    location: "Canada",
    occupation: "Software Engineer",
  },
  {
    userID: "3",
    firstName: "Emily",
    lastName: "Johnson",
    email: "emily@example.com",
    password: "password789",
    role: "employee",
    location: "United Kingdom",
    occupation: "UI/UX Designer",
  },
  {
    userID: "4",
    firstName: "Michael",
    lastName: "Brown",
    email: "michael@example.com",
    password: "passwordABC",
    role: "employee",
    location: "Australia",
    occupation: "Software Developer",
  },
];
export const projectData = [
  {
    projectID: "1",
    projectName: "Web Development Project",
    description: "Developing a web application for a client.",
    startDate: "2024-04-01",
    endDate: "2024-08-30",
  },
  {
    projectID: "2",
    projectName: "Mobile App Development",
    description:
      "Developing a mobile application for iOS and Android platforms.",
    startDate: "2024-05-15",
    endDate: "2024-09-30",
  },
  {
    projectID: "3",
    projectName: "E-commerce Website Redesign",
    description:
      "Redesigning the existing e-commerce website to improve user experience.",
    startDate: "2024-06-01",
    endDate: "2024-10-31",
  },
];
export const taskData = [
  {
    taskID: "1",
    taskName: "Frontend Development",
    description: "Developing the user interface of the web application.",
    startDate: "2024-04-05",
    endDate: "2024-07-05",
    projectID: "1",
    userID: "2",
  },
  {
    taskID: "2",
    taskName: "Backend Development",
    description: "Implementing server-side logic and database integration.",
    startDate: "2024-05-20",
    endDate: "2024-08-20",
    projectID: "2",
    userID: "4",
  },
  {
    taskID: "3",
    taskName: "UI/UX Design",
    description: "Creating wireframes and visual designs for the mobile app.",
    startDate: "2024-05-30",
    endDate: "2024-08-30",
    projectID: "2",
    userID: "3",
  },
];
export const workHoursData = [
  {
    workHoursID: "1",
    date: "2024-04-10",
    hours: 8,
    taskID: "1",
    userID: "2",
  },
  {
    workHoursID: "2",
    date: "2024-05-25",
    hours: 6,
    taskID: "2",
    userID: "4",
  },
  {
    workHoursID: "3",
    date: "2024-06-05",
    hours: 7,
    taskID: "3",
    userID: "3",
  },
];
