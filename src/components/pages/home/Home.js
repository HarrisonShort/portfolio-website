import React from 'react'
import PersonalInfoSection from './PersonalInfoSection'
import LatestInfoSection from './LatestInfoSection.js'
import '../../../App.js'

export default function Home() {
    document.title = 'Harrison Short - Home'

    return (
        <React.Fragment>
            <PersonalInfoSection />
            {/* <LatestInfoSection /> */}
        </React.Fragment>
    )
}
