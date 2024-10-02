import { connect } from '@/db/config';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect();

export const POST = async (request) => {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        //check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: 'User does not exist' }, { status: 400 });
        }

        //check if password correct
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({ error: 'Email/password not valid.' }, { status: 400 });
        }

        //create token and token data
        const tokenData = {
            id: user._id,
            name: user.name,
            email: user.email,
        };
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_TOKEN, { expiresIn: '14d' });

        const response = NextResponse.json({ message: 'login successful', success: true });
        response.cookies.set('token', token, {
            httpOnly: true,
        });

        return response;
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
};
