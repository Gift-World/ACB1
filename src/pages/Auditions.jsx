import React from 'react';
// import HeaderAudition from "../components/HeaderAudition.jsx";
import HeroSectionAudition from "../components/HeroSectionAudition.jsx";
// import AuditionInfo from '../components/AuditionInfo';
import TalentSection from '../components/TalentSection';
// import SpotlightSection from '../components/SpotlightSection';
import SuccessStories from '../components/SuccessStories';
import VideoGalleryAudition from '../components/VideoGalleryAudition';
import Footer from '../components/Footer/Footer'
// import Footer from './components/Footer';

function Auditions() {
    return (
        <div className="bg-black text-white">
            {/*<HeaderAudition />*/}
            <HeroSectionAudition />
            {/*<AuditionInfo />*/}
            <TalentSection />
            {/*<SpotlightSection />*/}
            {/*<SuccessStories />*/}
            {/*<VideoGalleryAudition />*/}
            <Footer />
        </div>
    );
}

export default Auditions;