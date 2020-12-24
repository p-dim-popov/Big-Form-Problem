const colors = [
    {key: '#FF0000', value: 'red', textContent: 'Red'},
    {key: '#00FF00', value: 'green', textContent: 'Green'},
    {key: '#0000FF', value: 'blue', textContent: 'Blue'},
];

const ColorsService = {
    async getAll() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return colors
    }
}

export default ColorsService;
