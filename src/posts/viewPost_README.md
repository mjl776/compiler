## Click on the ViewPosts Button 
To display the current posts on the website. Simply click the button for View Posts. It will show the author and the title + text of the post

## How was it Implemented?

Our posts are saved on a Google Firebase console. Where a document with the fields: Author, Title and Text is added to a collection of Posts. 

We need to import the FireBase posts using the SDK Function calls. 

1. import { getFirestore } from "@firebase/firestore";

Then we need to configure our firebase database by using the API Keys. 

We call the firebase database in viewposts.tsx using the await methods.