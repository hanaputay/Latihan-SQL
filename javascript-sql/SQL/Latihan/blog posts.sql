create database db_blog_posts;

use db_blog_posts;

create table users (
	id INT PRIMARY KEY,
    name VARCHAR(100)
);

create table categories(
	id INT PRIMARY KEY,
    name VARCHAR(100)
);

create table blog_posts(
	id INT PRIMARY KEY,
    title VARCHAR(100),
    body TEXT,
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES users (id)
);

create table post_categories(
	post_id INT,
    category_id INT,
    FOREIGN KEY (post_id) REFERENCES blog_posts(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

insert into users (id, name) values
(1, 'John Doe'),
(2, 'Robert'),
(3, 'Frank'),
(4, 'Jane');

insert into blog_posts (id, title, body, author_id) values
(1, 'Algorithm', 'this is article for algorithm', 1),
(2, 'Lore Ipsum', 'lore ipsum dolor sit amet', 1),
(3, 'NodeJS', 'Node.js is a JavaScript runtime built on Chromes V8 JavaScript engine', 2),
(4, 'ReactJS', 'ReactJS is JavaScript library for building user interfaces', 4),
(5, 'GIT', 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency', 3),
(6, 'Basketball', 'Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defenders hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court, while preventing the 
opposing team from shooting through their own hoop', 2);

insert into categories (id, name) values
(1, 'Basic'),
(2, 'Library'),
(3, 'Unknown'),
(4, 'Sport');

insert into post_categories (post_id, category_id) values
(1,1),
(2,3),
(3,1),
(3,2),
(4,2),
(4,1),
(5,1),
(6,4);


-- Menampilkan buku John Doe saja
select * from blog_posts
where author_id = (
	select id from users where name = 'John Doe'
);
 -- cara lain versi join
select b.id, b.title, b.body, u.name as author
from blog_posts b
join users u on b.author_id = u.id
where u.name = 'John Doe' ;

-- Menampilkan berdasarkan category basic
select c.name as category_name, b.title, u.name as author_name
from post_categories pc
join categories c on pc.category_id = c.id
join blog_posts b on pc.post_id = b.id
join users u on b.author_id = u.id
where c.name = 'Basic' ;

-- Menampilkan category name, post title, dan body yang ditulis robert dan frank
select c.name as category_name, b.title as post_title , b.body
from post_categories pc
join categories c on pc.category_id = c.id
join blog_posts b on pc.post_id = b.id
join users u on b.author_id = u.id
where u.name in ('Robert', 'Frank');

-- Menampilkan nama penulis dan nama category untuk artikel yang memiliki lebih dari atau sama dengan 2 category
select u.name as author_name, c.name as category_name
from post_categories pc
join categories c on pc.category_id = c.id
join blog_posts b on pc.post_id = b.id
join users u on b.author_id = u.id
where b.id in (
	select post_id
    from post_categories
    group by post_id
    having count(category_id) >= 2
);

-- Menampilkan nama penulis dan post title untuk artikel yang memiliki 1 category
select u.name as author_name, b.title as post_title
from blog_posts b
join users u on b.author_id = u.id
where b.id in(
	select post_id
    from post_categories
    
    group by post_id
    having count(category_id) = 1
);
