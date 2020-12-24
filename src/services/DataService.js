const apiUrl = 'https://webhook.site/d58c2bb7-5c45-46a5-828d-438c5080249b'

const DataService = {
    async sendForm(data) {
        try {
            const formData = Object.entries(data).reduce((acc, [k, v]) => {
                if (v instanceof FileList)
                    [...v].forEach((x, i) => acc.append(`file${i}`, x))
                else
                    acc.append(k, v)
                return acc
            }, new FormData())

            const response = await fetch(apiUrl, {
                method: 'post',
                body: formData,
            })

            if (response.status !== 200)
                return false;
        } catch (e) {
            console.log(e)
            return false
        }

        return true
    }
}

export default DataService
