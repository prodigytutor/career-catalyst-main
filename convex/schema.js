import { CoachingOptions } from "@/services/Options";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        // Define the fields for the users table
        name: v.optional( v.string( {default: "New User"} )), //{ type: "string", required: true },
        email: v.string(), //{ type: "string", required: true },
        credits: v.number({ default: 1000}), //{ type: "number", required: true, default: 0 },
        subscriptionId: v.optional( v.string() ), //{ type: "string", required: false, default: null },
    }),
    DiscussionRoom: defineTable({
        coachingOptions: v.string(), //{ type: "string", required: true },
        topic: v.string(), //{ type: "string", required: true },
        expertName: v.string(), //{ type: "string", required: true },
        conversation: v.optional(v.any()), //{ type: "any", required: false, default: null },
        userId: v.string(), //{ type: "string", required: true },
    }),
})