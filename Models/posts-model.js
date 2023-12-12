const  supabase= require("../config/supabase");

async function createPost(id_user, content) {

    const { data: post, error } = await supabase.from('post').insert({id_user, content});
    //console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return post;
}

async function getPosts(id_user,id_bloc) {
  
    // const { data: posts, error } = await await await supabase
    // .from('user')
    // .select('*')
    // .match({ 'id_bloc': id_bloc })
    // .select('user.*, post.*').order('user.id_bloc.asc');
    const { data: userData, error: userError } = await supabase
      .from('user')
      .select('*')
      .order('id_bloc', { ascending: true });
    const { data: postData, error: postError } = await supabase
      .from('post')
      .select('*')
      .order(id_bloc, { ascending: true });
      const joinedData = {};
      if (userData && postData) {
        joinedData = userData.map(user => {
          const matchingPost = postData.find(post => post.idBloc === user.id_bloc) || {};
          return { ...user, ...matchingPost };
        });
    }
    console.log(joinedData);
    // if (error) {
    //   throw new Error(error.message);
    // }
    return joinedData;
}
  

  module.exports = {
    createPost,
    getPosts,
  };