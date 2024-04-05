const { authMiddleware } = require('@clerk/nextjs');

module.exports = authMiddleware({
    publicRoutes: ['/api/webhooks(.*)'],
});

module.exports.config = {
    matcher: ['/(?!.+\\.[\\w]+$|_next).*', '/', '/(api|trpc)(.*)'],
};
