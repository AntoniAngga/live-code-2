const express = require('express');
const router = express.Router();
const cArtikel = require('../controller/cArtikel');

router.get('/',cArtikel.artikel_get);
router.get('/:id',cArtikel.artikel_getbyid);
router.post('/',cArtikel.artikel_post);
router.put('/:id',cArtikel.artikel_put);
router.get('/author/:author',cArtikel.artikel_getauthor);
router.get('/category/:category',cArtikel. artikel_getcategory);
router.delete('/:id',cArtikel. artikel_delete)

module.exports = router;
