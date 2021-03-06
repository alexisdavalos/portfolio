import React from 'react';
//import Skills helper function
import { getSkillIcon } from './data/Skills.js'
const Tag = ({skill}) => {
    return (
        <div className="field is-grouped is-grouped-multiline">
            <div className="control">
                <div className="tags has-addons">
                    <span className="tag is-dark">
                        {getSkillIcon(skill)}
                    </span>
                    <span className="tag is-info">{skill}</span>
                </div>
            </div>
        </div>
    )
}

export default Tag;