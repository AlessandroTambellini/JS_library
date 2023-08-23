function promiseSequence(inputs, promiseMaker) {
    inputs = [...inputs];

    function handleNextInput(outputs) {
        if (inputs.length === 0) return outputs;
        else {
            let nextInput = inputs.shift();
            return promiseMaker(nextInput)
                .then((output) => outputs.concat(output))
                .then(handleNextInput);
        }
    }

    return Promise.resolve([]).then(handleNextInput);
}



function fetchBody(url) {
    return fetch(url).then((response) => response.text());
}

const urls = ["https://24pullrequests.com/pull_requests.json", "https://24pullrequests.com/projects.json", "https://24pullrequests.com/pull_requests/meta.json"];

promiseSequence(urls, fetchBody)
    .then((bodies) => {
        bodies.forEach(body => {
            console.log(body + '\n');
        });
    })
    .catch(console.error);