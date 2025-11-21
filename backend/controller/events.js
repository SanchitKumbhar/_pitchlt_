const async_handler = require("express-async-handler");
const Events = require("../models/events");

// Create new event (protected)
const createEvent = async_handler(async (req, res) => {
    const {
        pitch,
        event_type = "online",
        title,
        media = {},
        description,
    } = req.body;

    if (!title || !description || !pitch ) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    const newEvent = await Events.create({
        user: req.user?.user?.id || req.user?.user?._id,
        pitch,
        event_type,
        title,
        media,
        description,
    }); 

    console.log(newEvent);
    

    res.status(201).json({ message: "Event created", event: newEvent });
});

// Get all events (public)
const getEvents = async_handler(async (req, res) => {
    const events = await Events.find({ is_active: true })
        .populate("user", "username email")
        .populate("pitch_user", "username email")
        .populate("pitch");

    res.status(200).json({ count: events.length, events });
});

// Get single event by id (public)
const getEvent = async_handler(async (req, res) => {
    const event = await Events.findById(req.params.id)
        .populate("user", "username email")
        .populate("pitch_user", "username email")
        .populate("pitch");

    if (!event) return res.status(404).json({ message: "Event not found" });

    res.status(200).json(event);
});

// Update event (protected)
const updateEvent = async_handler(async (req, res) => {
    const event = await Events.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // only the owner (user) or pitch_user should be allowed — simple check
    const requesterId = req.user?.user?.id || req.user?.user?._id;
    if (String(event.user) !== String(requesterId) && String(event.pitch_user) !== String(requesterId)) {
        return res.status(403).json({ message: "Not authorized to update this event" });
    }

    const updates = req.body;
    Object.assign(event, updates);
    await event.save();

    res.status(200).json({ message: "Event updated", event });
});

// Delete/soft-delete event (protected)
const deleteEvent = async_handler(async (req, res) => {
    const event = await Events.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    const requesterId = req.user?.user?.id || req.user?.user?._id;
    if (String(event.user) !== String(requesterId) && String(event.pitch_user) !== String(requesterId)) {
        return res.status(403).json({ message: "Not authorized to delete this event" });
    }

    // soft delete
    event.is_active = false;
    await event.save();

    res.status(200).json({ message: "Event deleted" });
});

module.exports = {
    createEvent,
    getEvents,
    getEvent,
    updateEvent,
    deleteEvent,
};