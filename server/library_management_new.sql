CREATE DATABASE library_management_new;
USE library_management_new;
/*
	Objective: Create a database to manage books, members, and borrowing records.
	Tables: Books, Members, Borrowings
	Queries: List overdue books, most borrowed books, and active members.
	Forms: Data entry forms for books and members.
	Reports: Generate reports on borrowing trends and overdue books.
    
    Members and Non-members can borrow books
    School Context
    
    Members can borrow multiple books at once
*/
CREATE TABLE student_details(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name TEXT NOT NULL,
    student_number VARCHAR(20) NOT NULL,
    year_level VARCHAR(20) NOT NULL,
    times_borrowed INT DEFAULT 0
); 

CREATE TABLE books(
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    authors VARCHAR(255) NOT NULL,
    description TEXT,
    edition VARCHAR(50),
    genre VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE membership(
		id INT PRIMARY KEY AUTO_INCREMENT,
        student_details_id INT,
        started_date DATE,
        due_date DATE,
        is_active BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(student_details_id) REFERENCES student_details(id)
);

CREATE TABLE borrows(
	id INT PRIMARY KEY AUTO_INCREMENT,
    isMember BOOLEAN DEFAULT FALSE,
    membership_id INT,
    student_details_id INT,
    book_id INT,
    date_borrowed DATE,
    due_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(membership_id) REFERENCES membership(id),
    FOREIGN KEY(book_id) REFERENCES books(id),
    FOREIGN KEY(student_details_id) REFERENCES student_details(id)
);

INSERT INTO books (title, authors, description, edition, genre)  
VALUES  
('Noli Me Tangere', 'José Rizal', 'A novel exposing the social injustices in the Philippines during Spanish colonial rule.', '1st Edition', 'Historical Fiction'),  
('El Filibusterismo', 'José Rizal', 'A sequel to Noli Me Tangere, this book portrays a darker and more revolutionary narrative of Filipino society.', '1st Edition', 'Historical Fiction'),  
('Florante at Laura', 'Francisco Balagtas', 'A classic Filipino metrical romance that depicts themes of love, betrayal, and patriotism.', '1st Edition', 'Epic Poetry'),  
('Dekada ''70', 'Lualhati Bautista', 'A story about a family living through the political turmoil of Martial Law in the Philippines.', '1st Edition', 'Political Fiction'),  
('Banaag at Sikat', 'Lope K. Santos', 'A pioneering novel exploring themes of socialism and agrarian reform in the Philippines.', '1st Edition', 'Social Realism'),  
('Mga Ibong Mandaragit', 'Amado V. Hernandez', 'A novel advocating social change and criticizing exploitation and inequality in Philippine society.', '1st Edition', 'Political Fiction'),  
('ABNKKBSNPLAko?!', 'Bob Ong', 'A humorous and nostalgic memoir about Filipino school life and growing up.', '1st Edition', 'Humor, Non-fiction'),  
('Smaller and Smaller Circles', 'F.H. Batacan', 'A crime novel about two Jesuit priests investigating murders in the slums of Manila.', 'Expanded Edition', 'Crime Fiction'),  
('Ilustrado', 'Miguel Syjuco', 'A meta-narrative about a Filipino author investigating the mysterious death of his mentor.', '1st Edition', 'Literary Fiction'),  
('Si Amapola sa 65 na Kabanata', 'Ricky Lee', 'A satirical novel about a gay impersonator navigating love, identity, and Filipino politics.', '1st Edition', 'Satire');  

INSERT INTO books (title, authors, description, edition, genre)  
VALUES  
('Ang Larawan: From Stage to Screen', 'Rolando Tinio and Nick Joaquin', 'A screenplay adaptation of Nick Joaquin’s play, exploring themes of art, family, and society.', '1st Edition', 'Drama'),  
('America Is in the Heart', 'Carlos Bulosan', 'A semi-autobiographical work about a Filipino immigrant’s struggles in the United States.', '1st Edition', 'Autobiography'),  
('Gapô', 'Lualhati Bautista', 'A novel that examines identity and racial discrimination through the life of a half-American Filipino.', '1st Edition', 'Social Realism'),  
('Ibong Adarna', 'Anonymous', 'A Filipino epic poem about the adventures of three princes in search of a magical bird.', '1st Edition', 'Epic Poetry'),  
('Dogeaters', 'Jessica Hagedorn', 'A satirical and poignant novel about Philippine society during the Marcos regime.', '1st Edition', 'Satire'),  
('Alamid: Chronicles of the Amulet Keeper', 'Kajo Baldisimo and Budjette Tan', 'A graphic novel set in the Trese universe, focusing on Filipino mythology and urban legends.', '1st Edition', 'Graphic Novel'),  
('Ang mga Kaibigan ni Mama Susan', 'Bob Ong', 'A mystery novel about a man unraveling dark secrets in his grandmother’s house.', '1st Edition', 'Mystery'),  
('The Woman Who Had Two Navels', 'Nick Joaquin', 'A novel exploring post-colonial identity and the spiritual disconnection of Filipinos.', '1st Edition', 'Literary Fiction'),  
('Patron Saints of Nothing', 'Randy Ribay', 'A young adult novel about a Filipino-American boy’s journey to uncover the truth about his cousin’s death.', '1st Edition', 'Young Adult Fiction'),  
('Trese: Murder on Balete Drive', 'Budjette Tan and Kajo Baldisimo', 'A graphic novel series featuring a detective solving supernatural crimes in Manila.', '1st Edition', 'Graphic Novel');  

INSERT INTO student_details (name, student_number, year_level)  
VALUES  
('Juan Dela Cruz', '2021-458123', 'Freshman'),  
('Maria Santos', '2022-894567', 'Sophomore'),  
('Jose Rizal', '2023-762891', 'Junior'),  
('Anna Reyes', '2021-391452', 'Freshman'),  
('Mark Gonzales', '2022-785341', 'Sophomore'),  
('Sophia Lopez', '2023-234567', 'Junior'),  
('Miguel Cruz', '2021-876231', 'Freshman'),  
('Isabella Torres', '2022-543218', 'Sophomore'),  
('Carlos Morales', '2023-129874', 'Junior'),  
('Angela Bautista', '2021-432987', 'Freshman'),  
('John Villanueva', '2022-659432', 'Sophomore'),  
('Catherine Mendoza', '2023-876543', 'Junior'),  
('Gabriel Santiago', '2021-345671', 'Freshman'),  
('Laura Hernandez', '2022-783214', 'Sophomore'),  
('Victor Castillo', '2023-412356', 'Junior'),  
('Elaine Navarro', '2021-567843', 'Freshman'),  
('Daniel Mercado', '2022-389721', 'Sophomore'),  
('Patricia Ramirez', '2023-765489', 'Junior'),  
('Christian Aguilar', '2021-894312', 'Freshman'),  
('Jessica Diaz', '2022-459827', 'Sophomore'),  
('Michael Flores', '2023-678941', 'Junior'),  
('Hannah Cruz', '2021-213984', 'Freshman'),  
('Francis Gutierrez', '2022-754326', 'Sophomore'),  
('Rachel Lim', '2023-389745', 'Junior'),  
('Steven Ong', '2021-567892', 'Freshman'),  
('Vanessa Rivera', '2022-892143', 'Sophomore'),  
('Bryan Tan', '2023-123987', 'Junior'),  
('Samantha Sy', '2021-347821', 'Freshman'),  
('Andrew Go', '2022-764591', 'Sophomore'),  
('Christine Yap', '2023-549382', 'Junior'); 

INSERT INTO membership (student_details_id, started_date, due_date, is_active)  
VALUES  
(5, '2024-01-10', '2024-07-10', TRUE),  
(12, '2024-02-15', '2024-08-15', FALSE),  
(8, '2024-03-01', '2024-09-01', TRUE),  
(22, '2024-01-20', '2024-07-20', TRUE),  
(15, '2024-04-05', '2024-10-05', TRUE),  
(3, '2024-02-25', '2024-08-25', TRUE),  
(19, '2024-03-12', '2024-09-12', TRUE),  
(7, '2024-01-18', '2024-07-18', TRUE),  
(14, '2024-02-10', '2024-08-10', TRUE),  
(25, '2024-03-22', '2024-09-22', TRUE),  
(9, '2024-01-05', '2024-07-05', FALSE),  
(30, '2024-02-20', '2024-08-20', TRUE),  
(4, '2024-03-15', '2024-09-15', TRUE),  
(17, '2024-01-30', '2024-07-30', FALSE),  
(10, '2024-02-08', '2024-08-08', TRUE),  
(21, '2024-03-07', '2024-09-07', TRUE),  
(6, '2024-01-25', '2024-07-25', TRUE),  
(28, '2024-02-12', '2024-08-12', FALSE);

INSERT INTO borrows (isMember, membership_id, student_details_id, book_id, date_borrowed, due_date)
VALUES 
(TRUE, 6, 3, 5, '2024-01-01', '2024-02-01'),
(TRUE, 3, 8, 3, '2024-01-05', '2024-02-05'),
(TRUE, 13, 4, 8, '2024-01-10', '2024-02-10'),
(FALSE, NULL, 27, 12, '2024-01-15', '2024-02-15'),
(FALSE, NULL, 20, 7, '2024-01-20', '2024-02-20'),
(TRUE, 16, 21, 10, '2024-01-25', '2024-02-25'),
(FALSE, NULL, 26, 14, '2024-01-30', '2024-02-28'),
(TRUE, 10, 25, 1, '2024-02-04', '2024-03-04'),
(TRUE, 8, 7, 6, '2024-02-09', '2024-03-09'),
(FALSE, NULL, 2, 11, '2024-02-14', '2024-03-14'),
(FALSE, NULL, 29, 4, '2024-02-19', '2024-03-19'),
(FALSE, NULL, 11, 9, '2024-02-24', '2024-03-24'),
(FALSE, NULL, 1, 2, '2024-03-01', '2024-04-01'),
(FALSE, NULL, 13, 13, '2024-03-06', '2024-04-06'),
(TRUE, 12, 30, 15, '2024-03-11', '2024-04-11');

SELECT * FROM books;
SELECT * FROM membership;
SELECT * FROM borrows;