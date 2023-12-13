const  supabase= require("../config/supabase");

async function createPost(id_user, content) {

    const { data: post, error } = await supabase.from('post').insert({id_user, content});
    //console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return post;
}

async function getPosts(id_bloc) {
  
     const { data: users, usersError } = await supabase
     .from('user')
     .select('*').eq('id_bloc',id_bloc);

     const { data: postsBloc, postsBlocerror } = await supabase
     .from('user')
     .select('*').eq('id_bloc',id_bloc);
    
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