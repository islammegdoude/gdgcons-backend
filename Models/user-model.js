const  supabase= require("../config/supabase");

async function register(full_name, email, password ,token,role,id_project,id_bloc,id_lot,phone,etage,type ) {

    const { data: user, error } = await supabase.from('user').insert({full_name, email, password ,token,role,id_project,id_bloc,id_lot,phone,etage,type});
    //console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return user;
}

async function login(email, password ) {
  
    const { data: user, error } = await supabase.from('user').select('token').eq('email',email).eq('password',password).limit(1);
    console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return user;
}
  

  module.exports = {
    register,
    login,
  };
  