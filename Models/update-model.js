const  supabase= require("../config/supabase");

async function createUpdate(target, id_project,id_bloc,description) {

    const { data: update, error } = await supabase.from('update').insert({target, id_project,id_bloc,description});
    //console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return update;
}

async function getUpdatesByUser(id_project,id_bloc) {

    const { data: updatesProject, Projecterror } = await supabase.from('update').select('*').eq('id_project',id_project).eq('target',"project");
    const { data: updatesBloc, Blocerror } = await supabase.from('update').select('*').eq('id_project',id_bloc).eq('target',"bloc");

    const updates = updatesProject.concat(updatesBloc);
    console.log(updates)
    //console.log(user);
    if (Blocerror) {
      throw new Error(Blocerror.message);
    }
    if (Projecterror) {
        throw new Error(Projecterror.message);
      }
    return updates;
}

async function getImagesByUpdate(id_update) {

  const { data: images, error } = await supabase.from('image').select('*').eq('id_update',id_update);
  //console.log(user);
  if (error) {
    throw new Error(error.message);
  }
  return images;
}
module.exports = {
    createUpdate,
    getUpdatesByUser
  };