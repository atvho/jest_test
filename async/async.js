class Ajax {
    static echo(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data)
                } else {
                    reject (new Error('error bla'))
                }
            }, 150);
        })
    } 
}

module.exports = Ajax