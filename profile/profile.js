import { getUser, getProfile } from '../fetch-utils.js';
import { renderProfile } from '../render-utils.js';

async function showUser() {
    const userEl = document.querySelector('#user');
    const userNameEl = document.querySelector('[name = name]');
    const userBioEl = document.querySelector('[name = bio');
    const user = await getUser();
    const userId = user.id;
    const profile = await getProfile(userId);
    userNameEl.value = profile.data.name;
    userBioEl.value = profile.data.bio;

}

showUser();
