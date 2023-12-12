const  supabase= require("../config/supabase");

async function createPost(id_post, id_user, content) {

    const { data: post, error } = await supabase.from('post').insert({id_post, id_user, content});
    //console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return post;
}

async function getPosts(id_user) {
  
    const { data: posts, error } = await supabase.from('post').select('*').eq('id_user',id_user);
    console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return posts;
}
  

  module.exports = {
    createPost,
    getPosts,
  };