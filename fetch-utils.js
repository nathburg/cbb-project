const SUPABASE_URL = 'https://iiheuanoirgtlmgbnvou.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpaGV1YW5vaXJndGxtZ2Judm91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA2MTA4MjAsImV4cCI6MTk3NjE4NjgyMH0.0nFD2sYSDNfeuHIBj-7JNMLMp8hUsGMk6J90sU5381w';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export function checkAuth() {
    const user = getUser();
    if (!user) location.replace(`/auth/?redirectUrl=${encodeURIComponent(location)}`);
    return user;
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({ email, password });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({ email, password });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Helper for logging errors */

function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}

/* Categories */

export async function getCategories() {
    const response = await client.from('categories').select('*');
    return checkError(response);
}

/* Posts */

export async function getPosts() {
    const response = await client.from('posts').select(`
        *,
        category:categories(*)
    `);
    return checkError(response);
}

export async function createPost(post) {
    return await client.from('posts').insert(post);
}

export async function addUser(email) {
    const newUser = {
        name: "User hasn't given name",
        email: email,
        bio: "User hasn't written bio"
    };
    await client.from('profiles').insert(newUser);
}

export async function getProfiles() {
    const profiles = await client.from('profiles').select('*');
    return profiles.data;
}

export async function getProfile(id) {
    const newProfile = await client.from('profiles').select('*').match({ id }).single();
    return newProfile;
}

export async function saveProfile(profile) {
    await client.from('profiles').upsert(profile);
}