import bcrypt from "bcrypt";
import User from "../models/User.js";

/* Enregister un utilisateur */

export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      country,
      occupation,
      phoneNumber,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      country,
      occupation,
      phoneNumber,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
