import { getUser, getProfile, saveProfile } from '../fetch-utils.js';
// import { renderProfile } from '../render-utils.js';

const formEl = document.querySelector('#user');

let userId = '';

async function showUser() {
    const userNameEl = document.querySelector('[name = name]');
    const userBioEl = document.querySelector('[name = bio');
    const user = await getUser();
    userId = user.id;
    const profile = await getProfile(userId);
    userNameEl.value = profile.data.name;
    userBioEl.value = profile.data.bio;
}

showUser();


formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formEl);
    const profile = {
        id: userId,
        name: formData.get('name'),
        bio: formData.get('bio')
    };
    saveProfile(profile);
    alert('Profile saved.');
});
