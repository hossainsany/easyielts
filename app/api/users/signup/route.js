import { connect } from '@/db/config';
import User from '@/models/user';
import bcryptjs from 'bcryptjs';
import { NextResponse } from 'next/server';

connect();

export const POST = async (request) => {
    try {
        const reqBody = await request.json();
        const { name, email, password } = reqBody;
        console.log(reqBody);

        //check if user exists
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ error: 'User already exists' }, { status: 400 });
        }

        //hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        //create new user
        const newUser = await new User({
            name,
            email,
            password: hashedPassword,
        }).save();

        console.log(newUser);

        return NextResponse.json(
            {
                message: 'user created successfully',
                success: true,
            },
            { status: 201 }
        );
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
};
