export default class ApiService {
    // we are using proxy locally, I'd make urls an env var
    BASE_NYT_URL = 'https://api.nytimes.com';
    API_URL: string = `${this.BASE_NYT_URL}/svc/topstories/v2/science.json?api-key=Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil`;

    async get() {
        return await fetch(this.API_URL)
            .then(response => response.json())
            .then(responseData => {
                return responseData.results;
            })
            .catch(err => {
                // api service is responsible for graceful error handling of api requests/responses
                return { error: err };
            });
    }

    async post() {
        // not implemented
    }
}