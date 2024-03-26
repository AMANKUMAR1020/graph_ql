import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Layout, QueryResult } from '../components';
import { useParams } from 'react-router-dom';
import  TrackDetail from "../components/track-detail";

const GET_TRACK = gql`
query getTrack($trackId: ID!) {
  track(id: $trackId) {
    id
    length
    thumbnail
    title
    author {
      id
      name
      photo
    }
    modulesCount
    discription
    numberofViews
    modules {
      id
      title
      lenght
    }
  }
}
`;

const Track = () => {
  const { trackId = "" } = useParams();
  const { loading ,error, data} = useQuery(GET_TRACK,{
    variables:{trackId},
  })
  return <Layout>
    <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track}></TrackDetail>
    </QueryResult>
  </Layout>;
};
 
export default Track;








// import React from 'react';
// import { useQuery, gql } from '@apollo/client';
// import TrackCard from '../containers/track-card';
// import { Layout, QueryResult } from '../components';

// /** TRACKS gql query to retrieve all tracks */
// const TRACKS = gql`
//   query getTracks {
//     tracksForHome {
//       id
//       title
//       thumbnail
//       length
//       modulesCount
//       author {
//         name
//         photo
//       }
//     }
//   }
// `;

// /**
//  * Tracks Page is the Catstronauts home page.
//  * We display a grid of tracks fetched with useQuery with the TRACKS query
//  */
// const Tracks = () => {
//   const { loading, error, data } = useQuery(TRACKS);

//   return (
//     <Layout grid>
//       <QueryResult error={error} loading={loading} data={data}>
//         {data?.tracksForHome?.map((track, index) => (
//           <TrackCard key={track.id} track={track} />
//         ))}
//       </QueryResult>
//     </Layout>
//   );
// };

// export default Tracks;
