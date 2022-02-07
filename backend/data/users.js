import bcrypt from "bcryptjs"

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Raj Yadav',
        email: 'raj@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Abdul Razzak',
        email: 'abdul@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users