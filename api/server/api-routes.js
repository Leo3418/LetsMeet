// api-routes.js
// Initialize express router
let router = require("express").Router();
// Set default API response
router.get("/", function (req, res) {
  res.json({
    status: "Live",
    message: "LetsMeet API",
  });
});
// Import user controller
let userController = require("./controllers/userController");
<<<<<<< HEAD
let groupController = require("./controllers/groupController");
=======
let groupController = require("./controllers/groupController")
// Import meeting controller
var meetingController = require("./controllers/meetingController");

>>>>>>> 8acf7fb689d52c7616fd7f4322c8bc2e5062b8c5
// User routes

// Create user
router.route("/user/create").post(userController.register);

//Login user
router.route("/user/login").post(userController.login);

// Get user by Id
router
  .route("/user/:userId")
  .get(userController.view)
  .delete(userController.delete)
  .patch(userController.update);

//Get user groups
router.route("/user/groups/:userId").get(userController.userGroups);

//Get users by username
router.route("/users/:username").get(userController.usersByUsername);

//Add group to list of group requests the user has
router
  .route("/user/addGroupRequest/:userId/:groupId")
  .post(userController.addGroupRequest);

// Remove group request from the list of group requests the user has
router
  .route("/user/removeGroupRequest/:userId/:groupId")
  .post(userController.removeGroupRequest);

// Add group to the list of user's groups
router.route("/user/addGroup/:userId/:groupId").post(userController.addGroup);

// Remove group from the list of user's groups
router
<<<<<<< HEAD
  .route("/user/removeGroup/:userId/:groupId")
  .post(userController.removeGroup);
=======
  .route('/user/removeGroup')
  .post(userController.removeGroup)

// Get user meetings
router
  .route('/user/meetings/:userId')
  .get(userController.userMeetings);

// Add meeting to the list of user's meetings
router
  .route('/user/addMeeting')
  .post(userController.addMeeting);

// Remove meeting from the list of user's meetings
router
  .route('/user/removeMeeting')
  .post(userController.removeMeeting);


  //// Group paths ////
>>>>>>> 8acf7fb689d52c7616fd7f4322c8bc2e5062b8c5

//// Group paths ////

// Create a group
router.route("/groups").post(groupController.create);

// Delete a group
router.route("/group/delete").delete(groupController.delete);

//Get all the details about the group
router.route("/group/:groupId").get(groupController.view);

// // Get the group's name and id
router.route("/group/name/:groupId").get(groupController.name);

// // Change the group's name
router.route("/group/rename").post(groupController.rename);

// //Add member to the group
router.route("/group/addMemeber").post(groupController.addMember);

// //Add member to the group
router.route("/group/addMemeber").post(groupController.addMember);

// //Remove member the group
router.route("/group/removeMemeber").post(groupController.removeMember);

// // Add member request to the group
router.route("/group/addMemberRequest").post(groupController.addMemberRequest);

// // Remove member request from the group
router
  .route("/group/removeMemberRequest")
  .post(groupController.removeMemberRequest);

// // Add meeting request to the group
router
  .route("/group/addMeetingRequest")
  .post(groupController.addMeetingRequest);

// // Remove meeting request from the group
router
  .route("/group/removeMeetingRequest")
  .post(groupController.removeMeetingRequest);


  //// Meeting paths ////


// Create a meeting
router
  .route('/meetings')
  .post(meetingController.create);

// Delete a meeting
router
  .route('/meeting/delete/:meetingId')
  .delete(meetingController.delete);

// Get all the details about a meeting
router
  .route('/meeting/:meetingId')
  .get(meetingController.view);

// Confirm a meeting
router
  .route('/meeting/confirm/:meetingId')
  .post(meetingController.confirm);

// Unconfirm a meeting
router
  .route('/meeting/unconfirm/:meetingId')
  .post(meetingController.unconfirm);


// Export API routes
module.exports = router;
