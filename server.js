const express = require("express");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Website files
app.use(express.static(__dirname));

// Users file
const usersFile = path.join(__dirname, "users.json");

if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, "[]");
}

function getUsers() {
    return JSON.parse(fs.readFileSync(usersFile, "utf8"));
}

function saveUsers(users) {
    fs.writeFileSync(
        usersFile,
        JSON.stringify(users, null, 2)
    );
}


// =========================
// REGISTER
// =========================

app.post("/api/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 8 characters."
            });
        }

        const users = getUsers();

        const existingUser = users.find(
            user => user.email === email.toLowerCase()
        );

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email already registered."
            });
        }

        const passwordHash = await bcrypt.hash(password, 12);

        const newUser = {
            id: Date.now(),
            name: name,
            email: email.toLowerCase(),
            passwordHash: passwordHash,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);

        saveUsers(users);

        res.json({
            success: true,
            message: "Registration successful."
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Server error."
        });
    }
});


// =========================
// LOGIN
// =========================

app.post("/api/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required."
            });
        }

        const users = getUsers();

        const user = users.find(
            user => user.email === email.toLowerCase()
        );

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        const passwordCorrect = await bcrypt.compare(
            password,
            user.passwordHash
        );

        if (!passwordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        res.json({
            success: true,
            message: "Login successful.",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Server error."
        });
    }
});


app.listen(PORT, () => {
    console.log(`GlobalMove server running at http://localhost:${PORT}`);
});