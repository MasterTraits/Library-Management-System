interface Column {
  uid: string;
  name: string;
  sortable?: boolean;
}

interface Book {
  id: number;
  title: string;
  authors: string;
  description: string;
  edition: string;
  genre: string;
}

interface StatusOption {
  name: string;
  uid: string;
}

const columns: Column[] = [
  { 
    name: 'ID', 
    uid: 'id', 
    sortable: true 
  },
  { 
    name: 'Title', 
    uid: 'title', 
    sortable: true 
  },
  { 
    name: 'Authors', 
    uid: 'authors', 
    sortable: true 
  },
  { 
    name: 'Description', 
    uid: 'description', 
    sortable: false 
  },
  { 
    name: 'Edition', 
    uid: 'edition', 
    sortable: true 
  },
  { 
    name: 'Genre', 
    uid: 'genre', 
    sortable: true 
  },
  { 
    name: 'Actions', 
    uid: 'actions', 
  }
];

const statusOptions: StatusOption[] = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"}
];


const books: Book[] = [
  {
    id: 1,
    title: 'Noli Me Tangere',
    authors: 'José Rizal',
    description: 'A novel exposing the social injustices in the Philippines during Spanish colonial rule.',
    edition: '1st Edition',
    genre: 'Historical Fiction'
  },
  {
    id: 2,
    title: 'El Filibusterismo',
    authors: 'José Rizal',
    description: 'A sequel to Noli Me Tangere, this book portrays a darker and more revolutionary narrative of Filipino society.',
    edition: '1st Edition',
    genre: 'Historical Fiction'
  },
  {
    id: 3,
    title: 'Florante at Laura',
    authors: 'Francisco Balagtas',
    description: 'A classic Filipino metrical romance that depicts themes of love, betrayal, and patriotism.',
    edition: '1st Edition',
    genre: 'Epic Poetry'
  },
  {
    id: 4,
    title: 'Dekada \'70',
    authors: 'Lualhati Bautista',
    description: 'A story about a family living through the political turmoil of Martial Law in the Philippines.',
    edition: '1st Edition',
    genre: 'Political Fiction'
  },
  {
    id: 5,
    title: 'Banaag at Sikat',
    authors: 'Lope K. Santos',
    description: 'A pioneering novel exploring themes of socialism and agrarian reform in the Philippines.',
    edition: '1st Edition',
    genre: 'Social Realism'
  },
  {
    id: 6,
    title: 'Mga Ibong Mandaragit',
    authors: 'Amado V. Hernandez',
    description: 'A novel advocating social change and criticizing exploitation and inequality in Philippine society.',
    edition: '1st Edition',
    genre: 'Political Fiction'
  },
  {
    id: 7,
    title: 'ABNKKBSNPLAko?!',
    authors: 'Bob Ong',
    description: 'A humorous and nostalgic memoir about Filipino school life and growing up.',
    edition: '1st Edition',
    genre: 'Humor, Non-fiction'
  },
  {
    id: 8,
    title: 'Smaller and Smaller Circles',
    authors: 'F.H. Batacan',
    description: 'A crime novel about two Jesuit priests investigating murders in the slums of Manila.',
    edition: 'Expanded Edition',
    genre: 'Crime Fiction'
  },
  {
    id: 9,
    title: 'Ilustrado',
    authors: 'Miguel Syjuco',
    description: 'A meta-narrative about a Filipino author investigating the mysterious death of his mentor.',
    edition: '1st Edition',
    genre: 'Literary Fiction'
  },
  {
    id: 10,
    title: 'Si Amapola sa 65 na Kabanata',
    authors: 'Ricky Lee',
    description: 'A satirical novel about a gay impersonator navigating love, identity, and Filipino politics.',
    edition: '1st Edition',
    genre: 'Satire'
  },
  {
    id: 11,
    title: 'Ang Larawan: From Stage to Screen',
    authors: 'Rolando Tinio and Nick Joaquin',
    description: 'A screenplay adaptation of Nick Joaquin\'s play, exploring themes of art, family, and society.',
    edition: '1st Edition',
    genre: 'Drama'
  },
  {
    id: 12,
    title: 'America Is in the Heart',
    authors: 'Carlos Bulosan',
    description: 'A semi-autobiographical work about a Filipino immigrant\'s struggles in the United States.',
    edition: '1st Edition',
    genre: 'Autobiography'
  },
  {
    id: 13,
    title: 'Gapô',
    authors: 'Lualhati Bautista',
    description: 'A novel that examines identity and racial discrimination through the life of a half-American Filipino.',
    edition: '1st Edition',
    genre: 'Social Realism'
  },
  {
    id: 14,
    title: 'Ibong Adarna',
    authors: 'Anonymous',
    description: 'A Filipino epic poem about the adventures of three princes in search of a magical bird.',
    edition: '1st Edition',
    genre: 'Epic Poetry'
  },
  {
    id: 15,
    title: 'Dogeaters',
    authors: 'Jessica Hagedorn',
    description: 'A satirical and poignant novel about Philippine society during the Marcos regime.',
    edition: '1st Edition',
    genre: 'Satire'
  },
  {
    id: 16,
    title: 'Alamid: Chronicles of the Amulet Keeper',
    authors: 'Kajo Baldisimo and Budjette Tan',
    description: 'A graphic novel set in the Trese universe, focusing on Filipino mythology and urban legends.',
    edition: '1st Edition',
    genre: 'Graphic Novel'
  },
  {
    id: 17,
    title: 'Ang mga Kaibigan ni Mama Susan',
    authors: 'Bob Ong',
    description: 'A mystery novel about a man unraveling dark secrets in his grandmother\'s house.',
    edition: '1st Edition',
    genre: 'Mystery'
  },
  {
    id: 18,
    title: 'The Woman Who Had Two Navels',
    authors: 'Nick Joaquin',
    description: 'A novel exploring post-colonial identity and the spiritual disconnection of Filipinos.',
    edition: '1st Edition',
    genre: 'Literary Fiction'
  },
  {
    id: 19,
    title: 'Patron Saints of Nothing',
    authors: 'Randy Ribay',
    description: 'A young adult novel about a Filipino-American boy\'s journey to uncover the truth about his cousin\'s death.',
    edition: '1st Edition',
    genre: 'Young Adult Fiction'
  },
  {
    id: 20,
    title: 'Trese: Murder on Balete Drive',
    authors: 'Budjette Tan and Kajo Baldisimo',
    description: 'A graphic novel series featuring a detective solving supernatural crimes in Manila.',
    edition: '1st Edition',
    genre: 'Graphic Novel'
  }
];

export { columns, books, statusOptions };