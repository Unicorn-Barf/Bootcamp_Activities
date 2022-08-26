const { Application, User } = require('../models');

module.exports = {
  getApplications(req, res) {
    Application.find()
      .then((applications) => res.json(applications))
      .catch((err) => res.status(500).json(err));
  },
  getSingleApplication(req, res) {
    Application.findOne({ _id: req.params.applicationId })
      .then((application) =>
        !application
          ? res.status(404).json({ message: 'No application with that ID' })
          : res.json(application)
      )
      .catch((err) => res.status(500).json(err));
  },
  // TODO: Add comments to the functionality of the createApplication method
  createApplication(req, res) {
    // Creating a new Application document in the database
    Application.create(req.body)
      .then((application) => {
        // Finding a user with the req.body.userId value
        // Add the created application to the applications field for this user
        // new: true is returning updated user
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { applications: application._id } },
          { new: true }
        );
      })
      .then((user) =>
        // responds with either success or error if no user with user with that id
        !user
          ? res.status(404).json({
            message: 'Application created, but found no user with that ID',
          })

          : res.json('Created the application 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // TODO: Add comments to the functionality of the updateApplication method
  updateApplication(req, res) {
    // Updates an application by id from the req.params.applicationID
    // runValidators set to true so that validation will run on update, these are the validators in the schema
    // return new: true for the updated data
    Application.findOneAndUpdate(
      { _id: req.params.applicationId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((application) =>
        // responds with updated application document if successful error if no application
        !application
          ? res.status(404).json({ message: 'No application with this id!' })
          : res.json(application)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // TODO: Add comments to the functionality of the deleteApplication method
  deleteApplication(req, res) {
    // finds an application by req.params.applicationId
    // Removes if found
    Application.findOneAndRemove({ _id: req.params.applicationId })
      .then((application) =>
        !application
          ? res.status(404).json({ message: 'No application with this id!' })
          // Finds
          : User.findOneAndUpdate(
            {
              applications: {
                $in: req.params.applicationId
              }
            },
            { $pull: { applications: req.params.applicationId } },
            { new: true }
          )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
            message: 'Application created but no user with this id!',
          })
          : res.json({ message: 'Application successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
  // TODO: Add comments to the functionality of the addTag method
  addTag(req, res) {
    // finds application by id for update
    // adding new tags to this application that were sent with req.body
    // runValidators: true to run the validators
    Application.findOneAndUpdate(
      { _id: req.params.applicationId },
      { $addToSet: { tags: req.body } },
      { runValidators: true, new: true }
    )
      .then((application) =>
        // responds with new updated app if successful
        // else error message
        !application
          ? res.status(404).json({ message: 'No application with this id!' })
          : res.json(application)
      )
      .catch((err) => res.status(500).json(err));
  },
  // TODO: Add comments to the functionality of the addTag method
  removeTag(req, res) {
    // find application by id
    // pulls the tag specified by req.params.tagId
    Application.findOneAndUpdate(
      { _id: req.params.applicationId },
      { $pull: { tags: { tagId: req.params.tagId } } },
      { runValidators: true, new: true }
    )
      .then((application) =>
        // responds with new updated application
        // if no application is found or error, responds with message
        !application
          ? res.status(404).json({ message: 'No application with this id!' })
          : res.json(application)
      )
      .catch((err) => res.status(500).json(err));
  },
};
