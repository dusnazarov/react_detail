function load() {
    return fetch('https://reqres.in/api/users')
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((err) => {
        console.log(err);
    });
}
export default load;
