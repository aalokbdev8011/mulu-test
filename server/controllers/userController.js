const Contacts = require("../models/contactModel");
const Agents = require("../models/agentModel");
const zipcodes = require("zipcodes");
const data = require("../configs/data");

const getContacts = async (req, res) => {
  const { zipCode, distance } = req.body;
  var rad = zipcodes.radius(zipCode, distance);
  try {
    const contacts = await Contacts.find({"zipCode" : { $in : rad }});
    return res.send({ contacts: contacts, success: true });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

const getAgents = async (req, res) => {
  const { zipCode } = req.body;
  try {
    const agents = await Agents.find({});
    return res.send({ agents: agents, success: true });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

const getUserProfile = async (req, res) => {
  const { userId } = req.body;
  let userProfile;

  try {
    userProfile = await Contacts.findOne({ userId: userId });
    if (!userProfile) {
      userProfile = await Agents.findOne({ userId: userId });
    }
    return res.send({ contactProfile: userProfile, success: true });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

const setContacts = async (req, res) => {
  try {
    var userData = await Contacts.find({});
    if (userData.length === 0) {
      await Contacts.insertMany(data.contacts);
      console.log("contact users feeded");
    }
  } catch (err) {
    return res.status(500).json({ response: error });
  }
};

const setAgents = async (req, res) => {
  try {
    var userData = await Agents.find({});
    if (userData.length === 0) {
      await Agents.insertMany(data.agents);
      console.log("agent users feeded");
    }
  } catch (err) {
    return res.status(500).json({ response: error });
  }
};

exports.getContacts = getContacts;
exports.getAgents = getAgents;
exports.getUserProfile = getUserProfile;
exports.setContacts = setContacts;
exports.setAgents = setAgents;
