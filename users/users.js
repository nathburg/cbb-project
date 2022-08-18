import { getProfiles } from '../fetch-utils.js';
import { renderProfile} from '../render-utils.js';

async function showProfiles() {
    const profilesEl = document.querySelector('#profiles');
    const profiles = await getProfiles();

    for (let profile of profiles) {
        const newProfile = renderProfile(profile);
        profilesEl.append(newProfile);
    }

    console.log(profiles);
}

showProfiles();
