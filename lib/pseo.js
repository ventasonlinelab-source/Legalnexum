import {getCandidateLanding, getCandidateLandingPaths} from './pseo/route-catalog';
export function getLanding(locale,intent,location){return getCandidateLanding(locale,intent,location);}
export function getLandingPaths(){return getCandidateLandingPaths();}
