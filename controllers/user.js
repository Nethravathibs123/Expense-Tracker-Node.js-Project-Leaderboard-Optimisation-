const bcrypt = require('bcryptjs');
const User = require('../models/user'); // assuming User Sequelize model is in `models/user.js`

exports.signUp = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if email already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ message: "Email already in use" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new usconst signUpForm = document.getElementById("sign-up-form");

const errorMsg = document.getElementById('error');

let users = [];

const port = 3000;

signUpForm.addEventListener('submit', async(event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try{
        const response = await axios.post(`http://localhost:${port}/user/signup`,{username, email, password});
        users.push(response.data);

        document.getElementById('username').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";

        errorMsg.textContent = '';
    }
    catch(error){
        if(error.response && (error.response.status === 409 || error.response.status === 404)) {
            document.getElementById('email').value = "";
            document.getElementById('password').value = "";
            errorMsg.textContent = `Error: ${error.response.data.message}`;
        } else {
            console.log('Error adding user: ',error);
            errorMsg.textContent = '';
        }
    }
});er
        const user = await User.create({ username, email, password: hashedPassword });
        res.status(201).json(user);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Failed to sign up user" });
    }
};
