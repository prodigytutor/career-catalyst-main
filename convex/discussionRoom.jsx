import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createNewRoom = mutation({
    args: v.object({
        coachingOptions: v.string(),
        topic: v.string(),
        expertName: v.string(),
        userId: v.string(),
    }),
    handler: async (ctx,args) => {
        const userId = ctx.auth.userId;
        if (!userId) throw new Error("User not authenticated");
    
        const newRoom = await ctx.db.insert("DiscussionRoom", {
        coachingOptions: args.coachingOptions,
        topic: args.topic,
        expertName: args.expertName,
        userId: userId,
        });
    
        return newRoom;
    },
})