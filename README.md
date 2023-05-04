# Setup App

Please go through the below details before you run the app.

## Environment Variables

For this app to work, you need to configure the following environment variables in your .env.local file so please create a .env.local file in the root of your project right next to readme.md and the file needs to look like this:

```
NEXT_PUBLIC_FOURSQUARE_API_KEY=<value>
AIRTABLE_API_KEY=<value>
AIRTABLE_BASE_KEY=<value>
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=<value>
```

#### PLEASE NOTE, 
You need to configure the above API keys by going to: 
[Foursquare](https://foursquare.com/), 
[Airtable](https://www.airtable.com/) and 
[Unsplash](https://unsplash.com/) for their respective keys. 


### To generate API keys for all 3 platforms

You need to sign up, create an account, create a project and generate an API key for each platform. Otherwise, the [course](https://bit.ly/3nRIsbi) walks you through how to create each one of those if you get stuck!

#### If don't have valid API keys i.e. they are empty, or you don't have a .env.local file with the above keys configured or above keys exists but no values are not configured inside that file then you will get the following error:
<img src="https://res.cloudinary.com/dkfnd7xy7/image/upload/v1659022098/Screen_Shot_2022-07-28_at_11.27.20_AM_l5apuq.png" width="600px" height="300px" />

