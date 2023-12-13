const  supabase= require("../config/supabase");

async function createPost(id_user, content, id_bloc) {

    const { data: post, error } = await supabase.from('post').insert({id_user, content, id_bloc});
    //console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return post;
}

async function getPosts(id_bloc) {

    const { data: posts, error } = await supabase.from('post').select('*').eq('id_bloc',id_bloc);
    //.filter('id_bloc', 'eq', id_bloc)
    console.log(posts);
    if (error) {
      throw new Error(error.message);
    }
    return posts;
}
  

  module.exports = {
    createPost,
    getPosts,
  };