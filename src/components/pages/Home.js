import React from 'react'
import PersonalInfoSection from '../PersonalInfoSection.js'
import LatestInfoSection from '../LatestInfoSection.js'
import '../../App.css'

export default function Home() {
    return (
        <React.Fragment>
            <PersonalInfoSection />
            <LatestInfoSection />
        </React.Fragment>
    )
}
