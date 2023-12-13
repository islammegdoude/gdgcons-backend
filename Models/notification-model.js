const  supabase= require("../config/supabase");

async function createNotification(target, id_project,id_bloc,description) {

    const { data: notification, error } = await supabase.from('notification').insert({target, id_project,id_bloc,description});
    //console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return notification;
}

async function getAllNotifications(id_project,id_bloc) {

    const { data: notificationProject, Projecterror } = await supabase.from('notification').select('*').eq('id_project',id_project).eq('target',"project");
    const { data: notificationBloc, Blocerror } = await supabase.from('notification').select('*').eq('id_project',id_bloc).eq('target',"bloc");

    const notification = notificationProject.concat(notificationBloc);
    console.log(notification)
    //console.log(user);
    if (Blocerror) {
      throw new Error(Blocerror.message);
    }
    if (Projecterror) {
        throw new Error(Projecterror.message);
      }
    return notification;
}

module.exports = {
    createNotification,
    getAllNotifications
  };