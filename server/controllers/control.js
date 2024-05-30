import Project from "../models/Project.js";
import Task from "../models/Task.js";

export const getProjects = async (req, res) => {
  try {
    const allProjects = await Project.find().select("-password");
    res.status(200).json(allProjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const allTasks = await Task.find().select("-password");
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
