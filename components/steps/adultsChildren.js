import React from 'react';
import Adults from './adults';
import Children from './children';

const AdultsChildren = ({title, stepQueAns, setStepQueAns, activeStepData}) => {
    return (
        <div>
            <Adults 
                title={title} 
                stepQueAns={stepQueAns} 
                setStepQueAns={setStepQueAns} 
                activeStepData={activeStepData}
            />
            {/* <Children /> */}
        </div>
    )
}

export default AdultsChildren