const  supabase= require("../config/supabase");

async function createTicket(id_user, problem, state) {

    const { data: post, error } = await supabase.from('ticket').insert({id_user, problem, state});
    //console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return post;
}


module.exports = {
    createTicket,
  };