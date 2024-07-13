import React from 'react'
import './FeatureItem.css'
import Ellipse from '../Ellipse/Ellipse'
const FeatureItem = () => {
    return (
        <div className='all-feature'>
            <div className='feature'>
                <div className='title-feature' >
                    <Ellipse />
                    <h4>Feature one</h4>
                </div>
                <p>
                    All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.
                </p>
            </div>
            <div className='feature'>
                <div className='title-feature' >
                    <Ellipse />
                    <h4>Feature two</h4>
                </div>
                <p>
                    All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.
                </p>
            </div>
            <div className='feature'>
                <div className='title-feature' >
                    <Ellipse />
                    <h4>Feature three</h4>
                </div>
                <p>
                    All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.
                </p>
            </div>

        </div>
    )
}

export default FeatureItem