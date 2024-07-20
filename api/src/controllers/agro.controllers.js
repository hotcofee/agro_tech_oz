import { connection } from '../db/connection.js'

export const getPlantations = async (req, res) => {
    const result = connection.execute("SELECT * FROM users") //por editar la tabla
    res.json((await result).rows)
}

export const createUser = async (req, res) => {
    try {
        const { user_id, img_profile, full_name, email, number, profession, roll_company, } = req.body;
        const result = await connection.execute({ sql: "INSERT INTO users (user_id, img_profile, full_name, email, number, profession, roll_company) VALUES (?, ?, ?, ?, ?, ?, ?)", args: [user_id, img_profile,  full_name, email, number, profession, roll_company, ] })
        if (result.rowsAffected > 0) {
            res.json({ message: "User created" })
        }
    } catch (error) {
        console.log(error); 
    }
}