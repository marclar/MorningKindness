# MorningKindness

Development in this repo should be test-driven. CI/CD using GitHub Actions and hosting at Vercel. Postgres is at Supabase
and SMS messaging and voice calls are executed via Twilio.

Code is written in TypeScript.

Morning Kindness is a system to provide wake-up phone calls at scheduled times. Authentication is done via SMS magic links.

The front end is a mobile-first web app with login / logout functionality as well as a scheduler for wake-up calls.

The scheduler allows the user to specify a time for each day of the week. The scheduler UI also includes 
a timezone selector that defaults to the system value.

There should be an "Admin" area that's restricted to the phone number "+16465191557" (as confirmed via magic link).

Within "Admin", there should be a page called "Greetings" with a table that renders the value of `const records = []` with a column for the record's
`phoneNumber` and `message`. `message` contains a URL pointing to an MP3 file, so please render a web player.

Also in Admin, there's a page called "Users" that just displays the registered users' phone numbers.

Let's use prisma to handle connections to Supabase. You can assume the environment contains:

```
JWT_SECRET=****
MAGIC_LINK_SECRET=****

NEXT_PUBLIC_BASE_URL=****
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=****

POSTGRES_PRISMA_URL=****
POSTGRES_URL_NON_POOLING=****
```

There's an API endpoint that's fetched every 5 minutes; this can be used to initiate outgoing wake-up calls to the 
appropriate users.