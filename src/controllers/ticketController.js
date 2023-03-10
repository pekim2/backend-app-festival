const knex = require('../database/index')
  
  module.exports = {
   
      
//GET Produtos
async getById(req, res){

    const { id } = req.params;

   const result = await knex('ingresso').where({ id });

    return res.json(result)
   },


async getAll(req, res){

   const result = await knex('ingresso');

    return res.json(result)
   },

// POST PRODUTOS
async create(req, res){
    try{
        const { nome } = req.body;
        const { data_evento } = req.body;
        const { valor } = req.body;
        const { quantidade } = req.body;
        const { foto } = req.body;
        const { foto_disponivel } = req.body;
        const { foto_indisponivel } = req.body;

        await knex('ingresso').insert({
            nome,
            data_evento,
            valor,
            quantidade,
            foto,
            foto_disponivel,
            foto_indisponivel
        });
        return res.status(201).send();
}
catch(error){
    console.log(error);
}
},

// PUT PRODUTOS
async update(req, res){
    try{
            const { id } = req.params;
            const { nome } = req.body;
            const { data_evento } = req.body;
            const { valor } = req.body;
            const { quantidade } = req.body;
            const { foto } = req.body;
            const { foto_disponivel } = req.body;
            const { foto_indisponivel } = req.body;

            await knex('ingresso').update({
                nome,
                data_evento,
                valor,
                quantidade,
                foto,
                foto_disponivel,
                foto_indisponivel
        }).where({id});
        return res.status(201).send();
}
catch(error){
    console.log(error);
}
},
        async delete(req, res){
        try{
            const { id } = req.params;

            await knex('ingresso').where({ id }).del();

            return res.send();
        }
        catch(error){
            console.log(error);
        }
    }
}