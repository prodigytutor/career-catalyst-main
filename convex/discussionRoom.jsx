import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getDiscussionRoom = query({
    args:{
        id: v.id('DiscussionRoom')
    },
    handler: async (ctx, args) => {
        const room = await ctx.db.get(args.id)
        if (!room) throw new Error("Room not found")
        return room;
    }
});
export const createNewRoom = mutation({
    args: v.object({
        coachingOptions: v.string(),
        topic: v.string(),
        expertName: v.string(),
        userId: v.string(),
    }),
    handler: async (ctx,args) => {
        console.log("createNewRoom args", args)
        //const userid = args.userid;
        if (!args.userId) throw new Error("User not authenticated");
    
        const newRoom = await ctx.db.insert("DiscussionRoom", {
        coachingOptions: args.coachingOptions,
        topic: args.topic,
        expertName: args.expertName,
        userId: args.userId,
        });
    
        return newRoom;
    },
})