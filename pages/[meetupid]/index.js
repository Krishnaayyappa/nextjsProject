import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/meetupdetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

function Meetupdetails(props){
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description}/>
            </Head>
            <MeetupDetail image={props.meetupData.image}
            title={props.meetupData.title}
            adress={props.meetupData.address}
            description={props.meetupData.description} />
        </Fragment>
    )
}

export async function getStaticPaths(){
     // fetch data fro an api
     const client = await MongoClient.connect("mongodb+srv://Admin-krishna:iO4KVeK4qWJfGDRd@cluster0.yaob0.mongodb.net/meetups?retryWrites=true&w=majority");
     const db = client.db();
     const meetupsCollection = db.collection("meetups");
     const meetups = await meetupsCollection.find({}, {_id:1}).toArray();
     client.close();

     return {
        fallback:"blocking",
        paths: meetups.map((meetup) => ({
            params:{meetupid:meetup._id.toString()},
        }))   
    };
}



export async function getStaticProps(context){
   const meetupId = context.params.meetupid;
   const client = await MongoClient.connect("mongodb+srv://Admin-krishna:iO4KVeK4qWJfGDRd@cluster0.yaob0.mongodb.net/meetups?retryWrites=true&w=majority");
   const db = client.db();
   const meetupsCollection = db.collection("meetups");
   const selectedMeetup = await meetupsCollection.findOne({_id: new ObjectId(meetupId)});
   client.close();
   console.log(selectedMeetup);

   return {
    props:{
        meetupData: {
            id: selectedMeetup._id.toString(),
            image: selectedMeetup.image,
            title: selectedMeetup.title,
            address: selectedMeetup.address,
            description: selectedMeetup.description,
        },
    },
   };
}

export default Meetupdetails;
