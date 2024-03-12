export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const AVATAR =  "https://occ-0-2164-58.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB
    }
  };

  export const Upcoming = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

  export const IMG_CDN = "https://image.tmdb.org/t/p/w780/";

  export const LANG_SUPPORT = [
  {identity : "en",name : "English"},
  {identity : "tamil",name : "Tamil"},
  {identity : "spanish" ,name : "Spanish"}
  ];

