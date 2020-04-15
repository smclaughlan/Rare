# Endpoints

## Front Endpoints
- "/"
  - Splash Page
- "/login"
  - Session Form
- "/register"
  - Registration Form
- "/users/:userId"
  - Profile Page
  - Liked Stories & Bio
  - Stories Written
- "/stories/:storyId"
  - Story Page (for viewing)
- "stories/new"
  - Story Creation Page
- "stories/:storyId/edit"
  - Story Edit Page

## API Endpoints
- Users
  - GET /api/users
    - return data from user table
  - POST /api/users
    - add user to users table
  - GET /api/users/:id
    - return specific user from users table
  - PUT /api/users/:id
    - update specific user from users table
  - DELETE /api/users/:id
    - delete specific user from users table
- Session
  - POST /api/session
  - DELETE /api/session
- Stories
    - GET /api/stories
      - return data from stories table
  - POST /api/stories
    - add story to stories table
  - GET /api/stories/:id
    - return specific story from stories table
  - PUT /api/stories/:id
    - update specific story from stories table
  - DELETE /api/stories/:id
    - delete specific story from stories table
- Likes
    - POST /api/stories/:articleId/likes
      - Add a like to story
    - DELETE /api/stories/:articleId/likes
      - Remove a like from story
    - POST /api/comments/:commentId/likes
      - Add a like to comment
    - DELETE /api/comments/:commentId/likes
      - Remove a like from comment
- Comments
  - GET /api/comments
    - return data from comments table
  - POST /api/comments
    - add comment to comments table
  - GET /api/comments/:id
    - return specific comment from comments table
  - PUT /api/comments/:id
    - update specific comment from comments table
  - DELETE /api/comments/:id
    - delete specific comment from comments table
- Images
  - GET /api/image/:id
    - Get image from database
  - GET /api/image/:name
    - Get image from database based on image name