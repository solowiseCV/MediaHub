import mediaRoute from '../routes/media/media.route.js';
import playlistRoute from '../routes/playlist/playlist.route.js';
import authRoute from '../routes/authentication/auth.route.js';
import userRoute from '../routes/user/user.route.js';
import youtubeRoute from './mediaIntegrations/youtube/youtube.route.js';
import spotifyRoute from './mediaIntegrations/spotify/spotify.route.js';
import offlineRoute from './offline/offline.route.js';


export default (router)=>{
  router.use("/", mediaRoute);
  router.use("/", playlistRoute);
  router.use("/",authRoute);
  router.use("/users",userRoute);
  router.use("/",youtubeRoute);
  router.use("/",spotifyRoute);
  router.use("/",offlineRoute);

  return router;
};