interface Column {
  name: string;
  uid: string;
  sortable?: boolean;
}

interface StatusOption {
  name: string;
  uid: string;
}

interface Student {
  id: number;
  name: string;
  student_number: string;
  year_level: string;
  started_date: string;
  due_date: string;
  status: string;
  avatar: string;
}

const columns: Column[] = [
  {
    name: "ID",
    uid: "id",
    sortable: true
  },
  {
    name: "Name",
    uid: "name",
    sortable: true
  },
  {
    name: "Student Number", 
    uid: "student_number",
    sortable: true
  },
  {
    name: "Year Level",
    uid: "year_level",
    sortable: true
  },
  {
    name: "Started Date",
    uid: "started_date",
    sortable: true
  },
  {
    name: "Due Date", 
    uid: "due_date",
    sortable: true
  },
  {
    name: "Status",
    uid: "status",
    sortable: true
  },
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions: StatusOption[] = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"}
];

const students: Student[] = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    student_number: "2021-458123", 
    year_level: "Freshman",
    started_date: "none",
    due_date: "none",
    status: "paused",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  },
  {
    id: 2,
    name: "Maria Santos", 
    student_number: "2022-894567",
    year_level: "Sophomore", 
    started_date: "2024-02-15",
    due_date: "2024-08-15", 
    status: "paused",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  {
    id: 3,
    name: "Jose Rizal",
    student_number: "2023-762891",
    year_level: "Junior", 
    started_date: "2024-02-25",
    due_date: "2024-08-25",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d"
  },
  {
    id: 4,
    name: "Anna Reyes",
    student_number: "2021-391452",
    year_level: "Freshman", 
    started_date: "2024-03-15",
    due_date: "2024-09-15",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d"
  },
  {
    id: 5,
    name: "Mark Gonzales",
    student_number: "2022-785341", 
    year_level: "Sophomore",
    started_date: "2024-01-10",
    due_date: "2024-07-10",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d"
  },
  {
    id: 6,
    name: "Sophia Lopez",
    student_number: "2023-234567",
    year_level: "Junior", 
    started_date: "none",
    due_date: "none",
    status: "paused",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  },
  {
    id: 7,
    name: "Miguel Cruz",
    student_number: "2021-876231",
    year_level: "Freshman", 
    started_date: "2024-01-18",
    due_date: "2024-07-18",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027007d"
  },
  {
    id: 8,
    name: "Isabella Torres",
    student_number: "2022-543218",
    year_level: "Sophomore",
    started_date: "2024-03-01", 
    due_date: "2024-09-01",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d"
  },
  {
    id: 9,
    name: "Carlos Morales",
    student_number: "2023-129874",
    year_level: "Junior", 
    started_date: "2024-01-05",
    due_date: "2024-07-05",
    status: "paused",
    avatar: "https://i.pravatar.cc/150?img=4"
  },
  {
    id: 10,
    name: "Angela Bautista",
    student_number: "2021-432987",
    year_level: "Freshman", 
    started_date: "2024-02-08",
    due_date: "2024-08-08",
    status: "active",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 11,
    name: "John Villanueva",
    student_number: "2022-659432",
    year_level: "Sophomore", 
    started_date: "none",
    due_date: "none",
    status: "paused",
    avatar: "https://i.pravatar.cc/150?img=8"
  },
  {
    id: 12,
    name: "Catherine Mendoza",
    student_number: "2023-876543",
    year_level: "Junior", 
    started_date: "2024-02-20",
    due_date: "2024-08-20",
    status: "active",
    avatar: "https://i.pravatar.cc/150?img=10"
  },
  {
    id: 13,
    name: "Gabriel Santiago",
    student_number: "2021-345671",
    year_level: "Freshman", 
    started_date: "none",
    due_date: "none",
    status: "paused",
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 14,
    name: "Laura Hernandez",
    student_number: "2022-783214",
    year_level: "Sophomore",
    started_date: "2024-02-10", 
    due_date: "2024-08-10",
    status: "active",
    avatar: "https://i.pravatar.cc/150?img=16"
  },
  {
    id: 15,
    name: "Victor Castillo",
    student_number: "2023-412356",
    year_level: "Junior", 
    started_date: "2024-04-05",
    due_date: "2024-10-05",
    status: "active",
    avatar: "https://i.pravatar.cc/150?img=15"
  },
  {
    id: 16,
    name: "Elaine Navarro",
    student_number: "2021-567843",
    year_level: "Freshman", 
    started_date: "2024-01-30",
    due_date: "2024-07-30",
    status: "paused",
    avatar: "https://i.pravatar.cc/150?img=20"
  },
  {
    id: 17,
    name: "Daniel Mercado",
    student_number: "2022-389721",
    year_level: "Sophomore", 
    started_date: "none",
    due_date: "none",
    status: "paused",
    avatar: "https://i.pravatar.cc/150?img=33"
  },
  {
    id: 18,
    name: "Patricia Ramirez",
    student_number: "2023-765489",
    year_level: "Junior", 
    started_date: "2024-03-12",
    due_date: "2024-09-12",
    status: "active",
    avatar: "https://i.pravatar.cc/150?img=29"
  },
  {
    id: 19,
    name: "Christian Aguilar",
    student_number: "2021-894312",
    year_level: "Freshman", 
    started_date: "none",
    due_date: "none",
    status: "paused",
    avatar: "https://i.pravatar.cc/150?img=50"
  },
  {
    id: 20,
    name: "Jessica Diaz",
    student_number: "2022-459827",
    year_level: "Sophomore", 
    started_date: "none",
    due_date: "none",
    status: "paused",
    avatar: "https://i.pravatar.cc/150?img=45"
  },
  {
    id: 21,
    name: "Michael Flores",
    student_number: "2023-678941",
    year_level: "Junior", 
    started_date: "2024-03-07",
    due_date: "2024-09-07",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  },
  {
    id: 22,
    name: "Hannah Cruz",
    student_number: "2021-213984",
    year_level: "Freshman", 
    started_date: "2024-01-20",
    due_date: "2024-07-20",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  {
    id: 23,
    name: "Francis Gutierrez",
    student_number: "2022-754326",
    year_level: "Sophomore", 
    started_date: "none",
    due_date: "none",
    status: "paused",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d"
  },
  {
    id: 24,
    name: "Rachel Lim",
    student_number: "2023-389745",
    year_level: "Junior", 
    started_date: "none",
    due_date: "none",
    status: "paused",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d"
  },
  {
    id: 25,
    name: "Steven Ong",
    student_number: "2021-567892",
    year_level: "Freshman", 
    started_date: "none",
    due_date: "none",
    status: "paused",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d"
  },
  {
    id: 26,
    name: "Vanessa Rivera",
    student_number: "2022-892143",
    year_level: "Sophomore",
    started_date: "2024-03-22", 
    due_date: "2024-09-22",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  },
  {
    id: 27,
    name: "Bryan Tan",
    student_number: "2023-123987",
    year_level: "Junior", 
    started_date: "none",
    due_date: "none",
    status: "paused",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027007d"
  },
  {
    id: 28,
    name: "Samantha Sy",
    student_number: "2021-347821",
    year_level: "Freshman", 
    started_date: "2024-02-12",
    due_date: "2024-08-12",
    status: "paused",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d"
  },
  {
    id: 29,
    name: "Andrew Go",
    student_number: "2022-764591",
    year_level: "Sophomore", 
    started_date: "none",
    due_date: "none",
    status: "paused",
    avatar: "https://i.pravatar.cc/150?img=4"
  },
  {
    id: 30,
    name: "Christine Yap",
    student_number: "2023-549382",
    year_level: "Junior", 
    started_date: "2024-02-20",
    due_date: "2024-08-20",
    status: "active",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];

export { columns, statusOptions, students };