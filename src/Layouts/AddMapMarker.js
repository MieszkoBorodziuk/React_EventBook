import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';



const AddMapMarker = () => {

    const { events } = useContext(StoreContext);
    const markers = events.map(event => <marker key={event.id} markers={event.marker} />);

    console.log(markers)

    return (
        <>
         {markers[0].props.markers[0]}
            
        </>    
    );
}

export default AddMapMarker;
