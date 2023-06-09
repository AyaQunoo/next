import NextAuth from "next-auth/server";
import GoogleProvider from 'next-auth/providers/google';
import User from "@models/user";
import sequelize from "@utils/database";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: '120111886097-er99p69quna208pvuupimkjm073pb996.apps.googleusercontent.com',
            clientSecret: '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'
        })
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                attributes: 'email',
                where: {
                    email: session.user.email
                }
            });
            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({ profile }) {
            try {
                await sequelize.sync();
                const userExists = await User.findOne({
                    attributes: 'email',
                    where: {
                        email: profile.email
                    }
                });
                if (!userExists) {
                    await User.create({
                        username: profile.name.replace(" ", "").toLowerCase(),
                        email: profile.email,
                        img: profile.picture,
                    });
                }
            } catch (err) {
                console.log(err);
            }
        }
    },
    secret: process.env.SECRET
});

export default handler;
