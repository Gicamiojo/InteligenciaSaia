const express = require('express');  
const Project = require('../models/projects');  
const router = express.Router(); 


//Função de registro do projeto
router.post('/', async (req, res) => {
    try {
      const { title, description, tasks } = req.body;
  
      const project = await Project.create({ title, description, user: req.userId });
  
      await Promise.all(tasks.map(async task => {
        const projectTask = new Task({ ...task, project: project._id });
  
        await projectTask.save();
  
        project.tasks.push(projectTask);
      }));
  
      await project.save();
  
      return res.send({ project });
    } catch (err) {
      return res.status(400).send({ error: 'Error creating new project' });
    }
  });



module.exports = app => app.use('/projects', router);