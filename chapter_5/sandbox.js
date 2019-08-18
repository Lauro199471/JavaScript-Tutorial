let user ={
    name: "someName",
    age: 29,
    email: "SomeEmail@gmail.com",
    location: "Norwalk",
    blogs: ["Why mac a& cheese rule" , "10 things when your bored"],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log("the user logged off");
    },
    logBlogs: function(){
        console.log(this.blogs);
        console.log('the user has written the following blogs: ');
        this.blogs.forEach(blog=>{
            console.log(blog);
        });
    }
};

console.log(user.name)
user.name = "Lauro"
console.log(user.name)

console.log(typeof user);
console.log(typeof user.name);

user.login();
user.logBlogs();