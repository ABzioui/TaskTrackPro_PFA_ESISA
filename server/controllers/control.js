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
export const addProject = async (req, res) => {
  try {
    const {
      projectID,
      projectName,
      description,
      startDate,
      endDate,
      finished,
    } = req.body;

    console.log(
      projectID,
      projectName,
      description,
      startDate,
      endDate,
      finished
    );

    const newProject = new Project({
      projectID,
      projectName,
      description,
      startDate,
      endDate,
      finished,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
