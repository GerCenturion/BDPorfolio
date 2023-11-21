import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({
      where: {
        active: true,
      },
    });
    res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const { name, description, link, image } = req.body;

  try {
    const newProyect = await Project.create({
      name,
      description,
      link,
      image,
      active: true,
    });
    res.json(newProyect);

    res.send("creating projects");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, description, link, active } = req.body;

  try {
    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(404).json({ message: "Proyecto no encontrado." });
    }

    if (name) {
      project.name = name;
    }
    if (description) {
      project.description = description;
    }
    if (link) {
      project.link = link;
    }
    if (image) {
      project.image = image;
    }
    if (active) {
      project.active = active;
    }

    await project.save();

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(404).json({ message: error.message });
    }

    project.active = false;
    await project.save();

    res.json({ message: "Proyecto desactivado exitosamente." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProjectById = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(404).json({ message: error.message });
    }

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
