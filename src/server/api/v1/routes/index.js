/*
Import the external libraries:
- express
*/
import express from 'express';

/*
Import the internal libraries:
- blog.routes.js
- category.routes.js
- post.routes.js
*/
import AuthService from '../service';
import authRouter from './auth.routes';
import blogRouter from './blog.routes';
import categoryRouter from './category.routes';
import postRouter from './post.routes';
import userRouter from './user.routes';
import projectRouter from './project.routes';
import projectImageRouter from './projectImage.routes';
import eventRouter from './event.routes';
import teamRouter from './team.routes';
import testimonialRouter from './testimonial.routes';

// Initialize the AuthService
const authService = new AuthService();

// Define and initiate an express router
const apiV1Router = express.Router();
authRouter(apiV1Router, authService);
blogRouter(apiV1Router, authService);
categoryRouter(apiV1Router, authService);
postRouter(apiV1Router, authService);
userRouter(apiV1Router, authService);
projectRouter(apiV1Router, authService);
projectImageRouter(apiV1Router, authService);
eventRouter(apiV1Router, authService);
teamRouter(apiV1Router, authService);
testimonialRouter(apiV1Router, authService);

export default apiV1Router;
