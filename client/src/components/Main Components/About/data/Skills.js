import React from 'react';
//import icons for tags
import {DiJavascript1, DiReact, DiCss3, DiSass, DiLess, DiHtml5 , DiMysql, DiPostgresql, DiSqllite, DiPhotoshop, DiIllustrator} from 'react-icons/di'
import {FaCheck, FaRegFileVideo} from'react-icons/fa'

//Skills Data
export const frontEndSkills = ['Javascript', 'React.js', 'CSS', 'SASS', 'LESS', 'HTML']
export const backEndSkills = ['SQL', 'PostGresQL', 'SQLITE3', 'Express.js', 'GraphQL']
export const designSkills = ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere', 'Canva']

//Skills Icons
export const getSkillIcon = (skill) =>{
    switch(skill.toLowerCase()){
        case ('javascript'):
            return (<DiJavascript1/>)
        case ('react.js'):
            return (<DiReact/>)
        case ('css'):
            return (<DiCss3/>)
        case ('sass'):
            return (<DiSass/>)
        case ('less'):
            return (<DiLess/>)
        case ('html'):
            return (<DiHtml5/>)
        case ('sql'):
            return (<DiMysql/>)
        case ('postgresql'):
            return (<DiPostgresql/>)
        case ('sqlite3'):
            return (<DiSqllite/>)
        case ('express.js'):
            return (<DiJavascript1/>)
        case ('adobe photoshop'):
            return (<DiPhotoshop/>)
        case ('adobe illustrator'):
            return (<DiIllustrator/>)
        case ('adobe premiere'):
            return (<FaRegFileVideo/>)
        default:
            return (<FaCheck/>)
    }
}