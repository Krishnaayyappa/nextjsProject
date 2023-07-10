import MeetupList from "../components/meetups/MeetupList"
import { MongoClient } from "mongodb"; // will not be included in the client side bundle by next js.
import Head from "next/head";
import { Fragment } from "react";


// const meetups = [{
//     id:'m1',
//     title:"A First meetup",
//     image:"https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2019/09/26105755/fish-1.jpg",
//     address: "1-5192 av walkley",
//     description:"lorem ipsum"
// },
// {
//     id:'m2',
//     title:"A second meetup",
//     image:"http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQ-FtB4Zbi27FOO2M986JAcclSLDb5XvT3pmEXhLwixdzBggSU-2NqjK1S_brJUKMos",
//     address: "1-5192 av walkley",
//     description:"lorem ipsum"
// }
// ] 

function Homepage(props){
    return (
        <Fragment>
            <Head>
                <title>React meetups</title>
                <meta name="description" content="Browse a huge list of highly active react meetups" />
            </Head>
            <MeetupList meetups={props.meetups}/>
        </Fragment>
    )
    
}

export async function getStaticProps(){
    const client = await MongoClient.connect("mongodb+srv://Admin-krishna:iO4KVeK4qWJfGDRd@cluster0.yaob0.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find().toArray();
    client.close();

    return {
        props:{
            meetups:meetups.map(meetup => ({
                title:meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate:1
    };

}

export default Homepage;