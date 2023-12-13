const  supabase= require("../config/supabase");

async function createTicket(id_user, problem, state) {

    const { data: ticket, error } = await supabase.from('ticket').insert({id_user, problem, state});
    //console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return ticket;
}
async function getTicketById(id_user) {

    const { data: tickets, error } = await supabase.from('ticket').select('*').eq('id_user',id_user);
    //console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return tickets;
}


module.exports = {
    createTicket,
    getTicketById
  };