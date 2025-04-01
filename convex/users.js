import { v } from "convex/values";
import { mutation } from "./_generated/server";
export const createUser = mutation({
    args: {
        name: v.optional( v.string() ),
        email: v.string(),
    },
    // Define the return type of the mutation
    //returns: v.null(),
    handler: async ( ctx, args ) => {
        // Destructure name and email from args
        const { name = 'New User', email } = args;

        // Insert a new user into the users table
        if (!email) {
            console.error("Email is required to create a user.");
            throw new Error("Email is required.");
        }
        console.log("Received args", { args });
        console.log("Context received:", ctx);
        const existingUser = await ctx.db.query('users')
            .filter((q) => q.eq(q.field('email'), email))
            .collect();
        
        console.log("Existing users with the same email:", existingUser);
        if (existingUser?.length == 0) {
            console.log("No existing user found with the same email. Creating a new user...");
            // If a user with the same email already exists, return their ID
            const data = {
            name, // Use destructured name
            email, // Use destructured email
            credits: 5000, // Default credits 
            }
            console.log("Creating new user with data:", data);
            const userId = await ctx.db.insert('users', {
            name: data.name,
            email: data.email,
            credits: data.credits, // Default credits for new users 
            });
            console.log('New user created with ID:', userId);
            return data;
        }

        return existingUser[0]; // Return the existing user data
    }
})