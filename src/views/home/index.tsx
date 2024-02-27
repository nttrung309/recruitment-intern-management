import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/modules';

const Home = () => {
    const statusLogin = useSelector((state: RootState) => state.profile.statusLogin);
    console.log(statusLogin);
    return(
        <div>
            this's home!
        </div>
        
    )
}

export default Home;