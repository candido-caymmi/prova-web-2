const express = require('express');
const router = express.Router();
const { Usuario } = require('../models/usuarioModel');


router.post('/', async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    res.json(usuario);
  } catch (err) {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    await Usuario.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: 'Usuário atualizado com sucesso' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Usuario.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: 'Usuário excluído com sucesso' });
  } catch (err) {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
});

module.exports = router;