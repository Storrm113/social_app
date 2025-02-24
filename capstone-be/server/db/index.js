const express = require("express");
const {
  sendDirectMessage,
  sendGroupMessage,
  fetchDirectMessages,
  fetchGroupMessages,
} = require("./message");

const router = express.Router();

router.use(express.json());

// **API: Send a Direct Message**
router.post("/messages/direct", async (req, res) => {
  const { sender_id, receiver_id, content } = req.body;
  const message = await sendDirectMessage({
    senderId: sender_id,
    receiverId: receiver_id,
    content,
  });
  res.json(message);
});

// **API: Send a Group Message**
router.post("/messages/group", async (req, res) => {
  const { sender_id, group_id, content } = req.body;
  const message = await sendGroupMessage({
    senderId: sender_id,
    groupId: group_id,
    content,
  });
  res.json(message);
});

// **API: Get Direct Messages**
router.get("/messages/direct/:sender_id/:receiver_id", async (req, res) => {
  const { sender_id, receiver_id } = req.params;
  const messages = await fetchDirectMessages(sender_id, receiver_id);
  res.json(messages);
});

// **API: Get Group Messages**
router.get("/messages/group/:group_id", async (req, res) => {
  const { group_id } = req.params;
  const messages = await fetchGroupMessages(group_id);
  res.json(messages);
});

module.exports = router;
