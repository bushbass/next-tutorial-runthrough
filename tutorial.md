- create-next-app
- cd into folder
- run vscode
- npm run dev
- remove main on index page
- remove footer too
- create quick header and footer
- make them components, say that this is just like regular react, we make components
- make components folder and put header and footer into it
- need to copy style import along with footer
- make a plain page, explain page based routing, say it's easier than react-router
- ok so we can add the header and footer here, but there's a better way
- copy layout component, briefly describe but just say this is typical thing you'd do in react
- now use Layout component in \_app.js to show that app applies to all pages
  -don't forget to remove header and footer from home page
- now that we have multiple pages make a nav using Link in header
- make a page with super basic getStaticProps with data from a 'fakeData.js' file - make it an array of objects so it can be mapped over
- this is all fine but kind of useless. the point here is before the return you can do an API call and get your data from somewhere else
- so let's do that. new file -> copy from withSimpleProps because it will be almost the same.
- add page to nav
- http://jsonplaceholder.typicode.com/guide/
- put the fetch call before the return in getStaticProps, check console.log in terminal becuase getStaicProps is not front end code
- save to const instaed of conole.log and then add it to props. comment out data.map above and just console.log the data in the browser
- now we can map over this array but let's make it only 10 entries by resaving it as userData.length = 10 (actually don't think we need to do this, it is only giving 10 entries after all)
- check entries in console and modify our previous map to use these entries
  -typically these entries would probably be their own component so let's extract them to a User component
- new file in components called User.jsx, cut and paste <li> into here with entry now as props. should look the same as before
- what we really want here though is for these entries on this page to be links to individual pages for each entry. this is where we will use dynamic routing and getStaticPaths. explain each
- leave this page for reference, but lets make a folder called users and copy this page into an index.jsx page in there. we should get the same page but at /users route (adjust path to components folder) add this to nav
- now we also want /users/1 to show us an individual page for that user. next is smart but we need to tell it to create pages for all of our entries. we use getStaticPaths
- basically copy the fetch from getStaticProps in index then map over the returned array to make an array of params ids, ids must be strings
- then we return that array of paths
- also call getStaticProps to get the individual entry from the API to use that data on the individual pages
- in the User component, use link to go to each page from basic listing
- up next SSR
-