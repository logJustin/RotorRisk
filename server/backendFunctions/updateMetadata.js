import { clerkClient } from "@clerk/clerk-sdk-node";

app.post('/updateRole', async (req, res) => {

    const { role, userId } = req.body;

    await clerkClient.users.updateUserMetadata(userId, {
        publicMetadata: {
            "rank": "MAJ",
            "role": "MBO",
            "admin": false
        }
    });
    res.status(200).json({ success: true });
});